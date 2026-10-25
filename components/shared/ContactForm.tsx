"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertTriangle, MessageCircle, Phone } from "lucide-react";
import Link from "@/components/i18n/Link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { ACTIVITY_IDS, contact, isActivityId } from "@/lib/content/contact";
import { CLUB } from "@/lib/content/common";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  privacy: boolean;
  website: string;
}

type Outcome = "idle" | "sent" | "failed" | "tooMany";

export default function ContactForm() {
  const locale = useLocale();
  const t = contact[locale].form;
  const [outcome, setOutcome] = useState<Outcome>("idle");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ defaultValues: { interest: "" } });

  // /contacto?asunto=colaboracion (or any activity id) preselects the interest.
  useEffect(() => {
    const subject = new URLSearchParams(window.location.search).get("asunto");
    if (subject && isActivityId(subject)) setValue("interest", subject);
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (res.ok) setOutcome("sent");
      else setOutcome(res.status === 429 ? "tooMany" : "failed");
    } catch {
      setOutcome("failed");
    }
  };

  if (outcome === "sent") {
    return (
      <div className="bg-[var(--color-forest)]/10 rounded-2xl p-10 text-center" role="status">
        <CheckCircle className="w-14 h-14 text-[var(--color-forest)] mx-auto mb-4" />
        <h3 className="font-display font-bold text-[var(--color-charcoal)] text-xl mb-2">
          {t.success.title}
        </h3>
        <p className="text-[var(--color-steel)]">{t.success.text}</p>
      </div>
    );
  }

  const label = "block text-sm font-bold text-[var(--color-charcoal)] mb-1.5";
  const error = "text-red-600 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {outcome !== "idle" && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5" role="alert">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[var(--color-charcoal)]">{t.failure.title}</p>
              <p className="text-sm text-[var(--color-steel)] mt-1">
                {outcome === "tooMany" ? t.failure.tooMany : t.failure.text}
              </p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm font-bold">
                <a
                  href={CLUB.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-forest)] hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.failure.whatsapp}
                </a>
                <a
                  href={CLUB.phoneHref}
                  className="inline-flex items-center gap-2 text-[var(--color-forest)] hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  {t.failure.call} {CLUB.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Honeypot: people never see it, bots fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input {...register("website")} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className={label}>
            {t.name} *
          </label>
          <input
            id="contact-name"
            {...register("name", { required: t.errors.required, minLength: { value: 2, message: t.errors.required } })}
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className="form-input"
          />
          {errors.name && <p className={error}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className={label}>
            {t.phone} *
          </label>
          <input
            id="contact-phone"
            {...register("phone", {
              required: t.errors.required,
              pattern: { value: /^[+\d][\d\s().-]{5,}$/, message: t.errors.phone },
            })}
            type="tel"
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
            className="form-input"
          />
          {errors.phone && <p className={error}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className={label}>
          {t.email} *
        </label>
        <input
          id="contact-email"
          {...register("email", {
            required: t.errors.required,
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t.errors.email },
          })}
          type="email"
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          className="form-input"
        />
        {errors.email && <p className={error}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-interest" className={label}>
          {t.interest}
        </label>
        <select id="contact-interest" {...register("interest")} className="form-input">
          <option value="">{t.interestPlaceholder}</option>
          {ACTIVITY_IDS.map((id) => (
            <option key={id} value={id}>
              {t.activities[id]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={label}>
          {t.message} *
        </label>
        <textarea
          id="contact-message"
          {...register("message", {
            required: t.errors.required,
            minLength: { value: 5, message: t.errors.message },
          })}
          rows={4}
          placeholder={t.messagePlaceholder}
          className="form-input resize-none"
        />
        {errors.message && <p className={error}>{errors.message.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register("privacy", { required: t.errors.privacy })}
            type="checkbox"
            className="w-4 h-4 rounded border-[var(--color-mist)] text-[var(--color-forest)] mt-0.5 shrink-0 cursor-pointer"
          />
          <span className="text-sm text-[var(--color-steel)]">
            {t.privacyBefore}{" "}
            <Link href="/privacidad" className="text-[var(--color-forest)] hover:underline font-medium">
              {t.privacyLink}
            </Link>
            {t.privacyAfter && <> {t.privacyAfter}</>}
          </span>
        </label>
        {errors.privacy && <p className={error}>{errors.privacy.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {t.sending}
          </>
        ) : (
          <>
            {t.submit}
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
