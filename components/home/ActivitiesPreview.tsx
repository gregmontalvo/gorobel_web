import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { activities } from "@/lib/data/activities";

export default function ActivitiesPreview() {
  const featured = activities.slice(0, 4);

  return (
    <section className="section-padding bg-[var(--color-charcoal)]">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label !text-[var(--color-sage)]">Disciplinas</p>
            <h2 className="text-headline font-display text-white">
              Elige tu camino.
            </h2>
          </div>
          <Link
            href="/que-hacemos"
            className="text-[var(--color-sage)] hover:text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2 transition-colors group"
          >
            Ver todas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((activity, i) => (
            <Link
              key={activity.id}
              href={`/que-hacemos#${activity.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] block"
            >
              {/* Image */}
              <Image
                src={activity.image}
                alt={activity.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Number */}
              <span className="absolute top-5 left-5 text-white/20 font-display font-black text-5xl leading-none select-none">
                0{i + 1}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-black text-white text-xl mb-1">
                  {activity.name}
                </h3>
                <p className="text-white/60 text-sm leading-snug">
                  {activity.tagline}
                </p>
                <div className="flex items-center gap-1.5 mt-4 text-[var(--color-sage)] text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver más
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* OCR extra */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/que-hacemos#ocr"
            className="group relative overflow-hidden rounded-2xl aspect-video block"
          >
            <Image
              src={activities[4].image}
              alt={activities[4].imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-display font-black text-white text-2xl mb-1">OCR</h3>
              <p className="text-white/60">{activities[4].tagline}</p>
            </div>
          </Link>

          <div className="bg-[var(--color-forest)] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-[var(--color-sage-light)] text-sm font-bold uppercase tracking-widest mb-3">
                ¿No sabes por dónde empezar?
              </p>
              <h3 className="font-display font-bold text-white text-2xl leading-tight mb-4">
                Prueba gratis una semana sin compromiso.
              </h3>
            </div>
            <Link href="/contacto" className="btn-primary self-start bg-white text-[var(--color-forest)] hover:bg-[var(--color-cream)]">
              Quiero probar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
