import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { activities } from "@/lib/data/activities";
import CTASection from "@/components/home/CTASection";
import FaqSection, { type FaqItem } from "@/components/shared/FaqSection";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Qué Hacemos — CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR",
  description:
    "Descubre todas las disciplinas de Gorobel Kirol Gunea: CrossTraining, Boxeo, Kick Boxing, Jiu Jitsu y OCR en Llodio y Amurrio. Clases para todos los niveles.",
  keywords: [
    "crosstraining llodio",
    "boxeo llodio adultos",
    "kickboxing llodio",
    "jiu jitsu llodio",
    "ocr entrenamiento llodio",
    "clases crosstraining amurrio",
    "crossfit funcional llodio",
    "entrenamiento spartan llodio",
    "clases kickboxing principiantes llodio",
    "jiu jitsu adultos llodio",
    "artes marciales llodio encartaciones",
    "clases boxeo baratas llodio",
  ],
  alternates: {
    canonical: "https://gorobelgara.com/que-hacemos",
  },
  openGraph: {
    type: "website",
    url: "https://gorobelgara.com/que-hacemos",
    title: "Disciplinas — CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR | Gorobel",
    description:
      "5 disciplinas en Llodio y Amurrio. CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR para todos los niveles. Descubre la tuya.",
    siteName: "Gorobel Kirol Gunea",
    locale: "es_ES",
    images: [
      {
        url: "https://gorobelgara.com/wp-content/uploads/2024/03/photo_2024-02-28_23-33-44-1024x768.jpg",
        width: 1200,
        height: 630,
        alt: "Disciplinas en Gorobel Kirol Gunea — CrossTraining, Boxeo, Kickboxing, Jiu Jitsu, OCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disciplinas en Gorobel — CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR",
    description: "5 disciplinas para todos los niveles en Llodio y Amurrio.",
    images: ["https://gorobelgara.com/wp-content/uploads/2024/03/photo_2024-02-28_23-33-44-1024x768.jpg"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "¿Qué disciplina de Gorobel es mejor para perder peso?",
    a: "El CrossTraining y el Kickboxing son las disciplinas con mayor gasto calórico por sesión, ideales para pérdida de grasa. Sin embargo, la mejor disciplina es la que más disfrutas, porque es la que mantendrás en el tiempo. En Gorobel te ayudamos a encontrar la tuya.",
  },
  {
    q: "¿Puede practicar CrossTraining alguien mayor de 50 años?",
    a: "Absolutamente sí. El CrossTraining es completamente escalable: cada ejercicio se adapta a la capacidad y condición física de cada atleta. Tenemos socios de todas las edades, incluyendo muchos mayores de 50 que han transformado su salud. Los coaches adaptan cada WOD a tu nivel.",
  },
  {
    q: "¿Necesito experiencia previa para empezar Boxeo en Llodio?",
    a: "No necesitas ninguna experiencia. Nuestras clases de Boxeo están abiertas a principiantes absolutos. Los coaches te enseñan la técnica básica desde el primer día en un ambiente seguro, con grupos reducidos y atención personalizada.",
  },
  {
    q: "¿El Jiu Jitsu es peligroso para comenzar?",
    a: "El Jiu Jitsu es una de las artes marciales más seguras para practicar. En Gorobel, las clases para principiantes se centran en la técnica y el aprendizaje progresivo. Es un arte marcial de agarre y sumisión controlado, sin golpes, ideal para cualquier edad.",
  },
  {
    q: "¿Cómo me preparo para una Spartan Race o Tough Mudder desde Llodio?",
    a: "Con nuestro programa de OCR (Obstacle Course Racing) en Gorobel. Entrenamos específicamente para superar carreras de obstáculos como Spartan Race y Tough Mudder, trabajando resistencia, fuerza funcional y mentalidad ganadora. Pregúntanos por los grupos de entrenamiento OCR.",
  },
  {
    q: "¿Cuántas veces por semana debo entrenar en Gorobel?",
    a: "Para resultados óptimos recomendamos de 3 a 5 sesiones semanales, aunque cualquier frecuencia es válida para empezar. Nuestros coaches te ayudarán a diseñar una planificación adaptada a tu objetivo y disponibilidad.",
  },
];

export default function QueHacemosPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Inicio", url: "https://gorobelgara.com" },
      { name: "Qué Hacemos", url: "https://gorobelgara.com/que-hacemos" },
    ]),
    faqSchema(faqs),
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
        <div className="absolute inset-0">
          <Image
            src="https://gorobelgara.com/wp-content/uploads/2025/06/1-Editada-e1749203233595.png"
            alt="Actividades Gorobel"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 container-wide">
          <p className="section-label !text-[var(--color-sage)]">Disciplinas</p>
          <h1 className="text-headline font-display text-white max-w-2xl">
            Diseñados para desafiar, inspirar y mantenerte.
          </h1>
          <p className="text-white/65 text-lg mt-4 max-w-xl">
            5 disciplinas, 1 comunidad. Encuentra la que te apasiona y conviértela en hábito.
          </p>
        </div>
      </section>

      {/* Activities */}
      {activities.map((activity, i) => (
        <section
          key={activity.id}
          id={activity.id}
          className={`section-padding ${i % 2 === 0 ? "bg-[var(--color-surface)]" : "bg-[var(--color-cream)]"}`}
        >
          <div className="container-wide">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src={activity.image}
                  alt={activity.imageAlt}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute top-5 left-5 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: activity.color }}
                >
                  <span className="text-white font-display font-black text-sm">
                    0{i + 1}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="section-label">{activity.tagline}</p>
                <h2 className="text-title font-display text-[var(--color-charcoal)] mb-4">
                  {activity.name}
                </h2>
                <p className="text-[var(--color-steel)] text-lg leading-relaxed mb-8">
                  {activity.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {activity.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-[var(--color-steel)] text-sm">
                      <Check className="w-5 h-5 text-[var(--color-moss)] shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto" className="btn-outline-dark">
                  Prueba {activity.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <FaqSection
        heading="Preguntas sobre nuestras disciplinas"
        faqs={faqs}
        bg="bg-[var(--color-cream)]"
      />

      <CTASection />
    </>
  );
}
