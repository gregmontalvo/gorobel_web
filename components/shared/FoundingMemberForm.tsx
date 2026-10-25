"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { NewCenterContent } from "@/lib/content/new-center";

interface FormData {
  name: string;
  email: string;
  phone: string;
  privacy: boolean;
}

/** Interest list for the new strength and barre spaces in Laudio. */
export default function FoundingMemberForm({ text }: { text: NewCenterContent["form"] }) {
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setFailed(false);
    try {
      const res = await fetch("/api/nuevo-gimnasio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setSubmitted(true);
    } catch {
      setFailed(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-[var(--color-forest)]/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-[var(--color-forest)]" />
        </div>
        <h3 className="font-display font-black text-white text-2xl mb-3">{text.successTitle}</h3>
        <p className="text-white/65 leading-relaxed">{text.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <h3 className="font-display font-black text-white text-xl mb-2">{text.heading}</h3>

      <div>
        <label htmlFor="interest-name" className="block text-sm font-bold text-white/80 mb-1.5">
          {text.name}
        </label>
        <input
          id="interest-name"
          {...register("name", { required: text.required })}
          autoComplete="name"
          placeholder={text.namePlaceholder}
          className="form-input"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="interest-email" className="block text-sm font-bold text-white/80 mb-1.5">
          {text.email}
        </label>
        <input
          id="interest-email"
          {...register("email", {
            required: text.required,
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: text.invalidEmail },
          })}
          type="email"
          autoComplete="email"
          placeholder={text.emailPlaceholder}
          className="form-input"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="interest-phone" className="block text-sm font-bold text-white/80 mb-1.5">
          {text.phone}
        </label>
        <input
          id="interest-phone"
          {...register("phone", { required: text.required })}
          type="tel"
          autoComplete="tel"
          placeholder={text.phonePlaceholder}
          className="form-input"
        />
        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <label className="flex items-start gap-3 cursor-pointer pt-1">
        <input
          {...register("privacy", { required: text.privacyRequired })}
          type="checkbox"
          className="w-4 h-4 rounded border-[var(--color-mist)] text-[var(--color-forest)] mt-0.5 shrink-0 cursor-pointer"
        />
        <span className="text-sm text-white/65">
          {text.privacyPrefix}{" "}
          <Link href="/privacidad" className="text-[var(--color-clay)] hover:underline font-medium">
            {text.privacyLink}
          </Link>
        </span>
      </label>
      {errors.privacy && <p className="text-red-400 text-xs">{errors.privacy.message}</p>}

      {failed && (
        <p role="alert" className="text-red-400 text-sm">
          {text.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center text-base py-4 mt-2 bg-[var(--color-clay)] hover:bg-[var(--color-clay-light)] !text-[var(--color-charcoal)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-[var(--color-charcoal)]/30 border-t-[var(--color-charcoal)] rounded-full animate-spin" />
            {text.submitting}
          </>
        ) : (
          <>
            {text.submit}
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-white/40 text-xs text-center">{text.note}</p>
    </form>
  );
}
