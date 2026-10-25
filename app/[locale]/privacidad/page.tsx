import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage, { legalMetadata } from "@/components/shared/LegalPage";
import { isLocale } from "@/lib/i18n/config";

const PATH = "/privacidad";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return legalMetadata(locale, "privacy", PATH);
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage locale={locale} kind="privacy" path={PATH} />;
}
