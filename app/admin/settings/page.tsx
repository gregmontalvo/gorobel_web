"use client";

import { useState, useEffect } from "react";
import { Loader2, Check, Phone, Mail, Megaphone, Clock, Tag, AlertTriangle } from "lucide-react";
import type { SiteBanner, SiteSettings } from "@/lib/kv";

const ACTIVITIES = [
  "CrossTraining y Functional Fitness",
  "Fuerza y movilidad",
  "Barre",
  "Endurance y entrenamiento híbrido",
  "Gorobel Fight",
  "Recuperación deportiva",
  "Fuerza y movilidad +55",
  "Equipos y competición",
  "Infancia y juventud",
];
const PRICING_KEYS = ["Cuotas generales", "Gorobel Fight", "Infancia y juventud"];

const EMPTY_BANNER: SiteBanner = {
  active: false,
  text: { es: "", eu: "" },
  ctaLabel: { es: "", eu: "" },
  ctaHref: "",
  expiresAt: null,
};

const inputClass =
  "w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-moss)] bg-[var(--color-surface)]";

type LoadedSettings = SiteSettings & { storageReady?: boolean };

/** ISO instant to the yyyy-mm-dd the date input shows, in the browser's time zone. */
function toDateInput(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** The notice stays up the whole chosen day. */
function fromDateInput(value: string): string | null {
  if (!value) return null;
  const d = new Date(`${value}T23:59:59`);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<LoadedSettings | null>(null);
  const [expiry, setExpiry] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((data: LoadedSettings) => {
        setSettings(data);
        setExpiry(toDateInput(data.banner?.expiresAt ?? null));
        setLoading(false);
      })
      .catch(() => {
        setLoadError(true);
        setLoading(false);
      });
  }, []);

  const banner = settings?.banner ?? EMPTY_BANNER;
  const updateBanner = (patch: Partial<SiteBanner>) =>
    setSettings((s) => s && { ...s, banner: { ...(s.banner ?? EMPTY_BANNER), ...patch } });

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!settings) return;
    setSaving(true);
    setErrors([]);
    try {
      const { storageReady: _ignored, ...payload } = settings;
      void _ignored;
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          banner: { ...(settings.banner ?? EMPTY_BANNER), expiresAt: fromDateInput(expiry) },
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrors(Array.isArray(body.errors) ? body.errors : ["No se han podido guardar los cambios."]);
        return;
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch {
      setErrors(["No se han podido guardar los cambios. Comprueba la conexión."]);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="w-6 h-6 animate-spin text-[var(--color-stone)]" />
      </div>
    );
  }

  if (loadError || !settings) {
    return <p className="text-sm text-red-600 py-8">No se ha podido cargar la configuración.</p>;
  }

  const expired = Boolean(banner.expiresAt && new Date(banner.expiresAt).getTime() < Date.now());

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-[var(--color-charcoal)] mb-1">
        Configuración
      </h1>
      <p className="text-[var(--color-steel)] text-sm mb-8">
        Esta información la usa el chatbot y el aviso destacado de la web.
      </p>

      {settings.storageReady === false && (
        <div className="max-w-2xl mb-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
          <p>
            El almacenamiento (Vercel KV) no está configurado en este entorno: se muestran los valores
            por defecto y no se puede guardar todavía.
          </p>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
        {/* Contacto */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h2 className="font-display font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
            <Phone className="w-4 h-4 text-[var(--color-moss)]" /> Contacto
          </h2>
          <p className="text-xs text-[var(--color-stone)]">
            Los mensajes del formulario de contacto llegan al correo definido en Vercel (CONTACT_TO), no a
            este campo.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                Teléfono
              </label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings((s) => s && { ...s, phone: e.target.value })}
                className={inputClass}
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
                className={inputClass}
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
              className={inputClass}
            />
          </div>
        </section>

        {/* Aviso destacado */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-[var(--color-sage)]" /> Aviso destacado
              </h2>
              <p className="text-xs text-[var(--color-stone)] mt-1">
                Una franja en lo alto de todas las páginas: un evento, una inscripción, un cierre. Se
                apaga sola al llegar la fecha de caducidad.
              </p>
            </div>
            <label className="flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] shrink-0 cursor-pointer">
              <input
                type="checkbox"
                checked={banner.active}
                onChange={(e) => updateBanner({ active: e.target.checked })}
                className="w-4 h-4 cursor-pointer"
              />
              Activo
            </label>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                Texto en castellano
              </label>
              <input
                type="text"
                maxLength={200}
                value={banner.text.es}
                onChange={(e) => updateBanner({ text: { ...banner.text, es: e.target.value } })}
                placeholder="Ej: Fiesta de Halloween el 31 de octubre."
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                Texto en euskera
              </label>
              <input
                type="text"
                maxLength={200}
                value={banner.text.eu}
                onChange={(e) => updateBanner({ text: { ...banner.text, eu: e.target.value } })}
                placeholder="Adib.: Halloween jaia urriaren 31n."
                className={inputClass}
              />
              <p className="text-[11px] text-[var(--color-stone)] mt-1">
                Si lo dejas vacío, en euskera se muestra el castellano.
              </p>
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                Botón en castellano
              </label>
              <input
                type="text"
                maxLength={40}
                value={banner.ctaLabel.es}
                onChange={(e) => updateBanner({ ctaLabel: { ...banner.ctaLabel, es: e.target.value } })}
                placeholder="Inscríbete"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                Botón en euskera
              </label>
              <input
                type="text"
                maxLength={40}
                value={banner.ctaLabel.eu}
                onChange={(e) => updateBanner({ ctaLabel: { ...banner.ctaLabel, eu: e.target.value } })}
                placeholder="Eman izena"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                Destino del botón
              </label>
              <input
                type="text"
                value={banner.ctaHref}
                onChange={(e) => updateBanner({ ctaHref: e.target.value })}
                placeholder="/contacto?asunto=colaboracion o https://…"
                className={inputClass}
              />
              <p className="text-[11px] text-[var(--color-stone)] mt-1">
                Una página de la web (empieza por /) o un enlace completo (https://).
              </p>
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--color-steel)] mb-1.5">
                Caduca el (último día visible)
              </label>
              <input
                type="date"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className={inputClass}
              />
              {expired && (
                <p className="text-[11px] text-amber-700 mt-1">Esta fecha ya ha pasado: el aviso no se muestra.</p>
              )}
            </div>
          </div>

          {(banner.text.es || banner.text.eu) && (
            <div>
              <p className="text-xs font-medium text-[var(--color-steel)] mb-1.5">Vista previa</p>
              <div className="space-y-2">
                {(["es", "eu"] as const).map((lang) => (
                  <div
                    key={lang}
                    className="rounded-lg bg-[var(--color-forest)] px-4 py-2.5 text-center text-sm text-white"
                  >
                    <span>{banner.text[lang] || banner.text.es}</span>
                    {(banner.ctaLabel[lang] || banner.ctaLabel.es) && (
                      <span className="ml-3 font-bold underline underline-offset-4">
                        {banner.ctaLabel[lang] || banner.ctaLabel.es}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
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
                  placeholder="Se consulta con el equipo"
                  className={inputClass}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Precios */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h2 className="font-display font-semibold text-[var(--color-charcoal)] flex items-center gap-2">
            <Tag className="w-4 h-4 text-[var(--color-sage)]" /> Precios
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
                  placeholder="Se consulta con el equipo"
                  className={inputClass}
                />
              </div>
            ))}
          </div>
        </section>

        {errors.length > 0 && (
          <ul className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 space-y-1" role="alert">
            {errors.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        )}

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
