import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import ActivitySection from "@/components/activities/ActivitySection";
import ContactCta from "@/components/activities/ContactCta";
import FaqSection from "@/components/shared/FaqSection";
import { activities } from "@/lib/content/activities";
import { alternatesFor, isLocale, localeUrl } from "@/lib/i18n/config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const PATH = "/que-hacemos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = activities[locale];
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
    },
  };
}

export default async function QueHacemosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = activities[locale];

  const schemas = [
    breadcrumbSchema([
      { name: c.breadcrumb.home, url: localeUrl(locale, "/") },
      { name: c.breadcrumb.page, url: localeUrl(locale, PATH) },
    ]),
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
        <div className="absolute inset-0">
          <Image
            src={c.hero.image}
            alt=""
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 container-wide">
          <p className="section-label !text-[var(--color-sage)]">{c.hero.eyebrow}</p>
          <h1 className="text-headline font-display text-white max-w-2xl">{c.hero.title}</h1>
          <p className="text-white/65 text-lg mt-4 max-w-xl">{c.hero.lead}</p>
          <nav aria-label={c.hero.jumpTo} className="flex flex-wrap gap-2 mt-8">
            {c.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                {s.name.split(" · ")[0]}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {c.sections.map((activity, i) => (
        <ActivitySection
          key={activity.id}
          activity={activity}
          index={i}
          imageAlt={c.labels.imageAlt}
          labels={c.labels}
        />
      ))}

      <FaqSection heading={c.faq.heading} faqs={c.faq.items} bg="bg-[var(--color-cream)]" />

      <ContactCta {...c.cta} />
    </>
  );
}
