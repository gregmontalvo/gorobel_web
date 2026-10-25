import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import { CLUB } from "@/lib/content/common";
import type { CenterItem } from "@/lib/content/centers";

interface CenterSectionProps {
  center: CenterItem;
  index: number;
  labels: {
    address: string;
    viewActivities: string;
    howToGet: string;
    talk: string;
    imageAltPrefix: string;
    schedulesHint: string;
  };
}

export default function CenterSection({ center, index, labels }: CenterSectionProps) {
  const flipped = index % 2 !== 0;
  return (
    <section
      id={center.id}
      className={`section-padding scroll-mt-20 ${flipped ? "bg-[var(--color-cream)]" : "bg-[var(--color-surface)]"}`}
    >
      <div className="container-wide">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src={center.image}
              alt={`${labels.imageAltPrefix} ${center.name}`}
              fill
              className="object-cover img-zoom"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 bg-[var(--color-forest)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <MapPin className="w-3 h-3" aria-hidden="true" />
              {center.place}
            </div>
          </div>

          <div>
            <h2 className="text-title font-display text-[var(--color-charcoal)] mb-4">{center.name}</h2>
            <p className="text-[var(--color-steel)] text-lg leading-relaxed mb-3">{center.description}</p>
            <p className="text-[var(--color-steel)] text-sm mb-6">{labels.schedulesHint}</p>

            <div className="space-y-2.5 mb-8">
              <p className="flex items-start gap-3 text-[var(--color-steel)] text-sm">
                <MapPin className="w-4 h-4 text-[var(--color-sage)] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <span className="sr-only">{labels.address}: </span>
                  {center.address}
                </span>
              </p>
              <a
                href={CLUB.phoneHref}
                className="flex items-center gap-3 text-[var(--color-steel)] hover:text-[var(--color-forest)] text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--color-sage)]" aria-hidden="true" />
                {CLUB.phone}
              </a>
              <a
                href={`mailto:${CLUB.email}`}
                className="flex items-center gap-3 text-[var(--color-steel)] hover:text-[var(--color-forest)] text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--color-sage)]" aria-hidden="true" />
                {CLUB.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/que-hacemos" className="btn-outline-dark">
                {labels.viewActivities}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={center.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !border-[var(--color-mist)] !text-[var(--color-steel)] hover:!border-[var(--color-steel)] hover:!bg-[var(--color-mist)]/20"
              >
                <MapPin className="w-4 h-4" />
                {labels.howToGet}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
