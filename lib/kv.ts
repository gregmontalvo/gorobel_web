import { kv } from "@vercel/kv";
import { randomUUID } from "crypto";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface KbEntry {
  id: string;
  category: string;
  question: string;
  answer: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  createdAt: string;
}

export interface FounderLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

/** Featured notice shown at the top of every page (events, enrolments, closures). */
export interface SiteBanner {
  active: boolean;
  text: { es: string; eu: string };
  ctaLabel: { es: string; eu: string };
  /** Internal path ("/contacto") or absolute URL. */
  ctaHref: string;
  /** ISO date; the notice disappears by itself after it. */
  expiresAt: string | null;
}

export interface SiteSettings {
  phone: string;
  whatsapp: string;
  email: string;
  announcement: string | null;
  banner?: SiteBanner | null;
  schedule: Record<string, string>;
  pricing: Record<string, string>;
}

// ─── Default settings ────────────────────────────────────────────────────────

// Schedules and prices are left empty on purpose: the chat sends visitors to the team until the club fills them in.
const DEFAULT_SETTINGS: SiteSettings = {
  phone: "667 521 542",
  whatsapp: "34667521542",
  email: "info@gorobelgara.com",
  announcement: null,
  banner: null,
  schedule: {},
  pricing: {},
};

// ─── Knowledge Base ───────────────────────────────────────────────────────────

export async function getKbEntries(): Promise<KbEntry[]> {
  const ids = await kv.get<string[]>("kb:index");
  if (!ids || ids.length === 0) return [];
  const entries = await Promise.all(ids.map((id) => kv.get<KbEntry>(`kb:${id}`)));
  return entries.filter(Boolean) as KbEntry[];
}

export async function getActiveKbEntries(): Promise<KbEntry[]> {
  const all = await getKbEntries();
  return all.filter((e) => e.active);
}

export async function createKbEntry(
  data: Pick<KbEntry, "category" | "question" | "answer">
): Promise<KbEntry> {
  const id = randomUUID();
  const now = new Date().toISOString();
  const entry: KbEntry = { id, ...data, active: true, createdAt: now, updatedAt: now };
  await kv.set(`kb:${id}`, entry);
  const ids = (await kv.get<string[]>("kb:index")) ?? [];
  await kv.set("kb:index", [id, ...ids]);
  return entry;
}

export async function updateKbEntry(id: string, data: Partial<KbEntry>): Promise<KbEntry | null> {
  const existing = await kv.get<KbEntry>(`kb:${id}`);
  if (!existing) return null;
  const updated: KbEntry = { ...existing, ...data, id, updatedAt: new Date().toISOString() };
  await kv.set(`kb:${id}`, updated);
  return updated;
}

export async function deleteKbEntry(id: string): Promise<void> {
  await kv.del(`kb:${id}`);
  const ids = (await kv.get<string[]>("kb:index")) ?? [];
  await kv.set("kb:index", ids.filter((i) => i !== id));
}

// ─── Leads — Contact ─────────────────────────────────────────────────────────

export async function saveContactLead(
  data: Omit<ContactLead, "id" | "createdAt">
): Promise<ContactLead> {
  const id = randomUUID();
  const lead: ContactLead = { id, ...data, createdAt: new Date().toISOString() };
  await kv.set(`lead:contact:${id}`, lead);
  const ids = (await kv.get<string[]>("lead:contact:index")) ?? [];
  await kv.set("lead:contact:index", [id, ...ids]);
  return lead;
}

export async function getContactLeads(): Promise<ContactLead[]> {
  const ids = (await kv.get<string[]>("lead:contact:index")) ?? [];
  if (ids.length === 0) return [];
  const leads = await Promise.all(ids.map((id) => kv.get<ContactLead>(`lead:contact:${id}`)));
  return leads.filter(Boolean) as ContactLead[];
}

// ─── Leads — Founders ────────────────────────────────────────────────────────

export async function saveFounderLead(
  data: Omit<FounderLead, "id" | "createdAt">
): Promise<FounderLead> {
  const id = randomUUID();
  const lead: FounderLead = { id, ...data, createdAt: new Date().toISOString() };
  await kv.set(`lead:founder:${id}`, lead);
  const ids = (await kv.get<string[]>("lead:founder:index")) ?? [];
  await kv.set("lead:founder:index", [id, ...ids]);
  return lead;
}

export async function getFounderLeads(): Promise<FounderLead[]> {
  const ids = (await kv.get<string[]>("lead:founder:index")) ?? [];
  if (ids.length === 0) return [];
  const leads = await Promise.all(ids.map((id) => kv.get<FounderLead>(`lead:founder:${id}`)));
  return leads.filter(Boolean) as FounderLead[];
}

// ─── Site Settings ────────────────────────────────────────────────────────────

/** True when the KV credentials are present (Vercel KV or Upstash integration). */
export function isKvConfigured(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

/** Stored settings over the defaults; falls back to the defaults when KV is missing or down. */
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isKvConfigured()) return DEFAULT_SETTINGS;
  try {
    const stored = await kv.get<Partial<SiteSettings>>("site:settings");
    return stored ? { ...DEFAULT_SETTINGS, ...stored } : DEFAULT_SETTINGS;
  } catch (error) {
    console.warn("[kv] site settings unavailable, using defaults:", error instanceof Error ? error.message : error);
    return DEFAULT_SETTINGS;
  }
}

export async function updateSiteSettings(data: Partial<SiteSettings>): Promise<SiteSettings> {
  const current = await getSiteSettings();
  const updated: SiteSettings = { ...current, ...data };
  await kv.set("site:settings", updated);
  return updated;
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export async function getStats() {
  const [kbIds, contactIds, founderIds] = await Promise.all([
    kv.get<string[]>("kb:index"),
    kv.get<string[]>("lead:contact:index"),
    kv.get<string[]>("lead:founder:index"),
  ]);
  const kbEntries = kbIds ? await getKbEntries() : [];
  return {
    kb: { total: kbIds?.length ?? 0, active: kbEntries.filter((e) => e.active).length },
    leads: { contact: contactIds?.length ?? 0, founders: founderIds?.length ?? 0 },
  };
}
