"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    const next = scrollRef.current?.parentElement?.nextElementSibling;
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={scrollRef}
      className="relative min-h-screen flex items-end lg:items-center overflow-hidden bg-[var(--color-charcoal)]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg"
          alt="Entrenamiento en Gorobel Kirol Gunea"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)]/95 via-[var(--color-charcoal)]/70 to-[var(--color-charcoal)]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 via-transparent to-transparent" />
      </div>

      {/* Green accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-moss)]" />

      {/* Content */}
      <div className="relative z-10 container-wide pb-24 pt-40 lg:py-0 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="block w-10 h-px bg-[var(--color-clay)]" />
            <span className="text-[var(--color-clay)] text-xs font-bold uppercase tracking-[0.2em]">
              Llodio · Amurrio · Desde 2010
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-display font-display text-white mb-6 animate-fade-up delay-100">
            Más que
            <br />
            <span
              className="relative inline-block"
              style={{ color: "var(--color-sage)" }}
            >
              un gimnasio.
              <span
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full opacity-60"
                style={{ background: "var(--color-clay)" }}
              />
            </span>
          </h1>

          <p className="text-white/75 text-lg lg:text-xl leading-relaxed max-w-xl mb-10 animate-fade-up delay-200">
            Una comunidad comprometida con tu bienestar físico y mental.
            CrossTraining, Boxeo, Kickboxing, Jiu&nbsp;Jitsu y&nbsp;OCR.
            Una hora al día cambia tu vida.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link href="/contacto" className="btn-primary text-base px-6 py-4">
              Empieza hoy
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/que-hacemos" className="btn-secondary text-base px-6 py-4">
              Ver actividades
            </Link>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/15 animate-fade-up delay-400">
            {[
              { value: "+15", label: "años de experiencia" },
              { value: "4", label: "centros en 2026" },
              { value: "5", label: "disciplinas" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="block text-3xl font-display font-black text-white">
                  {stat.value}
                </span>
                <span className="text-white/50 text-sm uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group"
        aria-label="Scroll hacia abajo"
      >
        <span className="text-xs uppercase tracking-widest">Descubre</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
