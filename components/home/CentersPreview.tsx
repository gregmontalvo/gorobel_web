import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { HomeContent } from "@/lib/content/home";

const IMAGES = {
  laudio: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
  amurrio: "https://gorobelgara.com/wp-content/uploads/2025/06/Entreno-49.jpg",
};

export default function CentersPreview({ content }: { content: HomeContent["centers"] }) {
  const centers = [
    { key: "laudio", city: "Laudio", ...content.laudio, image: IMAGES.laudio },
    { key: "amurrio", city: "Amurrio", ...content.amurrio, image: IMAGES.amurrio },
  ];

  return (
    <section className="section-padding bg-[var(--color-cream)]">
      <div className="container-wide">
        <div className="max-w-3xl mb-14">
          <h2 className="text-headline font-display text-[var(--color-charcoal)] mb-5">{content.title}</h2>
          <p className="text-[var(--color-steel)] text-lg leading-relaxed">{content.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {centers.map((center) => (
            <Link
              key={center.key}
              href={center.cta.href}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={center.image}
                  alt={center.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-[var(--color-forest)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  {center.city}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display font-bold text-[var(--color-charcoal)] text-xl mb-2">{center.name}</h3>
                <p className="text-[var(--color-steel)] text-sm leading-relaxed mb-5">{center.body}</p>
                <span className="text-[var(--color-forest)] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  {center.cta.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 bg-[var(--color-forest)] rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-white text-2xl mb-2">{content.help.title}</h3>
            <p className="text-white/75 max-w-lg">{content.help.body}</p>
          </div>
          <Link
            href={content.help.cta.href}
            className="btn-primary shrink-0 bg-white text-[var(--color-forest)] hover:bg-[var(--color-cream)]"
          >
            {content.help.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
