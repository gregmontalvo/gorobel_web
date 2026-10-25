import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "@/components/i18n/Link";
import { CLUB } from "@/lib/content/common";
import type { HomeContent } from "@/lib/content/home";

export default function FinalCta({ content }: { content: HomeContent["finalCta"] }) {
  return (
    <section className="section-padding bg-[var(--color-forest)]">
      <div className="container-narrow text-center">
        <h2 className="text-headline font-display text-white mb-6">{content.title}</h2>
        <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">{content.body}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={content.primary.href}
            className="btn-primary bg-white text-[var(--color-forest)] hover:bg-[var(--color-cream)] text-base px-8 py-4"
          >
            {content.primary.label}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={CLUB.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base px-8 py-4"
          >
            <MessageCircle className="w-5 h-5" />
            {content.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
