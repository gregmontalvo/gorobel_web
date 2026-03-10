"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  privacy: boolean;
}

export default function FoundingMemberForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/nuevo-gimnasio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al enviar");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-[var(--color-forest)]/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-[var(--color-forest)]" />
        </div>
        <h3 className="font-display font-black text-[var(--color-charcoal)] text-2xl mb-3">
          ¡Eres Founding Member!
        </h3>
        <p className="text-[var(--color-steel)] leading-relaxed">
          Te hemos registrado en la lista exclusiva. Te avisaremos antes que nadie
          cuando el nuevo gimnasio esté listo para abrir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="flex items-center gap-2 mb-6">
        <Zap className="w-4 h-4 text-[var(--color-clay)]" fill="currentColor" />
        <span className="text-[var(--color-clay)] text-xs font-bold uppercase tracking-widest">
          Acceso Founding Member — Gratis
        </span>
      </div>

      <div>
        <label className="block text-sm font-bold text-[var(--color-charcoal)] mb-1.5">
          Nombre y apellidos *
        </label>
        <input
          {...register("name", { required: "Campo requerido" })}
          placeholder="Tu nombre completo"
          className="form-input"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold text-[var(--color-charcoal)] mb-1.5">
          Email *
        </label>
        <input
          {...register("email", {
            required: "Campo requerido",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" },
          })}
          type="email"
          placeholder="tu@email.com"
          className="form-input"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold text-[var(--color-charcoal)] mb-1.5">
          Teléfono *
        </label>
        <input
          {...register("phone", { required: "Campo requerido" })}
          type="tel"
          placeholder="+34 600 000 000"
          className="form-input"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer pt-1">
        <input
          {...register("privacy", { required: "Requerido" })}
          type="checkbox"
          className="w-4 h-4 rounded border-[var(--color-mist)] text-[var(--color-forest)] mt-0.5 shrink-0 cursor-pointer"
        />
        <span className="text-sm text-[var(--color-steel)]">
          Acepto la{" "}
          <a href="/privacidad" className="text-[var(--color-forest)] hover:underline font-medium">
            política de privacidad
          </a>
        </span>
      </label>
      {errors.privacy && (
        <p className="text-red-500 text-xs">{errors.privacy.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center text-base py-4 mt-2 bg-[var(--color-clay)] hover:bg-[var(--color-clay-light)] !text-[var(--color-charcoal)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Registrando...
          </>
        ) : (
          <>
            Soy Founding Member
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[var(--color-stone)] text-xs text-center">
        Sin coste. Sin compromiso. Solo avisamos cuando abrimos.
      </p>
    </form>
  );
}
