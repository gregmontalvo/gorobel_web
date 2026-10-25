import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { HomeContent } from "@/lib/content/home";

export default function CommunitySection({ content }: { content: HomeContent["community"] }) {
  return (
    <section className="section-padding bg-[var(--color-charcoal)]">
      <div className="container-wide">
        <div className="max-w-3xl mb-14">
          <p className="section-label !text-[var(--color-sage)]">{content.label}</p>
          <h2 className="text-headline font-display text-white mb-5">{content.title}</h2>
          <p className="text-white/65 text-lg leading-relaxed">{content.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.blocks.map((block) => (
            <article key={block.title} className="bg-[var(--color-iron)] rounded-2xl p-7 flex flex-col gap-3">
              <h3 className="font-display font-bold text-white text-lg leading-snug">{block.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{block.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={content.primary.href} className="btn-primary">
            {content.primary.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href={content.secondary.href} className="btn-secondary">
            {content.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
