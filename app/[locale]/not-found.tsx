"use client";

import Link from "@/components/i18n/Link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { notFoundContent } from "@/lib/content/not-found";

export default function NotFound() {
  const c = notFoundContent[useLocale()];
  return (
    <section className="pt-40 pb-28 bg-[var(--color-charcoal)]">
      <div className="container-narrow text-center">
        <p className="section-label justify-center !text-[var(--color-sage)]">{c.label}</p>
        <h1 className="text-headline font-display text-white mb-5">{c.title}</h1>
        <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">{c.body}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href={c.home.href} className="btn-primary">
            {c.home.label}
          </Link>
          <Link href={c.contact.href} className="btn-secondary">
            {c.contact.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
