import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { HomeContent } from "@/lib/content/home";

export default function PhilosophySection({ content }: { content: HomeContent["philosophy"] }) {
  return (
    <section id="filosofia" className="section-padding bg-[var(--color-cream)]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative h-[520px] hidden lg:block lg:sticky lg:top-28">
            <div className="absolute top-0 left-0 w-[72%] h-[78%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://gorobelgara.com/wp-content/uploads/2025/06/Podcast-y-entreno-73.jpg"
                alt={content.imageAlt1}
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 1024px) 0px, 40vw"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[var(--color-cream)]">
              <Image
                src="https://gorobelgara.com/wp-content/uploads/2025/06/Entreno-49.jpg"
                alt={content.imageAlt2}
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 1024px) 0px, 25vw"
              />
            </div>
            <div className="absolute top-4 right-0 bg-[var(--color-forest)] text-white rounded-2xl px-5 py-4 shadow-xl max-w-[170px]">
              <span className="block text-4xl font-display font-black">{content.badgeValue}</span>
              <span className="text-[var(--color-sage-light)] text-sm font-medium leading-tight">
                {content.badgeLabel}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-headline font-display text-[var(--color-charcoal)] mb-6">
              {content.title}
            </h2>
            <p className="text-[var(--color-steel)] text-lg leading-relaxed mb-10">{content.intro}</p>

            <div className="space-y-7">
              {content.pillars.map(({ title, body }) => (
                <div key={title} className="flex gap-5">
                  <div className="shrink-0 w-1 self-stretch rounded-full bg-[var(--color-sage)]" />
                  <div>
                    <h3 className="font-display font-bold text-[var(--color-charcoal)] mb-1">{title}</h3>
                    <p className="text-[var(--color-steel)] text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href={content.cta.href} className="btn-outline-dark mt-10 inline-flex items-center gap-2">
              {content.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
