import { NextRequest, NextResponse } from "next/server";
import {
  getSiteSettings,
  isKvConfigured,
  updateSiteSettings,
  type SiteBanner,
  type SiteSettings,
} from "@/lib/kv";

const LIMITS = { text: 200, label: 40, short: 100, line: 300, entries: 30 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Parsed = { ok: true; data: Partial<SiteSettings> } | { ok: false; errors: string[] };

function str(value: unknown): string | null {
  return typeof value === "string" ? value.trim() : null;
}

function parseRecord(value: unknown, label: string, errors: string[]): Record<string, string> | undefined {
  if (value === undefined) return undefined;
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`${label}: formato no válido`);
    return undefined;
  }
  const entries = Object.entries(value as Record<string, unknown>);
  if (entries.length > LIMITS.entries) errors.push(`${label}: demasiadas entradas`);
  const out: Record<string, string> = {};
  for (const [key, raw] of entries.slice(0, LIMITS.entries)) {
    const text = str(raw);
    if (text === null || key.length > LIMITS.short || text.length > LIMITS.line) {
      errors.push(`${label}: «${key.slice(0, 40)}» no es válido`);
      continue;
    }
    out[key] = text;
  }
  return out;
}

function isSafeHref(href: string): boolean {
  if (href.startsWith("/") && !href.startsWith("//")) return true;
  try {
    const url = new URL(href);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function parseBanner(value: unknown, errors: string[]): SiteBanner | null | undefined {
  if (value === undefined) return undefined;
  if (value === null) return null;
  if (typeof value !== "object" || Array.isArray(value)) {
    errors.push("Aviso destacado: formato no válido");
    return undefined;
  }
  const raw = value as Record<string, unknown>;
  const pair = (field: unknown, max: number, label: string) => {
    const source = (field && typeof field === "object" ? field : {}) as Record<string, unknown>;
    const es = str(source.es) ?? "";
    const eu = str(source.eu) ?? "";
    if (es.length > max || eu.length > max) errors.push(`${label}: máximo ${max} caracteres`);
    return { es: es.slice(0, max), eu: eu.slice(0, max) };
  };

  const active = raw.active === true;
  const text = pair(raw.text, LIMITS.text, "Texto del aviso");
  const ctaLabel = pair(raw.ctaLabel, LIMITS.label, "Texto del botón");
  const ctaHref = str(raw.ctaHref) ?? "";

  let expiresAt: string | null = null;
  if (raw.expiresAt !== null && raw.expiresAt !== undefined && raw.expiresAt !== "") {
    const date = typeof raw.expiresAt === "string" ? new Date(raw.expiresAt) : null;
    if (!date || Number.isNaN(date.getTime())) errors.push("Fecha de caducidad no válida");
    else expiresAt = date.toISOString();
  }

  if (active && !text.es) errors.push("El aviso necesita el texto en castellano");
  if ((ctaLabel.es || ctaLabel.eu) && !ctaHref) errors.push("El botón necesita un destino");
  if (ctaHref && !isSafeHref(ctaHref)) {
    errors.push("El destino del botón debe empezar por / (página de la web) o por https://");
  }
  if (ctaHref && !ctaLabel.es) errors.push("El botón necesita su texto en castellano");

  return { active, text, ctaLabel, ctaHref, expiresAt };
}

function parseSettings(body: unknown): Parsed {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, errors: ["Petición no válida"] };
  }
  const raw = body as Record<string, unknown>;
  const errors: string[] = [];
  const data: Partial<SiteSettings> = {};

  if (raw.phone !== undefined) {
    const phone = str(raw.phone);
    if (phone === null || phone.length > 40) errors.push("Teléfono no válido");
    else data.phone = phone;
  }
  if (raw.whatsapp !== undefined) {
    const whatsapp = str(raw.whatsapp);
    if (whatsapp === null || !/^\d{6,20}$/.test(whatsapp)) {
      errors.push("WhatsApp: solo dígitos con prefijo, por ejemplo 34667521542");
    } else data.whatsapp = whatsapp;
  }
  if (raw.email !== undefined) {
    const email = str(raw.email);
    if (email === null || !EMAIL_PATTERN.test(email) || email.length > 254) errors.push("Email no válido");
    else data.email = email;
  }
  if (raw.announcement !== undefined) {
    const announcement = str(raw.announcement);
    data.announcement = announcement ? announcement.slice(0, LIMITS.text) : null;
  }
  const schedule = parseRecord(raw.schedule, "Horarios", errors);
  if (schedule) data.schedule = schedule;
  const pricing = parseRecord(raw.pricing, "Precios", errors);
  if (pricing) data.pricing = pricing;
  const banner = parseBanner(raw.banner, errors);
  if (banner !== undefined) data.banner = banner;

  return errors.length > 0 ? { ok: false, errors } : { ok: true, data };
}

export async function GET() {
  const settings = await getSiteSettings();
  return NextResponse.json({ ...settings, storageReady: isKvConfigured() });
}

export async function PUT(request: NextRequest) {
  if (!isKvConfigured()) {
    return NextResponse.json(
      { errors: ["El almacenamiento (Vercel KV) no está configurado: no se puede guardar todavía."] },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ errors: ["Petición no válida"] }, { status: 400 });
  }

  const parsed = parseSettings(body);
  if (!parsed.ok) return NextResponse.json({ errors: parsed.errors }, { status: 400 });

  try {
    const updated = await updateSiteSettings(parsed.data);
    return NextResponse.json({ ...updated, storageReady: true });
  } catch (error) {
    console.error("[admin/settings]", error);
    return NextResponse.json({ errors: ["No se han podido guardar los cambios. Inténtalo de nuevo."] }, { status: 500 });
  }
}
