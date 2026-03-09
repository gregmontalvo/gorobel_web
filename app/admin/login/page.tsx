"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dumbbell, Eye, EyeOff, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      const data = await res.json();
      setError(data.error || "Contraseña incorrecta");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-charcoal)] p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[var(--color-forest)] flex items-center justify-center mb-4">
            <Dumbbell className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-white font-display font-bold text-xl">Gorobel Admin</h1>
          <p className="text-[var(--color-stone)] text-sm mt-1">Panel de administración</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--color-iron)] rounded-2xl p-6 space-y-4"
        >
          <div>
            <label className="block text-[var(--color-mist)] text-sm mb-1.5">Contraseña</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                className="w-full bg-[var(--color-charcoal)] text-white border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm outline-none focus:border-[var(--color-sage)] transition-colors"
                placeholder="Introduce tu contraseña"
              />
              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-stone)] hover:text-white transition-colors"
              >
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-500/10 rounded-lg px-3 py-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 rounded-xl bg-[var(--color-forest)] text-white font-semibold text-sm hover:bg-[var(--color-forest-dark)] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
