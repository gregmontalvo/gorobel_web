import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Trophy, Users2, ArrowRight } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Pioneros del CrossFit y Hyrox en el País Vasco",
  description:
    "Gorobel Kirol Gunea nació en 2010 como uno de los primeros centros de CrossFit del País Vasco. En 2019 fuimos pioneros en introducir el Hyrox en Euskadi. Conoce nuestra historia en Llodio y Amurrio.",
  keywords: [
    "historia gorobel llodio",
    "primer crossfit país vasco",
    "gorobel kirol gunea historia",
    "pioneros hyrox euskadi",
    "gym familiar llodio",
    "comunidad crossfit euskadi",
    "gorobel fundación 2010",
    "valores gimnasio llodio",
  ],
  alternates: {
    canonical: "https://gorobelgara.com/sobre-nosotros",
  },
  openGraph: {
    type: "website",
    url: "https://gorobelgara.com/sobre-nosotros",
    title: "Sobre Nosotros — Pioneros del CrossFit en el País Vasco | Gorobel",
    description:
      "Gorobel Kirol Gunea nació en 2010 como uno de los primeros centros de CrossFit del País Vasco. Conoce nuestra historia, valores y equipo.",
    siteName: "Gorobel Kirol Gunea",
    locale: "es_ES",
    images: [
      {
        url: "https://gorobelgara.com/wp-content/uploads/2025/06/Podcast-y-entreno-73.jpg",
        width: 1200,
        height: 630,
        alt: "Comunidad Gorobel Kirol Gunea — CrossFit Llodio desde 2010",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros — Pioneros del CrossFit en el País Vasco",
    description: "Desde 2010 en Llodio, pioneros del CrossFit y el Hyrox en Euskadi.",
    images: ["https://gorobelgara.com/wp-content/uploads/2025/06/Podcast-y-entreno-73.jpg"],
  },
};

const milestones = [
  { year: "2010", event: "Fundación de Gorobel en Llodio — Pioneros del CrossFit en el País Vasco y Euskadi" },
  { year: "2014", event: "Apertura del centro de artes marciales en Llodio" },
  { year: "2018", event: "Expansión a Amurrio — CrossTraining y Jiu Jitsu" },
  { year: "2019", event: "Introducción del Hyrox en el País Vasco — primeros en Euskadi en ofrecer entrenamientos específicos para esta disciplina" },
  { year: "2022", event: "Apertura de Garazi — 3er espacio en Llodio" },
  {
    year: "2025",
    event: (
      <>
        Integración con{" "}
        <Link
          href="https://www.badgie.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-sage)] hover:text-[var(--color-sage-light)] underline underline-offset-2 transition-colors"
        >
          Badgie
        </Link>
        , nuestra plataforma digital para la gestión del club.
      </>
    ),
  },
  { year: "2026", event: "Nuevo gimnasio de musculación en Llodio — 500 m²" },
];

const values = [
  {
    icon: Heart,
    title: "Salud integral",
    body: "El ejercicio como herramienta de bienestar físico y mental. No solo cuerpo — también mente y espíritu.",
  },
  {
    icon: Users2,
    title: "Comunidad",
    body: "Solidaridad, compañerismo y voluntariado. Construimos vínculos que van más allá del gym.",
  },
  {
    icon: Trophy,
    title: "Progresión constante",
    body: "No comparamos. Cada persona tiene su ritmo. El progreso es tuyo y celebramos cada logro.",
  },
];

export default function SobreNosotrosPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Inicio", url: "https://gorobelgara.com" },
      { name: "Sobre Nosotros", url: "https://gorobelgara.com/sobre-nosotros" },
    ]),
    {
      ...organizationSchema,
      "@context": "https://schema.org",
      foundingDate: "2010",
      founders: [{ "@type": "Person", name: "Joseba" }],
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 20 },
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
      <section className="relative pt-36 pb-24 bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://gorobelgara.com/wp-content/uploads/2025/06/Podcast-y-entreno-73.jpg"
            alt="Comunidad Gorobel"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)] via-[var(--color-charcoal)]/90 to-[var(--color-charcoal)]/60" />
        </div>
        <div className="relative z-10 container-wide">
          <p className="section-label !text-[var(--color-sage)]">Nuestra historia</p>
          <h1 className="text-headline font-display text-white max-w-3xl mb-5">
            Pioneros del CrossFit y el Hyrox en el País Vasco.
          </h1>
          <p className="text-white/65 text-xl leading-relaxed max-w-2xl">
            Lo que empezó como una afiliación CrossFit en Llodio en 2010 se convirtió, años después,
            en el primer centro de Hyrox de Euskadi. Una comunidad que no para de crecer en Euskadi.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Quiénes somos</p>
            <h2 className="text-title font-display text-[var(--color-charcoal)] mb-6">
              Una empresa familiar con alma de comunidad.
            </h2>
            <div className="space-y-4 text-[var(--color-steel)] text-base leading-relaxed">
              <p>
                Gorobel Kirol Gunea nació en 2010 cuando Joseba y su equipo trajeron el CrossFit
                a Llodio, siendo de los primeros en ofrecer esta metodología en el País Vasco.
                Sin referencias locales, sin comunidad establecida: solo la convicción de que
                el CrossFit funcional y comunitario transformaría vidas en Euskadi.
              </p>
              <p>
                En 2019 dieron otro paso pionero: introdujeron el Hyrox en Euskadi, convirtiéndose
                en uno de los primeros centros del País Vasco en preparar atletas para esta
                disciplina que combina carrera y fuerza funcional. Hoy, nuestros miembros
                compiten en pruebas Hyrox de toda España.
              </p>
              <p>
                En 2026 llegamos al siguiente nivel: una sala de musculación de 500 m² en
                Llodio, con más de 300.000€ en equipamiento. Porque Euskadi
                se merece lo mejor.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
            <Image
              src="https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg"
              alt="Gorobel Kirol Gunea"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label justify-center">Lo que nos define</p>
            <h2 className="text-headline font-display text-[var(--color-charcoal)]">
              Nuestros valores.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-forest)]/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[var(--color-forest)]" />
                </div>
                <h3 className="font-display font-bold text-[var(--color-charcoal)] text-xl mb-3">
                  {title}
                </h3>
                <p className="text-[var(--color-steel)] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[var(--color-charcoal)]">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="section-label justify-center !text-[var(--color-sage)]">
              Nuestra trayectoria
            </p>
            <h2 className="text-headline font-display text-white">Hitos que nos definen.</h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-20 sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-center gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:text-left sm:pl-10"} pl-28 sm:pl-0`}>
                    <div className="bg-[var(--color-iron)] rounded-xl p-5 inline-block max-w-xs text-left">
                      <span className="text-[var(--color-clay)] font-display font-black text-sm uppercase tracking-widest block mb-1">
                        {m.year}
                      </span>
                      <p className="text-white/80 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-20 sm:static sm:shrink-0 w-4 h-4 rounded-full bg-[var(--color-moss)] ring-4 ring-[var(--color-charcoal)] -translate-x-1/2 sm:translate-x-0" />

                  {/* Spacer */}
                  <div className="flex-1 hidden sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-narrow text-center">
          <p className="section-label justify-center">Síguenos</p>
          <h2 className="text-title font-display text-[var(--color-charcoal)] mb-4">
            Nuestro día a día
          </h2>
          <p className="text-[var(--color-steel)] mb-8">
            Síguenos en Instagram para ver entrenamientos, resultados y el ambiente real de Gorobel.
          </p>
          <a
            href="https://www.instagram.com/gorobelkirolgunea/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            @gorobelkirolgunea
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-10 rounded-2xl overflow-hidden aspect-video max-w-lg mx-auto">
            <Image
              src="https://gorobelgara.com/wp-content/uploads/2024/03/insta.png"
              alt="Instagram Gorobel Kirol Gunea"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
