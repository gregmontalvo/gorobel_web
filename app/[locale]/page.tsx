import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import HistorySection from "@/components/home/HistorySection";
import ActivitiesPreview from "@/components/home/ActivitiesPreview";
import CentersPreview from "@/components/home/CentersPreview";
import CommunitySection from "@/components/home/CommunitySection";
import FinalCta from "@/components/home/FinalCta";
import FaqSection from "@/components/shared/FaqSection";
import { home } from "@/lib/content/home";
import { alternatesFor, isLocale } from "@/lib/i18n/config";
import { faqSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = home[locale];
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: alternatesFor(locale, "/"),
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = home[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(content.faq.items.map(({ q, a }) => ({ q, a })))),
        }}
      />
      <HeroSection content={content.hero} />
      <PhilosophySection content={content.philosophy} />
      <HistorySection content={content.history} />
      <ActivitiesPreview content={content.activities} />
      <CentersPreview content={content.centers} />
      <CommunitySection content={content.community} />
      <FaqSection label={content.faq.label} heading={content.faq.title} faqs={content.faq.items} />
      <FinalCta content={content.finalCta} />
    </>
  );
}
