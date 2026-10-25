import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { HomeContent } from "@/lib/content/home";
import { PHOTOS } from "@/lib/photos";

export default function CentersPreview({ content }: { content: HomeContent["centers"] }) {
  const centers = [
    { key: "laudio", city: "Laudio", ...content.laudio, image: PHOTOS.floor, position: "object-[50%_60%]" },
    { key: "amurrio", city: "Amurrio", ...content.amurrio, image: PHOTOS.group, position: "object-[50%_45%]" },
  ];

  return (
    <section className="section-padding bg-[var(--color-cream)]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-16 items-end mb-12">
          <h2 className="text-headline font-display text-[var(--color-charcoal)]">{content.title}</h2>
          <p className="text-[var(--color-steel)] text-lg leading-relaxed">{content.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {centers.map((center) => (
            <Link
              key={center.key}
              href={center.cta.href}
              className="group relative block overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[4/3]"
            >
              <Image
                src={center.image}
                alt={center.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover ${center.position} transition-transform duration-700 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 via-45% to-transparent" />
              <div className="absolute top-5 left-5 bg-[var(--color-forest)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                {center.city}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <h3 className="font-display font-extrabold text-white text-2xl lg:text-3xl mb-2">{center.name}</h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-md mb-5">{center.body}</p>
                <span className="text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  {center.cta.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--color-charcoal)]/15 pt-6">
          <p className="text-[var(--color-charcoal)]">
            <span className="font-display font-bold">{content.help.title}</span>{" "}
            <span className="text-[var(--color-steel)]">{content.help.body}</span>
          </p>
          <Link href={content.help.cta.href} className="btn-outline-dark shrink-0 inline-flex items-center gap-2">
            {content.help.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
