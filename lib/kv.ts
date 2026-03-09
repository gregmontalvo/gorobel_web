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

export interface SiteSettings {
  phone: string;
  whatsapp: string;
  email: string;
  announcement: string | null;
  schedule: Record<string, string>;
  pricing: Record<string, string>;
}

// ─── Default settings ────────────────────────────────────────────────────────

const DEFAULT_SETTINGS: SiteSettings = {
  phone: "667 521 542",
  whatsapp: "34667521542",
  email: "gorobelgara@gmail.com",
  announcement: null,
  schedule: {
    CrossTraining: "L-V: 7:00-8:30, 9:00-10:30, 17:30-20:30. S: 9:30-11:00",
    Boxeo: "L-V: 19:00-20:00. Consultar horarios actualizados.",
    "Kick Boxing": "L-V: 20:00-21:00. Consultar horarios actualizados.",
    "Jiu Jitsu": "L-V: 20:30-22:00. S: 10:00-11:30",
    OCR: "Consultar calendario de eventos en recepción.",
  },
  pricing: {
    CrossTraining: "Consultar en recepción o por WhatsApp.",
    "Artes Marciales": "Consultar en recepción o por WhatsApp.",
    "Pack Combinado": "Consultar en recepción o por WhatsApp.",
  },
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

export async function getSiteSettings(): Promise<SiteSettings> {
  const settings = await kv.get<SiteSettings>("site:settings");
  return settings ?? DEFAULT_SETTINGS;
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
