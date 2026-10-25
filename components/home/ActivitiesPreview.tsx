import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { HomeContent } from "@/lib/content/home";

export default function ActivitiesPreview({ content }: { content: HomeContent["activities"] }) {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="container-wide">
        <div className="max-w-3xl mb-14">
          <p className="section-label">{content.label}</p>
          <h2 className="text-headline font-display text-[var(--color-charcoal)] mb-5">{content.title}</h2>
          <p className="text-[var(--color-steel)] text-lg leading-relaxed">{content.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl card-hover flex flex-col gap-3 border border-[var(--color-mist)]/20"
            >
              <span className="text-[var(--color-sage)] font-display font-black text-3xl leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-bold text-[var(--color-charcoal)] text-lg leading-snug">
                {item.title}
              </h3>
              <p className="text-[var(--color-steel)] text-sm leading-relaxed flex-1">{item.body}</p>
              <ArrowRight className="w-4 h-4 text-[var(--color-forest)] group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={content.primary.href} className="btn-primary">
            {content.primary.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href={content.secondary.href} className="btn-outline-dark">
            {content.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
