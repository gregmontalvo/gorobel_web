"use client";

import { useState, useEffect } from "react";
import { Loader2, Check, Phone, Mail, Megaphone, Clock, Tag } from "lucide-react";
import type { SiteSettings } from "@/lib/kv";

const ACTIVITIES = ["CrossTraining", "Boxeo", "Kick Boxing", "Jiu Jitsu", "OCR"];
const PRICING_KEYS = ["CrossTraining", "Artes Marciales", "Pack Combinado"];

export default function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        setSettings(data);
        setLoading(false);
      });
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!settings) return;
    setSaving(true);
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  if (loading || !settings) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="w-6 h-6 animate-spin text-[var(--color-stone)]" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-[var(--color-charcoal)] mb-1">
        Configuración
      </h1>
      <p className="text-[var(--color-steel)] text-sm mb-8">
        Esta información la usa el chatbot y se puede mostrar en la web.
      </p>

      <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
        {/* Contacto */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h2 className="font-display font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
            <Phone className="w-4 h-4 text-[var(--color-moss)]" /> Contacto
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                Teléfono
              </label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings((s) => s && { ...s, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-moss)] bg-[var(--color-surface)]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                WhatsApp (con prefijo, ej: 34667521542)
              </label>
              <input
                type="text"
                value={settings.whatsapp}
                onChange={(e) => setSettings((s) => s && { ...s, whatsapp: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-moss)] bg-[var(--color-surface)]"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> Email
            </label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings((s) => s && { ...s, email: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-moss)] bg-[var(--color-surface)]"
            />
          </div>
        </section>

        {/* Anuncio */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-3">
          <h2 className="font-display font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
            <Megaphone className="w-4 h-4 text-[var(--color-clay)]" /> Mensaje de anuncio
          </h2>
          <p className="text-xs text-[var(--color-stone)]">
            Deja en blanco para no mostrar ningún anuncio.
          </p>
          <input
            type="text"
            value={settings.announcement ?? ""}
            onChange={(e) =>
              setSettings((s) => s && { ...s, announcement: e.target.value || null })
            }
            placeholder="Ej: ¡Nuevo gimnasio de musculación abriendo pronto!"
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-moss)] bg-[var(--color-surface)]"
          />
        </section>

        {/* Horarios */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h2 className="font-display font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--color-sage)]" /> Horarios
          </h2>
          <div className="space-y-3">
            {ACTIVITIES.map((activity) => (
              <div key={activity}>
                <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                  {activity}
                </label>
                <input
                  type="text"
                  value={settings.schedule?.[activity] ?? ""}
                  onChange={(e) =>
                    setSettings((s) =>
                      s ? { ...s, schedule: { ...s.schedule, [activity]: e.target.value } } : s
                    )
                  }
                  placeholder="L-V: 17:30-20:30"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-moss)] bg-[var(--color-surface)]"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Precios */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h2 className="font-display font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
            <Tag className="w-4 h-4 text-[var(--color-clay)]" /> Precios
          </h2>
          <div className="space-y-3">
            {PRICING_KEYS.map((plan) => (
              <div key={plan}>
                <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                  {plan}
                </label>
                <input
                  type="text"
                  value={settings.pricing?.[plan] ?? ""}
                  onChange={(e) =>
                    setSettings((s) =>
                      s ? { ...s, pricing: { ...s.pricing, [plan]: e.target.value } } : s
                    )
                  }
                  placeholder="45€/mes sin permanencia"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-moss)] bg-[var(--color-surface)]"
                />
              </div>
            ))}
          </div>
        </section>

        <button
          type="submit"
          disabled={saving}
          className="btn-primary inline-flex items-center gap-2"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : saved ? (
            <Check className="w-4 h-4" />
          ) : null}
          {saved ? "¡Guardado!" : "Guardar cambios"}
        </button>
      </form>
    </div>
  );
}
