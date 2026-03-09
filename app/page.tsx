import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import HistorySection from "@/components/home/HistorySection";
import ActivitiesPreview from "@/components/home/ActivitiesPreview";
import CentersPreview from "@/components/home/CentersPreview";
import NewGymTeaser from "@/components/home/NewGymTeaser";
import CTASection from "@/components/home/CTASection";
import FaqSection, { type FaqItem } from "@/components/shared/FaqSection";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gorobel Kirol Gunea — CrossFit y Hyrox en Llodio y Amurrio",
  description:
    "Pioneros del CrossFit y Hyrox en el País Vasco desde 2010. CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR en Llodio y Amurrio, las Encartaciones.",
  keywords: [
    "gimnasio llodio",
    "crossfit llodio",
    "hyrox llodio",
    "crosstraining llodio",
    "mejor gimnasio encartaciones",
    "gimnasio amurrio",
    "entrenar en llodio",
    "gimnasio sin permanencia llodio",
    "crossfit con comunidad país vasco",
    "primer crossfit país vasco",
  ],
  alternates: {
    canonical: "https://gorobelgara.com",
  },
};

const faqs: FaqItem[] = [
  {
    q: "¿Cuánto cuesta el gimnasio Gorobel en Llodio?",
    a: "Las cuotas mensuales de Gorobel son muy competitivas para la zona y sin permanencia. Contáctanos por WhatsApp o teléfono (667 521 542) para conocer el precio actual y las condiciones según la disciplina que elijas.",
  },
  {
    q: "¿Es Gorobel apto para principiantes absolutos?",
    a: "Sí, totalmente. Todas nuestras disciplinas están diseñadas para comenzar desde cero. Los coaches de Gorobel escalan cada entrenamiento a tu nivel actual. No necesitas experiencia previa para apuntarte a CrossTraining, Boxeo, Kickboxing, Jiu Jitsu u OCR.",
  },
  {
    q: "¿Dónde está el gimnasio Gorobel en Llodio?",
    a: "La sede principal está en el Polígono Industrialdea, Pabellón 42, en Llodio (Álava). También tenemos centros en la Sala Contacto de Llodio y en Amurrio. Puedes encontrarnos fácilmente en Google Maps buscando 'Gorobel Kirol Gunea'.",
  },
  {
    q: "¿Qué diferencia a Gorobel de un gimnasio convencional?",
    a: "Somos mucho más que un gimnasio: somos una comunidad. Llevamos desde 2010 siendo pioneros del CrossFit y el entrenamiento funcional en el País Vasco. Ofrecemos 5 disciplinas distintas —CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR—, coaches certificados y un ambiente donde todo el mundo encaja sin importar su nivel.",
  },
  {
    q: "¿Puedo hacer una clase de prueba gratuita en Gorobel?",
    a: "Sí. Ofrecemos la posibilidad de probar antes de comprometerte. Contáctanos por WhatsApp al 667 521 542 o rellena el formulario de contacto y te gestionamos tu primera clase de prueba.",
  },
  {
    q: "¿Gorobel fue el primer centro de CrossFit en el País Vasco?",
    a: "Sí, Gorobel Kirol Gunea es uno de los centros pioneros del CrossFit y el entrenamiento funcional en el País Vasco, fundado en 2010 en Llodio. En 2019 también fuimos los primeros en introducir el Hyrox en Euskadi.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <HeroSection />
      <PhilosophySection />
      <HistorySection />
      <ActivitiesPreview />
      <CentersPreview />
      <NewGymTeaser />
      <FaqSection
        heading="Preguntas frecuentes sobre Gorobel"
        faqs={faqs}
        bg="bg-[var(--color-surface)]"
      />
      <CTASection />
    </>
  );
}
