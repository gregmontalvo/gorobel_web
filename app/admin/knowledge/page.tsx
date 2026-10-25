"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, ToggleLeft, ToggleRight, Loader2, X, Check } from "lucide-react";
import type { KbEntry } from "@/lib/kv";

const CATEGORIES = ["Horarios", "Precios", "Entrenamientos", "Ubicación", "General", "Promociones"];

function EntryModal({
  entry,
  onClose,
  onSave,
}: {
  entry: Partial<KbEntry> | null;
  onClose: () => void;
  onSave: (data: Partial<KbEntry>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    category: entry?.category ?? "General",
    question: entry?.question ?? "",
    answer: entry?.answer ?? "",
  });
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await onSave({ ...entry, ...form });
    setSaving(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-display font-bold text-[var(--color-charcoal)]">
            {entry?.id ? "Editar entrada" : "Nueva entrada"}
          </h2>
          <button onClick={onClose} className="text-[var(--color-stone)] hover:text-[var(--color-charcoal)]">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-steel)] mb-1">
              Categoría
            </label>
            <select
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-moss)] bg-[var(--color-surface)]"
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-steel)] mb-1">
              Pregunta / Tema
            </label>
            <input
              type="text"
              value={form.question}
              onChange={(e) => setForm((f) => ({ ...f, question: e.target.value }))}
              required
              placeholder="¿Puedo empezar si nunca he entrenado?"
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-moss)] bg-[var(--color-surface)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-steel)] mb-1">
              Respuesta
            </label>
            <textarea
              value={form.answer}
              onChange={(e) => setForm((f) => ({ ...f, answer: e.target.value }))}
              required
              rows={4}
              placeholder="Sí. Hablamos contigo y adaptamos el entrenamiento a tu punto de partida…"
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-moss)] bg-[var(--color-surface)] resize-none"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-[var(--color-steel)] hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 py-2.5 rounded-xl bg-[var(--color-forest)] text-white text-sm font-semibold hover:bg-[var(--color-forest-dark)] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              <Check className="w-4 h-4" />
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function KnowledgePage() {
  const [entries, setEntries] = useState<KbEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<Partial<KbEntry> | null | false>(false);

  async function load() {
    const res = await fetch("/api/admin/knowledge");
    const data = await res.json();
    setEntries(data);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleSave(data: Partial<KbEntry>) {
    if (data.id) {
      await fetch("/api/admin/knowledge", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } else {
      await fetch("/api/admin/knowledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
    setModal(false);
    load();
  }

  async function handleToggle(entry: KbEntry) {
    await fetch("/api/admin/knowledge", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: entry.id, active: !entry.active }),
    });
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("¿Eliminar esta entrada?")) return;
    await fetch("/api/admin/knowledge", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  const byCategory = entries.reduce<Record<string, KbEntry[]>>((acc, e) => {
    (acc[e.category] ??= []).push(e);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="font-display font-bold text-2xl text-[var(--color-charcoal)] mb-1">
            Base de conocimiento
          </h1>
          <p className="text-[var(--color-steel)] text-sm">
            El chatbot usa estas entradas para responder a los clientes.
          </p>
        </div>
        <button
          onClick={() => setModal({})}
          className="btn-primary inline-flex items-center gap-2 text-sm"
        >
          <Plus className="w-4 h-4" />
          Añadir entrada
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-[var(--color-stone)]" />
        </div>
      ) : entries.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <p className="text-[var(--color-stone)] text-sm mb-4">
            No hay entradas aún. Añade la primera para entrenar al chatbot.
          </p>
          <button onClick={() => setModal({})} className="btn-primary inline-flex items-center gap-2 text-sm">
            <Plus className="w-4 h-4" />
            Añadir primera entrada
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(byCategory).map(([category, items]) => (
            <div key={category} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-5 py-3 bg-[var(--color-surface)] border-b border-gray-100 flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-stone)]">
                  {category}
                </span>
                <span className="text-xs text-[var(--color-mist)]">({items.length})</span>
              </div>
              <div className="divide-y divide-gray-50">
                {items.map((entry) => (
                  <div key={entry.id} className="flex items-start gap-4 px-5 py-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-[var(--color-charcoal)] mb-1">
                        {entry.question}
                      </p>
                      <p className="text-xs text-[var(--color-stone)] line-clamp-2 leading-relaxed">
                        {entry.answer}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleToggle(entry)}
                        title={entry.active ? "Desactivar" : "Activar"}
                        className={`p-1.5 rounded-lg transition-colors ${
                          entry.active
                            ? "text-[var(--color-moss)] hover:bg-[var(--color-moss)]/10"
                            : "text-[var(--color-mist)] hover:bg-gray-100"
                        }`}
                      >
                        {entry.active ? (
                          <ToggleRight className="w-5 h-5" />
                        ) : (
                          <ToggleLeft className="w-5 h-5" />
                        )}
                      </button>
                      <button
                        onClick={() => setModal(entry)}
                        className="p-1.5 rounded-lg text-[var(--color-stone)] hover:bg-[var(--color-surface)] transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="p-1.5 rounded-lg text-[var(--color-stone)] hover:bg-red-50 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {modal !== false && (
        <EntryModal
          entry={modal}
          onClose={() => setModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
