"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { HomeContent } from "@/lib/content/home";

const HERO_IMAGE =
  "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg";

export default function HeroSection({ content }: { content: HomeContent["hero"] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ticker = [...content.ticker, ...content.ticker, ...content.ticker];

  const scrollToContent = () => {
    scrollRef.current?.parentElement?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={scrollRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--color-charcoal)]"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt={content.imageAlt}
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)]/95 via-[var(--color-charcoal)]/70 to-[var(--color-charcoal)]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 via-transparent to-transparent" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-moss)]" />

      <div className="relative z-10 container-wide flex-1 flex items-end lg:items-center pb-24 pt-36 lg:pt-32 lg:pb-28 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display font-black leading-[1.05] tracking-tight text-[clamp(2.25rem,5.2vw,4.5rem)] text-white mb-6 animate-fade-up delay-100">
            {content.titleLine1}
            <br />
            <span style={{ color: "var(--color-sage)" }}>{content.titleLine2}</span>
          </h1>

          <p className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-xl mb-4 animate-fade-up delay-200">
            {content.intro}
          </p>
          <p className="text-white/65 leading-relaxed max-w-xl mb-10 animate-fade-up delay-200">
            {content.body}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link href={content.primary.href} className="btn-primary text-base px-6 py-4">
              {content.primary.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={content.secondary.href} className="btn-secondary text-base px-6 py-4">
              {content.secondary.label}
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-[72px] left-1/2 -translate-x-1/2 z-10 hidden 2xl:flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label={content.scroll}
      >
        <span className="text-xs uppercase tracking-widest">{content.scroll}</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>

      <div
        className="relative z-10 w-full bg-[var(--color-forest)]/90 backdrop-blur-sm border-t border-white/10 overflow-hidden py-3 shrink-0"
        aria-hidden
      >
        <div className="flex gap-0 whitespace-nowrap" style={{ animation: "ticker 40s linear infinite" }}>
          {ticker.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-6 text-white/80 text-xs font-bold uppercase tracking-[0.2em]"
            >
              {item}
              <span className="text-[var(--color-clay)] opacity-60 text-lg leading-none">·</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes ticker {
            from { transform: translateX(0); }
            to   { transform: translateX(-33.333%); }
          }
        `}</style>
      </div>
    </section>
  );
}
