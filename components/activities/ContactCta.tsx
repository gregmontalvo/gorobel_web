import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "@/components/i18n/Link";

interface ContactCtaProps {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

/** Closing call to action that leads to the contact page. */
export default function ContactCta({ title, body, primary, secondary }: ContactCtaProps) {
  return (
    <section className="section-padding bg-[var(--color-forest)]">
      <div className="container-narrow text-center">
        <h2 className="text-headline font-display text-white mb-6">{title}</h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg mx-auto">{body}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primary.href}
            className="btn-primary bg-white text-[var(--color-forest)] hover:bg-[var(--color-cream)] text-base px-8 py-4"
          >
            {primary.label}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base px-8 py-4"
          >
            <MessageCircle className="w-5 h-5" />
            {secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
