import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { centers } from "@/lib/data/centers";
import CTASection from "@/components/home/CTASection";
import FaqSection, { type FaqItem } from "@/components/shared/FaqSection";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nuestros Centros — Llodio y Amurrio",
  description:
    "Gorobel Kirol Gunea tiene 3 centros activos en Llodio y Amurrio. Más de 1.300 m² de instalaciones deportivas de primer nivel. Encuentra tu centro más cercano.",
  keywords: [
    "gimnasio llodio",
    "gimnasio amurrio",
    "instalaciones crossfit llodio",
    "centro deportivo llodio",
    "polígono industrialdea llodio",
    "sala artes marciales llodio",
    "gimnasio cerca de mí llodio",
    "crossfit amurrio instalaciones",
    "centro jiu jitsu llodio",
    "dónde entrenar euskadi",
  ],
  alternates: {
    canonical: "https://gorobelgara.com/centros",
  },
  openGraph: {
    type: "website",
    url: "https://gorobelgara.com/centros",
    title: "Nuestros Centros en Llodio y Amurrio — Más de 1.300 m² | Gorobel",
    description:
      "3 centros activos en Llodio y Amurrio con más de 1.300 m² de instalaciones deportivas de primer nivel. 4º centro de musculación en 2026.",
    siteName: "Gorobel Kirol Gunea",
    locale: "es_ES",
    images: [
      {
        url: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
        width: 1200,
        height: 630,
        alt: "Instalaciones Gorobel Kirol Gunea en Llodio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestros Centros en Llodio y Amurrio | Gorobel Kirol Gunea",
    description: "Más de 1.300 m² de instalaciones en Llodio y Amurrio. 4 centros en 2026.",
    images: ["https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "¿Cuántos centros tiene Gorobel actualmente?",
    a: "Actualmente Gorobel tiene 3 centros activos: la sede principal de CrossTraining en el Polígono Industrialdea de Llodio (500 m²), la Sala Contacto especializada en artes marciales en Llodio (200 m²), y el centro de Amurrio (300 m²). En 2026 abriremos nuestro 4º centro: una sala de musculación de 500 m² en Llodio.",
  },
  {
    q: "¿Hay parking gratuito en los centros Gorobel?",
    a: "Sí. Todos nuestros centros disponen de parking gratuito para los socios. La sede principal en el Polígono Industrialdea de Llodio cuenta con amplio espacio de aparcamiento sin coste.",
  },
  {
    q: "¿Cuáles son los horarios de Gorobel en Llodio y Amurrio?",
    a: "Los horarios varían según la temporada y el centro. Contacta con nosotros en el 667 521 542 o escríbenos para obtener el horario actualizado de clases. También puedes usar el formulario de contacto y te respondemos en menos de 24 horas.",
  },
  {
    q: "¿Puedo entrenar en todos los centros Gorobel con la misma cuota?",
    a: "Consulta con nosotros las opciones de acceso multi-centro. Llámanos al 667 521 542 y te explicamos las modalidades disponibles. Tenemos opciones adaptadas a distintas necesidades.",
  },
  {
    q: "¿Qué actividades hay disponibles en el centro de Amurrio?",
    a: "En el centro de Gorobel Amurrio ofrecemos CrossTraining y Jiu Jitsu. Contamos con 300 m² de instalaciones con el mismo nivel de coaching y programación que en Llodio.",
  },
];

export default function CentrosPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Inicio", url: "https://gorobelgara.com" },
      { name: "Nuestros Centros", url: "https://gorobelgara.com/centros" },
    ]),
    ...centers.map((c) =>
      localBusinessSchema({
        id: c.id,
        name: c.name,
        description: c.description,
        streetAddress: c.address,
        city: c.city,
        phone: c.phone,
        email: c.email,
        mapsUrl: c.mapsUrl,
        image: c.image,
        activities: c.activities,
      })
    ),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-forest-dark)] to-[var(--color-charcoal)] opacity-80" />
        <div className="relative z-10 container-wide">
          <p className="section-label !text-[var(--color-sage)]">Dónde estamos</p>
          <h1 className="text-headline font-display text-white max-w-2xl">
            Cerca de ti, en Llodio y Amurrio.
          </h1>
          <p className="text-white/65 text-lg mt-4 max-w-xl">
            Más de 1.300 m² de instalaciones deportivas en Euskadi.
            4 centros en 2026.
          </p>
          {/* Map quick links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {centers.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {c.name.replace("Gorobel ", "")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Centers */}
      {centers.map((center, i) => (
        <section
          key={center.id}
          id={center.id}
          className={`section-padding ${i % 2 === 0 ? "bg-[var(--color-surface)]" : "bg-[var(--color-cream)]"}`}
        >
          <div className="container-wide">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              {/* Image */}
              <div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl mb-6">
                  <Image
                    src={center.image}
                    alt={center.imageAlt}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--color-forest)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {center.city}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[var(--color-charcoal)]/80 backdrop-blur text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                    {center.surface}
                  </div>
                </div>

                {/* Google Maps embed placeholder */}
                <div className="rounded-xl overflow-hidden h-44 bg-[var(--color-mist)]/20 flex items-center justify-center border border-[var(--color-mist)]/30">
                  <a
                    href={center.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--color-forest)] font-medium hover:underline"
                  >
                    <MapPin className="w-5 h-5" />
                    Ver en Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="section-label">{center.city}</p>
                <h2 className="text-title font-display text-[var(--color-charcoal)] mb-4">
                  {center.name}
                </h2>
                <p className="text-[var(--color-steel)] text-lg leading-relaxed mb-6">
                  {center.description}
                </p>

                {/* Activities */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-stone)] mb-3">
                    Actividades
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {center.activities.map((act) => (
                      <span
                        key={act}
                        className="bg-[var(--color-forest)]/10 text-[var(--color-forest)] text-xs font-bold px-3 py-1.5 rounded-lg"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-2.5 mb-8">
                  <a
                    href={`tel:${center.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-[var(--color-steel)] hover:text-[var(--color-forest)] text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[var(--color-sage)]" />
                    {center.phone}
                  </a>
                  <a
                    href={`mailto:${center.email}`}
                    className="flex items-center gap-3 text-[var(--color-steel)] hover:text-[var(--color-forest)] text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[var(--color-sage)]" />
                    {center.email}
                  </a>
                  <p className="flex items-start gap-3 text-[var(--color-steel)] text-sm">
                    <MapPin className="w-4 h-4 text-[var(--color-sage)] shrink-0 mt-0.5" />
                    {center.address}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link href="/contacto" className="btn-outline-dark">
                    Infórmate
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={center.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !border-[var(--color-mist)] !text-[var(--color-steel)] hover:!border-[var(--color-steel)] hover:!bg-[var(--color-mist)]/20"
                  >
                    <MapPin className="w-4 h-4" />
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* New center teaser */}
      <section className="section-padding bg-[var(--color-forest)]">
        <div className="container-wide text-center">
          <p className="section-label justify-center !text-[var(--color-sage-light)]">
            Próximamente
          </p>
          <h2 className="text-headline font-display text-white mb-4">
            4º centro en Llodio — 2026
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto mb-8">
            500 m² de sala de musculación con más de 300.000€ en equipamiento.
            El centro que Euskadi necesita.
          </p>
          <Link href="/nuevo-gimnasio" className="btn-primary bg-[var(--color-clay)] hover:bg-[var(--color-clay-light)] !text-[var(--color-charcoal)]">
            Founding Members →
          </Link>
        </div>
      </section>

      <FaqSection
        heading="Preguntas sobre nuestros centros"
        faqs={faqs}
        bg="bg-[var(--color-surface)]"
      />

      <CTASection />
    </>
  );
}
