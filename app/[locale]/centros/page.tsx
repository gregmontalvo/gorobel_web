import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import CenterSection from "@/components/centers/CenterSection";
import ContactCta from "@/components/activities/ContactCta";
import FaqSection from "@/components/shared/FaqSection";
import { CLUB } from "@/lib/content/common";
import { centers } from "@/lib/content/centers";
import { alternatesFor, isLocale, localeUrl } from "@/lib/i18n/config";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";

const PATH = "/centros";
const OG_IMAGE = "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = centers[locale];
  return {
    title: meta.title,
    description: meta.description,
    alternates: alternatesFor(locale, PATH),
    openGraph: {
      type: "website",
      url: localeUrl(locale, PATH),
      title: meta.title,
      description: meta.description,
      locale: locale === "eu" ? "eu_ES" : "es_ES",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: meta.title }],
    },
  };
}

export default async function CentrosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = centers[locale];

  const schemas = [
    breadcrumbSchema([
      { name: c.breadcrumb.home, url: localeUrl(locale, "/") },
      { name: c.breadcrumb.page, url: localeUrl(locale, PATH) },
    ]),
    ...c.centers.map((center) =>
      localBusinessSchema({
        locale,
        id: center.id,
        name: center.name,
        description: center.description,
        streetAddress: center.streetAddress,
        city: center.id === "laudio" ? "Laudio/Llodio" : "Amurrio",
        phone: "+34667521542",
        email: CLUB.email,
        mapsUrl: center.mapsUrl,
        image: center.image,
      }),
    ),
    faqSchema(c.faq.items),
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

      <section className="relative pt-36 pb-20 bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-forest-dark)] to-[var(--color-charcoal)] opacity-80" />
        <div className="relative z-10 container-wide">
          <h1 className="text-headline font-display text-white max-w-2xl">{c.hero.title}</h1>
          <p className="text-white/65 text-lg mt-4 max-w-xl">{c.hero.lead}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {c.centers.map((center) => (
              <a
                key={center.id}
                href={`#${center.id}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                {center.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {c.centers.map((center, i) => (
        <CenterSection key={center.id} center={center} index={i} labels={c.labels} />
      ))}

      <FaqSection heading={c.faq.heading} faqs={c.faq.items} bg="bg-[var(--color-surface)]" />

      <ContactCta {...c.cta} />
    </>
  );
}
