import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import { CLUB } from "@/lib/content/common";
import { home } from "@/lib/content/home";
import type { Locale } from "@/lib/i18n/config";

/** Closing call to action shared by the secondary pages; copy comes from the home page. */
export default function PageCta({ locale }: { locale: Locale }) {
  const cta = home[locale].finalCta;
  return (
    <section className="section-padding bg-[var(--color-forest)]">
      <div className="container-narrow text-center">
        <h2 className="text-headline font-display text-white mb-6">{cta.title}</h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg mx-auto">{cta.body}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href={cta.primary.href} className="btn-primary">
            {cta.primary.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={CLUB.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {cta.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
