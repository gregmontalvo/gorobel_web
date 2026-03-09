"use client";

import { useState, useEffect } from "react";
import { Loader2, Mail, Phone, Calendar } from "lucide-react";
import type { ContactLead, FounderLead } from "@/lib/kv";

type Tab = "contact" | "founders";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function LeadsPage() {
  const [tab, setTab] = useState<Tab>("contact");
  const [contactLeads, setContactLeads] = useState<ContactLead[]>([]);
  const [founderLeads, setFounderLeads] = useState<FounderLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [c, f] = await Promise.all([
        fetch("/api/admin/leads?type=contact").then((r) => r.json()),
        fetch("/api/admin/leads?type=founders").then((r) => r.json()),
      ]);
      setContactLeads(c);
      setFounderLeads(f);
      setLoading(false);
    }
    load();
  }, []);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "contact", label: "Contacto", count: contactLeads.length },
    { key: "founders", label: "Miembros fundadores", count: founderLeads.length },
  ];

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-[var(--color-charcoal)] mb-1">Leads</h1>
      <p className="text-[var(--color-steel)] text-sm mb-6">
        Solicitudes recibidas a través de los formularios del sitio web.
      </p>

      {/* Tabs */}
      <div className="flex gap-1 bg-[var(--color-cream)] rounded-xl p-1 w-fit mb-6">
        {tabs.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
              tab === key
                ? "bg-white text-[var(--color-charcoal)] shadow-sm"
                : "text-[var(--color-stone)] hover:text-[var(--color-charcoal)]"
            }`}
          >
            {label}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full ${
                tab === key
                  ? "bg-[var(--color-forest)] text-white"
                  : "bg-[var(--color-mist)] text-white"
              }`}
            >
              {count}
            </span>
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-[var(--color-stone)]" />
        </div>
      ) : tab === "contact" ? (
        <ContactLeadsTable leads={contactLeads} />
      ) : (
        <FounderLeadsTable leads={founderLeads} />
      )}
    </div>
  );
}

function ContactLeadsTable({ leads }: { leads: ContactLead[] }) {
  if (leads.length === 0) {
    return (
      <p className="text-center py-16 text-[var(--color-stone)] text-sm bg-white rounded-2xl border border-gray-100">
        No hay leads de contacto aún.
      </p>
    );
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="divide-y divide-gray-50">
        {leads.map((lead) => (
          <div key={lead.id} className="p-5 grid sm:grid-cols-[1fr_1fr_auto] gap-4">
            <div>
              <p className="font-medium text-[var(--color-charcoal)] text-sm">{lead.name}</p>
              {lead.interest && (
                <span className="text-xs px-2 py-0.5 mt-1 inline-block rounded-full bg-[var(--color-forest)]/10 text-[var(--color-forest)] font-medium">
                  {lead.interest}
                </span>
              )}
              {lead.message && (
                <p className="text-xs text-[var(--color-stone)] mt-2 leading-relaxed line-clamp-2">
                  {lead.message}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <a
                href={`mailto:${lead.email}`}
                className="flex items-center gap-1.5 text-xs text-[var(--color-steel)] hover:text-[var(--color-forest)] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {lead.email}
              </a>
              {lead.phone && (
                <a
                  href={`tel:${lead.phone}`}
                  className="flex items-center gap-1.5 text-xs text-[var(--color-steel)] hover:text-[var(--color-forest)] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {lead.phone}
                </a>
              )}
            </div>
            <div className="flex items-start gap-1.5 text-xs text-[var(--color-mist)]">
              <Calendar className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              {formatDate(lead.createdAt)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FounderLeadsTable({ leads }: { leads: FounderLead[] }) {
  if (leads.length === 0) {
    return (
      <p className="text-center py-16 text-[var(--color-stone)] text-sm bg-white rounded-2xl border border-gray-100">
        No hay miembros fundadores registrados aún.
      </p>
    );
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="divide-y divide-gray-50">
        {leads.map((lead) => (
          <div key={lead.id} className="p-5 flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-[var(--color-charcoal)] text-sm">{lead.name}</p>
              <div className="flex flex-wrap gap-3 mt-1.5">
                <a
                  href={`mailto:${lead.email}`}
                  className="flex items-center gap-1.5 text-xs text-[var(--color-steel)] hover:text-[var(--color-forest)] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {lead.email}
                </a>
                {lead.phone && (
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex items-center gap-1.5 text-xs text-[var(--color-steel)] hover:text-[var(--color-forest)] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {lead.phone}
                  </a>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--color-mist)] shrink-0">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(lead.createdAt)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
