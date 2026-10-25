import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { HomeContent } from "@/lib/content/home";

export default function HistorySection({ content }: { content: HomeContent["history"] }) {
  return (
    <section id="historia" className="section-padding bg-[var(--color-charcoal)]">
      <div className="container-wide">
        <div className="mb-14 max-w-3xl">
          <p className="section-label !text-[var(--color-sage)]">{content.label}</p>
          <h2 className="text-headline font-display text-white mb-6">{content.title}</h2>
          <p className="text-white/65 text-lg leading-relaxed">{content.intro}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {content.blocks.map((block, i) => (
            <article key={block.title} className="bg-[var(--color-iron)] rounded-2xl p-8 flex flex-col gap-4">
              <span className="text-[var(--color-clay)] font-display font-black text-5xl leading-none">
                0{i + 1}
              </span>
              <h3 className="font-display font-bold text-white text-xl leading-snug">{block.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{block.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <Link href={content.cta.href} className="btn-secondary inline-flex items-center gap-2">
            {content.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
