import type { Metadata } from "next";
import Image from "next/image";
import { Zap, Star, Shield, TrendingUp, Check, ChevronRight } from "lucide-react";
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
  openGraph: {
    type: "website",
    url: "https://gorobelgara.com/nuevo-gimnasio",
    title: "El mayor gimnasio de las Encartaciones — Founding Members 2026",
    description: "500 m² · +300.000€ en equipamiento · Llodio, Álava. Reserva tu plaza de Founding Member.",
    siteName: "Gorobel Kirol Gunea",
    locale: "es_ES",
    images: [
      {
        url: "https://gorobelgara.com/wp-content/uploads/2024/03/photo_2024-02-28_23-33-44-1024x768.jpg",
        width: 1200,
        height: 630,
        alt: "Nuevo gimnasio musculación Gorobel Llodio 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El mayor gimnasio de las Encartaciones abre en 2026 — Gorobel",
    description: "500 m² · +300.000€ en equipamiento · Llodio, Álava.",
    images: ["https://gorobelgara.com/wp-content/uploads/2024/03/photo_2024-02-28_23-33-44-1024x768.jpg"],
  },
};

const perks = [
  {
    icon: Star,
    title: "Precio bloqueado para siempre",
    body: "Cuota mensual especial que nunca subirá. Los Founding Members pagan siempre menos que cualquier socio nuevo.",
  },
  {
    icon: Shield,
    title: "Elige tu horario primero",
    body: "Acceso prioritario para reservar franjas antes de la apertura al público. Los mejores horarios, para los primeros.",
  },
  {
    icon: TrendingUp,
    title: "500 m² de primer nivel",
    body: "Más de 300.000€ en equipamiento. Zona de peso libre, cardio premium, funcional y vestuarios de categoría.",
  },
  {
    icon: Zap,
    title: "Eres parte de la historia",
    body: "El primer grupo de Gorobel Musculación. Los que estuvieron cuando nadie más lo sabía.",
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
      startDate: "2026-11-01",
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

      {/* ─── HERO: dark, countdown-centered ─── */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0c1518 0%, #1C2428 50%, #1a1208 100%)" }}
      >
        {/* Glow accents */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 70%, rgba(181,113,74,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 90% 30%, rgba(42,87,65,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 container-wide pt-36 pb-16">
          {/* Top badge */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-[var(--color-clay)]/60" />
            <span
              className="text-[var(--color-clay)] text-xs font-bold uppercase tracking-[0.25em]"
            >
              Próxima apertura · Llodio · Álava · 2026
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display font-black text-white leading-[0.92] mb-8"
            style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}>
            El mayor
            <br />
            <span
              style={{
                WebkitTextStroke: "2px rgba(181,113,74,0.9)",
                color: "transparent",
              }}
            >
              gimnasio
            </span>
            <br />
            <span className="text-white">de la zona.</span>
          </h1>

          <p className="text-white/50 text-lg max-w-md mb-14 leading-relaxed">
            500 m² · Más de 300.000€ en equipamiento · Peso libre,
            cardio de última generación y zona funcional. Solo en Llodio.
          </p>

          {/* ─── COUNTDOWN ─── */}
          <div className="mb-14">
            <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-6 font-bold">
              Tiempo para la apertura
            </p>
            <CountdownClient />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#reserva"
              className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 bg-[var(--color-clay)] hover:bg-[var(--color-clay-light)] text-white"
            >
              <Zap className="w-4 h-4" fill="currentColor" />
              Reservar plaza — es gratis
            </a>
            <a
              href="#detalles"
              className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 rounded-xl border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all duration-200"
            >
              Ver detalles
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs tracking-widest uppercase">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/20" />
          scroll
        </div>
      </section>

      {/* ─── URGENCY BAR ─── */}
      <section
        style={{ background: "var(--color-clay)" }}
        className="py-5"
      >
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold text-sm uppercase tracking-widest">
            Plazas Founding Member — disponibilidad limitada
          </p>
          <div className="flex items-center gap-4">
            {/* Simulated progress bar */}
            <div className="w-40 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: "42%" }}
              />
            </div>
            <span className="text-white/80 text-sm font-medium whitespace-nowrap">42 plazas reservadas</span>
          </div>
        </div>
      </section>

      {/* ─── PHOTO + FEATURES ─── */}
      <section id="detalles" className="section-padding bg-[var(--color-charcoal)]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl order-2 lg:order-1">
              <Image
                src="https://gorobelgara.com/wp-content/uploads/2024/03/photo_2024-02-28_23-33-44-1024x768.jpg"
                alt="Entrenamiento Gorobel Kirol Gunea — futuro gimnasio musculación Llodio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/70 to-transparent" />
              {/* Floating tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 backdrop-blur-sm"
                  style={{ background: "rgba(181,113,74,0.85)" }}
                >
                  <Star className="w-4 h-4 text-white" fill="white" />
                  <span className="text-white text-sm font-bold">Founding Member · Precio exclusivo</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="section-label !text-[var(--color-sage)]">Las instalaciones</p>
              <h2 className="text-headline font-display text-white mb-4">
                500 m² diseñados para superar límites.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Más de 300.000€ invertidos en equipamiento de primera línea. No hay nada
                igual en las Encartaciones.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Zona de peso libre completa",
                  "Más de 20 máquinas premium",
                  "Cardio de última generación",
                  "Zona de entrenamiento funcional",
                  "Vestuarios de primera categoría",
                  "Zona de recuperación activa",
                  "Wifi de alta velocidad",
                  "Parking gratuito",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-clay)]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[var(--color-clay)]" />
                    </div>
                    <span className="text-white/65 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PERKS ─── */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label justify-center">Por qué reservar ahora</p>
            <h2 className="text-headline font-display text-[var(--color-charcoal)]">
              Lo que solo tienen los Founding Members.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="relative rounded-2xl p-7 border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: i === 0 ? "var(--color-charcoal)" : "white",
                  borderColor: i === 0 ? "transparent" : "rgba(176,190,197,0.3)",
                }}
              >
                {i === 0 && (
                  <span className="absolute top-4 right-4 text-[0.6rem] font-bold uppercase tracking-widest text-[var(--color-clay)] bg-[var(--color-clay)]/15 px-2 py-1 rounded-full">
                    Más popular
                  </span>
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: i === 0 ? "rgba(181,113,74,0.2)" : "rgba(181,113,74,0.1)",
                  }}
                >
                  <Icon className="w-6 h-6 text-[var(--color-clay)]" />
                </div>
                <h3
                  className="font-display font-bold mb-2"
                  style={{ color: i === 0 ? "white" : "var(--color-charcoal)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: i === 0 ? "rgba(255,255,255,0.5)" : "var(--color-steel)" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE / TRUST ─── */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--color-forest-dark) 0%, var(--color-forest) 100%)",
        }}
      >
        <div className="container-narrow text-center">
          <div className="text-6xl mb-6" style={{ color: "rgba(255,255,255,0.15)" }}>
            &ldquo;
          </div>
          <p className="font-display font-black text-white text-2xl lg:text-3xl leading-snug mb-8">
            Llevamos desde 2010 construyendo la comunidad deportiva más fuerte
            de las Encartaciones. Este nuevo gimnasio es el siguiente paso.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-display font-black text-white text-sm">
              G
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Gorobel Kirol Gunea</p>
              <p className="text-white/50 text-xs">Pioneros del CrossFit en España desde 2010</p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        heading="Preguntas sobre el nuevo gimnasio"
        faqs={faqs}
        bg="bg-[var(--color-cream)]"
      />

      {/* ─── FORM ─── */}
      <section id="reserva" className="section-padding"
        style={{ background: "linear-gradient(180deg, #0c1518 0%, #1C2428 100%)" }}
      >
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: message */}
            <div className="lg:pt-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-6 bg-[var(--color-clay)]/60" />
                <span className="text-[var(--color-clay)] text-xs font-bold uppercase tracking-[0.2em]">
                  Plazas limitadas
                </span>
              </div>
              <h2 className="font-display font-black text-white text-4xl lg:text-5xl leading-tight mb-6">
                Reserva tu plaza.
                <br />
                <span style={{ color: "var(--color-clay)" }}>Sin coste.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Sin permanencia, sin pago inicial. Solo queremos saber que
                quieres ser parte de esto desde el primer día.
              </p>
              <ul className="space-y-4">
                {[
                  "Precio mensual especial — bloqueado para siempre",
                  "Acceso prioritario para elegir tu horario",
                  "Forma parte del grupo Founding Member",
                  "Sin compromisos hasta la apertura",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--color-clay)] shrink-0 mt-0.5" />
                    <span className="text-white/65 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div
              className="rounded-3xl p-8 lg:p-10"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <FoundingMemberForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
