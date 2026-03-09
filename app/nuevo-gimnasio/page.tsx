import type { Metadata } from "next";
import Image from "next/image";
import { Zap, Star, Shield, TrendingUp } from "lucide-react";
import FoundingMemberForm from "@/components/shared/FoundingMemberForm";
import CountdownClient from "@/components/shared/CountdownClient";
import FaqSection, { type FaqItem } from "@/components/shared/FaqSection";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nuevo Gimnasio Musculación Llodio 2026 — Founding Members",
  description:
    "Sé el primero en entrenar en el nuevo gimnasio de musculación de Gorobel en Llodio. 500 m², más de 300.000€ en equipamiento. Reserva tu plaza como Founding Member con precio especial.",
  keywords: [
    "sala musculación llodio",
    "nuevo gimnasio llodio 2026",
    "founding member gimnasio llodio",
    "musculación encartaciones",
    "gorobel musculación",
    "mejor sala musculación llodio",
    "gimnasio musculación álava",
    "peso libre llodio",
    "apertura gimnasio llodio 2026",
    "musculación país vasco llodio",
    "gym musculación encartaciones",
    "precio fundador gimnasio llodio",
  ],
  alternates: {
    canonical: "https://gorobelgara.com/nuevo-gimnasio",
  },
};

const perks = [
  {
    icon: Star,
    title: "Precio Founding Member",
    body: "Cuota mensual especial reservada exclusivamente para los primeros en inscribirse. Precio fijo para siempre.",
  },
  {
    icon: Shield,
    title: "Acceso prioritario",
    body: "Elige tu horario antes de que la sala abra al público. Los primeros en reservar tendrán las mejores franjas.",
  },
  {
    icon: TrendingUp,
    title: "500 m² de primer nivel",
    body: "Más de 300.000€ en equipamiento. Zona de peso libre, cardio, funcional y vestuarios de primera categoría.",
  },
  {
    icon: Zap,
    title: "Comunidad desde el día 1",
    body: "Forma parte del grupo fundador de Gorobel Musculación. Los que estuvieron desde el principio.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "¿Cuándo abre el nuevo gimnasio de musculación de Gorobel en Llodio?",
    a: "La apertura está prevista para finales de 2026. Reserva tu plaza ahora como Founding Member para asegurar el mejor precio y acceso prioritario antes de la apertura oficial.",
  },
  {
    q: "¿Qué es un Founding Member en Gorobel?",
    a: "Un Founding Member es uno de los primeros socios del nuevo gimnasio de musculación. Obtienes un precio mensual especial y fijo (nunca subirá), acceso prioritario para elegir horario y formas parte del grupo fundador desde el día 1.",
  },
  {
    q: "¿Cuánto costará la cuota mensual del nuevo gimnasio?",
    a: "El precio especial de Founding Member se comunica personalmente a quienes reserven plaza. Rellena el formulario o contáctanos al 667 521 542 y te informamos sin compromiso.",
  },
  {
    q: "¿Dónde estará ubicado el nuevo gimnasio de musculación en Llodio?",
    a: "El nuevo centro estará en Llodio, Álava. La dirección exacta se confirmará próximamente. Tendrá 500 m² de instalaciones con más de 300.000€ en equipamiento de primera categoría.",
  },
  {
    q: "¿El nuevo gimnasio es solo musculación o también habrá clases?",
    a: "El nuevo centro se enfoca en musculación y entrenamiento de fuerza: zona de peso libre, más de 20 máquinas premium, cardio de última generación y zona funcional. Para clases grupales de CrossTraining, Boxeo o Kickboxing, seguimos con nuestros centros actuales.",
  },
];

