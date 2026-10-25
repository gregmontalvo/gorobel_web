"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { HomeContent } from "@/lib/content/home";
import { ACTIVITY_PHOTOS, PHOTOS } from "@/lib/photos";

export default function ActivitiesPreview({ content }: { content: HomeContent["activities"] }) {
  const [active, setActive] = useState(0);
  const current = content.items[active];

  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="container-wide">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-headline font-display text-[var(--color-charcoal)] mb-5">{content.title}</h2>
          <p className="text-[var(--color-steel)] text-lg leading-relaxed">{content.intro}</p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">
          <ul className="divide-y divide-[var(--color-mist)]/40 border-y border-[var(--color-mist)]/40">
            {content.items.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-center gap-4 py-4 lg:py-5"
                >
                  <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-lg lg:hidden">
                    <Image
                      src={PHOTOS[ACTIVITY_PHOTOS[i]]}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span
                    className={`flex-1 font-display font-extrabold leading-tight text-lg lg:text-[clamp(1.25rem,2vw,1.75rem)] transition-colors ${
                      i === active ? "text-[var(--color-forest)]" : "text-[var(--color-charcoal)] lg:text-[var(--color-stone)]"
                    } group-hover:text-[var(--color-forest)]`}
                  >
                    {item.title}
                  </span>
                  <ArrowRight
                    className={`w-5 h-5 shrink-0 text-[var(--color-forest)] transition-all ${
                      i === active ? "opacity-100 translate-x-0" : "opacity-40 lg:opacity-0 lg:-translate-x-2"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-charcoal)]">
              {content.items.map((item, i) => (
                <Image
                  key={item.href}
                  src={PHOTOS[ACTIVITY_PHOTOS[i]]}
                  alt=""
                  fill
                  sizes="40vw"
                  className={`object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-7 text-white/90 text-base leading-relaxed">
                {current.body}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
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
