import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { ActivityItem } from "@/lib/content/activities";


interface ActivitySectionProps {
  activity: ActivityItem;
  index: number;
  imageAlt: string;
  labels: { forWho: string; session: string };
}

export default function ActivitySection({ activity, index, imageAlt, labels }: ActivitySectionProps) {
  const flipped = index % 2 !== 0;
  return (
    <section
      id={activity.id}
      className={`section-padding scroll-mt-20 ${flipped ? "bg-[var(--color-cream)]" : "bg-[var(--color-surface)]"}`}
    >
      <div className="container-wide">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
            <Image
              src={activity.image}
              alt={imageAlt}
              fill
              className="object-cover img-zoom"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-title font-display text-[var(--color-charcoal)] mb-4">{activity.name}</h2>
            <p className="text-[var(--color-steel)] text-lg leading-relaxed mb-8">{activity.summary}</p>

            <dl className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[var(--color-moss)] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-[var(--color-stone)] mb-1">
                    {labels.forWho}
                  </dt>
                  <dd className="text-[var(--color-steel)] text-sm leading-relaxed">{activity.forWho}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[var(--color-moss)] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-[var(--color-stone)] mb-1">
                    {labels.session}
                  </dt>
                  <dd className="text-[var(--color-steel)] text-sm leading-relaxed">{activity.session}</dd>
                </div>
              </div>
            </dl>

            {activity.tags && activity.tags.length > 0 && (
              <div className="mb-8">
                {activity.tagsLabel && (
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-stone)] mb-3">
                    {activity.tagsLabel}
                  </p>
                )}
                <ul className="flex flex-wrap gap-2">
                  {activity.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-[var(--color-forest)]/10 text-[var(--color-forest)] text-xs font-bold px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link href="/contacto" className="btn-outline-dark">
              {activity.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
