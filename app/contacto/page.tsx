import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import FaqSection, { type FaqItem } from "@/components/shared/FaqSection";
import { localBusinessSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto — Infórmate sin compromiso",
  description:
    "Ponte en contacto con Gorobel Kirol Gunea en Llodio y Amurrio. Infórmate sobre horarios, precios y actividades sin compromiso. Teléfono: 667 521 542.",
  keywords: [
    "contacto gorobel",
    "teléfono gimnasio llodio",
    "horarios gorobel",
    "precios crossfit llodio",
    "apuntarse gorobel llodio",
    "clase prueba gimnasio llodio",
    "precio cuota mensual llodio",
    "whatsapp gimnasio llodio",
    "información crosstraining llodio",
  ],
  alternates: {
    canonical: "https://gorobelgara.com/contacto",
  },
};

const locations = [
  {
    name: "Llodio (Sede Principal)",
    address: "Polígono Industrialdea, Pabellón 42, Llodio, Álava",
    mapsUrl: "https://maps.app.goo.gl/pXgDgb97bp8ZG5gK7",
  },
  {
    name: "Amurrio",
    address: "Amurrio, Álava",
    mapsUrl: "https://maps.app.goo.gl/7LhEu3Cq8Qz9yM1J6",
  },
];

const faqs: FaqItem[] = [
  {
    q: "¿Cuánto tarda en responder Gorobel a las consultas?",
    a: "Respondemos en menos de 24 horas por email o formulario. Si necesitas respuesta inmediata, contáctanos por WhatsApp al 667 521 542 — es la vía más rápida.",
  },
  {
    q: "¿Puedo visitar el gimnasio antes de apuntarme?",
    a: "Sí. Puedes pasar a conocer las instalaciones en cualquier momento durante el horario de apertura. También puedes hacer una clase de prueba gratis para ver si el ambiente y la disciplina se adaptan a lo que buscas.",
  },
  {
    q: "¿Hay algún compromiso de permanencia al apuntarse a Gorobel?",
    a: "No. Ofrecemos cuotas mensuales sin permanencia. Contáctanos para conocer las opciones actuales y el precio según la disciplina que elijas.",
  },
  {
    q: "¿Cómo me apunto a Gorobel en Llodio?",
    a: "Puedes apuntarte contactando por WhatsApp al 667 521 542, rellenando el formulario de esta página, o pasando directamente por cualquiera de nuestros centros. Te orientamos sobre la disciplina más adecuada para ti.",
  },
];

export default function ContactoPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Inicio", url: "https://gorobelgara.com" },
      { name: "Contacto", url: "https://gorobelgara.com/contacto" },
    ]),
    localBusinessSchema({
      id: "llodio-main",
      name: "Gorobel Kirol Gunea — Sede Principal",
      description:
        "Gimnasio CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR en Llodio. Pioneros del CrossFit en el País Vasco desde 2010.",
      streetAddress: "Polígono Industrialdea, Pabellón 42",
      city: "Llodio",
      postalCode: "01400",
      phone: "+34667521542",
      email: "info@gorobelgara.com",
      mapsUrl: "https://maps.app.goo.gl/pXgDgb97bp8ZG5gK7",
      image:
        "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
      activities: ["CrossTraining", "Boxeo", "Kickboxing", "OCR"],
    }),
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
      <section className="relative pt-36 pb-16 bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://gorobelgara.com/wp-content/uploads/2025/06/1-Editada-e1749203233595.png"
            alt="Contacta con Gorobel"
            fill
            priority
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 container-wide">
          <p className="section-label !text-[var(--color-sage)]">Cuéntanos tu historia</p>
          <h1 className="text-headline font-display text-white max-w-xl">
            Hablamos sin compromiso.
          </h1>
          <p className="text-white/65 text-lg mt-4 max-w-lg">
            Responderemos en menos de 24 horas. Si prefieres una respuesta rápida,
            llámanos directamente.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div>
            <h2 className="text-title font-display text-[var(--color-charcoal)] mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-[var(--color-steel)] mb-8">
              Cuéntanos tu nivel, qué disciplina te interesa y cualquier pregunta que tengas.
            </p>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-8">
            {/* Direct contact */}
            <div className="bg-[var(--color-forest)] rounded-2xl p-8">
              <h3 className="font-display font-bold text-white text-xl mb-6">
                Contacto directo
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+34667521542"
                  className="flex items-center gap-4 text-white/80 hover:text-white group transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-[var(--color-sage-light)]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">667 521 542</p>
                    <p className="text-white/50 text-xs">Llamadas y WhatsApp</p>
                  </div>
                </a>
                <a
                  href="mailto:info@gorobelgara.com"
                  className="flex items-center gap-4 text-white/80 hover:text-white group transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-[var(--color-sage-light)]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">info@gorobelgara.com</p>
                    <p className="text-white/50 text-xs">Respuesta en 24h</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/34667521542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/80 hover:text-white group transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5 text-[var(--color-sage-light)]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">WhatsApp</p>
                    <p className="text-white/50 text-xs">La forma más rápida</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Locations */}
            {locations.map((loc) => (
              <div key={loc.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[var(--color-sage)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-[var(--color-charcoal)]">
                      {loc.name}
                    </h4>
                    <p className="text-[var(--color-steel)] text-sm mt-1">{loc.address}</p>
                  </div>
                </div>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-forest)] text-sm font-bold hover:underline ml-8 block"
                >
                  Ver en Google Maps →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        heading="Preguntas antes de contactar"
        faqs={faqs}
        bg="bg-[var(--color-cream)]"
      />
    </>
  );
}
