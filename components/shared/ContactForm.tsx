"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  privacy: boolean;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al enviar");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[var(--color-forest)]/10 rounded-2xl p-10 text-center">
        <CheckCircle className="w-14 h-14 text-[var(--color-forest)] mx-auto mb-4" />
        <h3 className="font-display font-bold text-[var(--color-charcoal)] text-xl mb-2">
          ¡Mensaje recibido!
        </h3>
        <p className="text-[var(--color-steel)]">
          Te contactaremos en menos de 24 horas. Mientras tanto, síguenos en
          Instagram para conocer más de Gorobel.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
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
          ¿Qué te interesa?
        </label>
        <select {...register("interest")} className="form-input">
          <option value="">Selecciona una disciplina...</option>
          <option value="crosstraining">CrossTraining</option>
          <option value="boxeo">Boxeo</option>
          <option value="kickboxing">Kick Boxing</option>
          <option value="jiujitsu">Jiu Jitsu</option>
          <option value="ocr">OCR</option>
          <option value="musculacion">Nuevo Gimnasio — Musculación</option>
          <option value="otro">Otro / No sé por dónde empezar</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-[var(--color-charcoal)] mb-1.5">
          Mensaje
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Cuéntanos tu nivel, horario preferido de llamada o cualquier pregunta..."
          className="form-input resize-none"
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register("privacy", { required: "Debes aceptar la política de privacidad" })}
            type="checkbox"
            className="w-4 h-4 rounded border-[var(--color-mist)] text-[var(--color-forest)] mt-0.5 shrink-0 cursor-pointer"
          />
          <span className="text-sm text-[var(--color-steel)]">
            He leído y acepto la{" "}
            <a href="/privacidad" className="text-[var(--color-forest)] hover:underline font-medium">
              política de privacidad
            </a>{" "}
            de Gorobel Kirol Gunea
          </span>
        </label>
        {errors.privacy && (
          <p className="text-red-500 text-xs mt-1">{errors.privacy.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar mensaje
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
