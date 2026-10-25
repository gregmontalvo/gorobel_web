import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { HomeContent } from "@/lib/content/home";
import { PHOTOS } from "@/lib/photos";

export default function HistorySection({ content }: { content: HomeContent["history"] }) {
  return (
    <section id="historia" className="section-padding bg-[var(--color-charcoal)]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-end mb-12">
          <h2 className="text-headline font-display text-white">{content.title}</h2>
          <p className="text-white/65 text-lg leading-relaxed">{content.intro}</p>
        </div>

        <div className="grid grid-cols-6 grid-rows-2 gap-3 h-[420px] sm:h-[520px] lg:h-[600px]">
          <div className="relative col-span-6 row-span-1 lg:col-span-3 lg:row-span-2 overflow-hidden rounded-2xl">
            <Image
              src={PHOTOS.group}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[50%_40%] img-zoom"
            />
          </div>
          <div className="relative col-span-3 lg:col-span-3 row-span-1 overflow-hidden rounded-2xl">
            <Image
              src={PHOTOS.coach}
              alt=""
              fill
              sizes="(max-width: 1024px) 50vw, 50vw"
              className="object-cover object-[60%_50%] img-zoom"
            />
          </div>
          <div className="relative col-span-3 lg:col-span-3 row-span-1 overflow-hidden rounded-2xl">
            <Image
              src={PHOTOS.rig}
              alt=""
              fill
              sizes="(max-width: 1024px) 50vw, 50vw"
              className="object-cover img-zoom"
            />
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-x-12 gap-y-8">
          {content.blocks.map((block) => (
            <article key={block.title} className="border-t border-white/15 pt-5">
              <h3 className="font-display font-bold text-white text-xl leading-snug mb-3">{block.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{block.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link href={content.cta.href} className="btn-secondary inline-flex items-center gap-2">
            {content.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