export default function NuevoGimnasioPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Inicio", url: "https://gorobelgara.com" },
      { name: "Nuevo Gimnasio Llodio 2026", url: "https://gorobelgara.com/nuevo-gimnasio" },
    ]),
    faqSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Apertura Gorobel Musculación — Nuevo Gimnasio Llodio",
      description:
        "Apertura del mayor centro de musculación de las Encartaciones. 500 m² y más de 300.000€ en equipamiento en Llodio, Álava.",
      startDate: "2026-12-01",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Gorobel Musculación",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Llodio",
          addressRegion: "Álava",
          addressCountry: "ES",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Gorobel Kirol Gunea",
        url: "https://gorobelgara.com",
      },
      offers: {
        "@type": "Offer",
        name: "Plaza Founding Member",
        description: "Precio especial y acceso prioritario para los primeros socios",
        availability: "https://schema.org/LimitedAvailability",
        url: "https://gorobelgara.com/nuevo-gimnasio",
      },
    },
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-charcoal)]">
        <div className="absolute inset-0">
          <Image
            src="https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg"
            alt="Nuevo gimnasio musculación Gorobel Llodio"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)]/97 via-[var(--color-charcoal)]/80 to-[var(--color-charcoal)]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/60 via-transparent to-transparent" />
          {/* Clay glow */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at 30% 60%, var(--color-clay) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 container-wide w-full pt-36 pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[var(--color-clay)]/20 border border-[var(--color-clay)]/40 text-[var(--color-clay)] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2.5 rounded-full mb-8">
              <Zap className="w-3.5 h-3.5" fill="currentColor" />
              Próxima apertura — Llodio 2026
            </div>

            <h1 className="text-display font-display text-white mb-6">
              El gimnasio
              <span className="block text-[var(--color-clay)]">que faltaba.</span>
            </h1>

            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl">
              500 m² y más de 300.000€ en equipamiento. Llodio va a tener la
              mejor sala de musculación de la zona. Y tú puedes ser el primero.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#reserva"
                className="btn-primary bg-[var(--color-clay)] hover:bg-[var(--color-clay-light)] text-base px-8 py-4 justify-center"
              >
                Reservar plaza gratuita
              </a>
              <a href="#detalles" className="btn-secondary text-base px-8 py-4 justify-center">
                Ver detalles
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-8 border-t border-white/10">
              {[
                { v: "500", u: "m²" },
                { v: "+300K€", u: "en equipamiento" },
                { v: "1", u: "solo en Llodio" },
              ].map(({ v, u }) => (
                <div key={u}>
                  <span className="block text-4xl font-display font-black text-white">{v}</span>
                  <span className="text-white/40 text-sm">{u}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="bg-[var(--color-iron)] py-10">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white/60 text-sm uppercase tracking-widest font-bold">
              Apertura prevista
            </p>
            <CountdownClient />
            <p className="text-white/40 text-sm text-center sm:text-right">
              Finales de 2026 · Llodio, Álava
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section id="detalles" className="section-padding bg-[var(--color-surface)]">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label justify-center">Por qué ser Founding Member</p>
            <h2 className="text-headline font-display text-[var(--color-charcoal)]">
              Ventajas exclusivas.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow border border-[var(--color-mist)]/30"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-clay)]/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[var(--color-clay)]" />
                </div>
                <h3 className="font-display font-bold text-[var(--color-charcoal)] mb-2">
                  {title}
                </h3>
                <p className="text-[var(--color-steel)] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="section-padding bg-[var(--color-charcoal)]">
        <div className="container-wide grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label !text-[var(--color-sage)]">Las instalaciones</p>
            <h2 className="text-headline font-display text-white mb-6">
              500 m² diseñados para tu progreso.
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Zona de peso libre completa",
                "Más de 20 máquinas premium",
                "Cardio de última generación",
                "Sala de entrenamiento funcional",
                "Vestuarios de primera categoría",
                "Zona de recuperación activa",
                "Wifi de alta velocidad",
                "Parking gratuito",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-clay)] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
            <Image
              src="https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg"
              alt="Instalaciones Gorobel Musculación"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/50 to-transparent" />
            <div className="absolute bottom-5 left-5 bg-[var(--color-clay)] text-white text-sm font-bold px-4 py-2 rounded-lg">
              Renders / Fotos próximamente
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        heading="Preguntas sobre el nuevo gimnasio"
        faqs={faqs}
        bg="bg-[var(--color-surface)]"
      />

      {/* Form */}
      <section id="reserva" className="section-padding bg-[var(--color-cream)]">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="section-label justify-center">Acceso exclusivo</p>
            <h2 className="text-headline font-display text-[var(--color-charcoal)]">
              Reserva tu plaza.
            </h2>
            <p className="text-[var(--color-steel)] text-lg mt-4">
              Sin coste, sin compromiso. Solo nos interesa saber que quieres ser parte de esto.
            </p>
          </div>
          <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <FoundingMemberForm />
          </div>
        </div>
      </section>
    </>
  );
}
