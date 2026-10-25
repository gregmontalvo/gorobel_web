import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Phone, Mail, MessageCircle, Instagram } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import FaqSection from "@/components/shared/FaqSection";
import Link from "@/components/i18n/Link";
import { localBusinessSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { contact } from "@/lib/content/contact";
import { CLUB } from "@/lib/content/common";
import { alternatesFor, isLocale, localeUrl } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { title, description } = contact[locale].meta;
  return { title, description, alternates: alternatesFor(locale, "/contacto") };
}

const iconBox =
  "w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0";
const directLink = "flex items-center gap-4 text-white/80 hover:text-white group transition-colors";

export default async function ContactoPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = contact[locale];

  const schemas = [
    breadcrumbSchema([
      { name: t.breadcrumb.home, url: localeUrl(locale, "/") },
      { name: t.breadcrumb.current, url: localeUrl(locale, "/contacto") },
    ]),
    localBusinessSchema({
      locale,
      id: "laudio",
      name: t.schema.centerName,
      description: t.schema.description,
      streetAddress: "Polígono Industrialdea, Pabellón 42",
      city: "Laudio/Llodio",
      phone: "+34667521542",
      email: CLUB.email,
      mapsUrl: CLUB.mapsLaudio,
      image: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
    }),
    faqSchema(t.faqs),
  ];

  const centers = [
    { id: "laudio", name: "Gorobel Kirol Gunea Laudio", text: t.centers.laudioText, address: CLUB.addressLaudio, maps: CLUB.mapsLaudio },
    { id: "amurrio", name: "Gorobel Kirol Gunea Amurrio", text: t.centers.amurrioText, address: null, maps: null },
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

      <section className="relative pt-36 pb-16 bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://gorobelgara.com/wp-content/uploads/2025/06/1-Editada-e1749203233595.png"
            alt={t.hero.imageAlt}
            fill
            priority
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 container-wide">
          <p className="section-label !text-[var(--color-sage)]">{t.hero.label}</p>
          <h1 className="text-headline font-display text-white max-w-xl">{t.hero.title}</h1>
          <p className="text-white/65 text-lg mt-4 max-w-lg">{t.hero.lead}</p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-title font-display text-[var(--color-charcoal)] mb-2">
              {t.formSection.title}
            </h2>
            <p className="text-[var(--color-steel)] mb-8">{t.formSection.intro}</p>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-[var(--color-forest)] rounded-2xl p-8">
              <h3 className="font-display font-bold text-white text-xl mb-6">{t.direct.title}</h3>
              <div className="space-y-4">
                <a href={CLUB.phoneHref} className={directLink}>
                  <div className={iconBox}>
                    <Phone className="w-5 h-5 text-[var(--color-sage-light)]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">{CLUB.phone}</p>
                    <p className="text-white/50 text-xs">{t.direct.phoneNote}</p>
                  </div>
                </a>
                <a href={`mailto:${CLUB.email}`} className={directLink}>
                  <div className={iconBox}>
                    <Mail className="w-5 h-5 text-[var(--color-sage-light)]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">{CLUB.email}</p>
                    <p className="text-white/50 text-xs">{t.direct.emailNote}</p>
                  </div>
                </a>
                <a href={CLUB.whatsappHref} target="_blank" rel="noopener noreferrer" className={directLink}>
                  <div className={iconBox}>
                    <MessageCircle className="w-5 h-5 text-[var(--color-sage-light)]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">{t.direct.whatsappLabel}</p>
                    <p className="text-white/50 text-xs">{t.direct.whatsappNote}</p>
                  </div>
                </a>
                <a href={CLUB.instagramHref} target="_blank" rel="noopener noreferrer" className={directLink}>
                  <div className={iconBox}>
                    <Instagram className="w-5 h-5 text-[var(--color-sage-light)]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">{CLUB.instagramHandle}</p>
                    <p className="text-white/50 text-xs">{t.direct.instagramNote}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-bold text-[var(--color-charcoal)] text-xl">
                {t.centers.title}
              </h3>
              {centers.map((center) => (
                <div key={center.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-sage)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-[var(--color-charcoal)]">{center.name}</h4>
                      <p className="text-[var(--color-steel)] text-sm mt-1">{center.address ?? center.text}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 ml-8 text-sm font-bold">
                    <Link
                      href={`/centros#${center.id}`}
                      className="text-[var(--color-forest)] hover:underline"
                    >
                      {t.centers.seeCenter} →
                    </Link>
                    {center.maps && (
                      <a
                        href={center.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-forest)] hover:underline"
                      >
                        {t.centers.maps} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection heading={t.faqHeading} faqs={t.faqs} bg="bg-[var(--color-cream)]" />
    </>
  );
}
