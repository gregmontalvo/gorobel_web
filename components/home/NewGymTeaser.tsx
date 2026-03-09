"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

const TARGET = new Date("2026-11-01T10:00:00");

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="countdown-digit">{String(value).padStart(2, "0")}</span>
      <span className="text-white/50 text-xs uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}

export default function NewGymTeaser() {
  const t = useCountdown(TARGET);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg"
          alt="Nuevo gimnasio de musculación Gorobel Llodio"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/88" />
        {/* Clay accent */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at 70% 50%, var(--color-clay) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-4 h-4 text-[var(--color-clay)]" fill="currentColor" />
                <span className="text-[var(--color-clay)] text-xs font-bold uppercase tracking-[0.2em]">
                  Próximamente en Llodio
                </span>
              </div>
              <h2 className="text-headline font-display text-white mb-5">
                La sala de musculación
                <span className="block text-[var(--color-clay)]">que Llodio merece.</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                500 m² y más de 300.000€ invertidos en el mejor equipamiento del mercado.
                Sé de los primeros — los <strong className="text-white">Founding Members</strong> acceden
                a condiciones exclusivas que nunca repetiremos.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Zona de peso libre premium",
                  "Cardio y máquinas de última generación",
                  "Sala de entrenamiento funcional",
                  "Vestuarios de primera categoría",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-clay)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link href="/nuevo-gimnasio" className="btn-primary bg-[var(--color-clay)] hover:bg-[var(--color-clay-light)]">
                  Quiero ser Founding Member
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/nuevo-gimnasio" className="btn-secondary">
                  Más información
                </Link>
              </div>
            </div>

            {/* Right — countdown */}
            <div className="flex flex-col items-center lg:items-end gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 w-full max-w-sm">
                <p className="text-white/50 text-sm text-center uppercase tracking-widest mb-8">
                  Apertura prevista
                </p>
                <div className="grid grid-cols-4 gap-4">
                  <CountUnit value={t.days} label="días" />
                  <div className="countdown-digit text-white/30 self-start pt-2 text-center">:</div>
                  <CountUnit value={t.hours} label="horas" />
                  {/* separator hack - rearranged below */}
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <CountUnit value={t.minutes} label="min" />
                  <div className="countdown-digit text-white/30 self-start pt-2 text-center">:</div>
                  <CountUnit value={t.seconds} label="seg" />
                  <div /> {/* spacer */}
                </div>
                <p className="text-white/30 text-xs text-center mt-8">
                  Finales de 2026 · Llodio, Álava
                </p>
              </div>

              <div className="text-center lg:text-right">
                <span className="text-[var(--color-sand)] text-4xl font-display font-black">
                  500 m²
                </span>
                <p className="text-white/40 text-sm mt-1">de instalaciones de primer nivel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
