import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const previewCenters = [
  {
    id: "llodio",
    city: "Llodio",
    name: "Centro Principal",
    surface: "500 + 200 m²",
    description: "Nuestra sede. CrossTraining de alto rendimiento y artes marciales en el corazón de Llodio.",
    image: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
    href: "/centros#llodio",
  },
  {
    id: "amurrio",
    city: "Amurrio",
    name: "Gorobel Amurrio",
    surface: "300 m²",
    description: "La misma filosofía Gorobel en Amurrio. CrossTraining y Jiu Jitsu para la zona de Encartaciones.",
    image: "https://gorobelgara.com/wp-content/uploads/2025/06/1-Editada-e1749203233595.png",
    href: "/centros#amurrio",
  },
  {
    id: "garazi",
    city: "Llodio",
    name: "Garazi",
    surface: "300 m²",
    description: "Tercer espacio Gorobel en Llodio. Ampliamos nuestra oferta para llegar a más personas.",
    image: "https://gorobelgara.com/wp-content/uploads/2025/06/Entreno-49.jpg",
    href: "/centros#garazi",
  },
];

export default function CentersPreview() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label">Dónde estamos</p>
            <h2 className="text-headline font-display text-[var(--color-charcoal)]">
              Cerca de ti,
              <span className="text-[var(--color-moss)]"> siempre.</span>
            </h2>
          </div>
          <Link
            href="/centros"
            className="text-[var(--color-forest)] hover:text-[var(--color-moss)] text-sm font-bold uppercase tracking-widest flex items-center gap-2 transition-colors group"
          >
            Ver todos los centros
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {previewCenters.map((center) => (
            <Link
              key={center.id}
              href={center.href}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={center.image}
                  alt={`Centro Gorobel ${center.city}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* City badge */}
                <div className="absolute top-4 left-4 bg-[var(--color-forest)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  {center.city}
                </div>

                {/* Surface */}
                <div className="absolute bottom-4 right-4 bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20">
                  {center.surface}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display font-bold text-[var(--color-charcoal)] text-lg mb-2">
                  {center.name}
                </h3>
                <p className="text-[var(--color-steel)] text-sm leading-relaxed mb-4">
                  {center.description}
                </p>
                <span className="text-[var(--color-forest)] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Ver centro
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon card */}
        <div className="mt-5 bg-gradient-to-r from-[var(--color-forest-dark)] to-[var(--color-forest)] rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <span className="inline-block bg-[var(--color-clay)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg mb-4">
              Próxima apertura 2026
            </span>
            <h3 className="font-display font-bold text-white text-2xl lg:text-3xl mb-2">
              Nuevo: Sala de Musculación en Llodio
            </h3>
            <p className="text-white/70 max-w-lg">
              500 m² y más de 300.000€ en equipamiento. El mejor gimnasio de musculación de la zona.
              Reserva tu plaza como Founding Member y accede a condiciones exclusivas.
            </p>
          </div>
          <Link
            href="/nuevo-gimnasio"
            className="btn-primary shrink-0 bg-[var(--color-clay)] hover:bg-[var(--color-clay-light)]"
          >
            Founding Member
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
