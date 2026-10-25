import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { HomeContent } from "@/lib/content/home";
import { PHOTOS, type PhotoKey } from "@/lib/photos";

const BLOCK_PHOTOS: PhotoKey[] = ["kickboxingB", "coach", "group", "kickboxingA"];

export default function CommunitySection({ content }: { content: HomeContent["community"] }) {
  return (
    <section className="section-padding bg-[var(--color-charcoal)]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-16 items-end mb-12">
          <h2 className="text-headline font-display text-white">{content.title}</h2>
          <p className="text-white/65 text-lg leading-relaxed">{content.intro}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {content.blocks.map((block, i) => (
            <article key={block.title}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-5">
                <Image
                  src={PHOTOS[BLOCK_PHOTOS[i % BLOCK_PHOTOS.length]]}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover img-zoom"
                />
              </div>
              <h3 className="font-display font-bold text-white text-lg leading-snug mb-2">{block.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{block.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
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
