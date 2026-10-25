import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage, { legalMetadata } from "@/components/shared/LegalPage";
import { isLocale } from "@/lib/i18n/config";

const PATH = "/cookies";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return legalMetadata(locale, "cookies", PATH);
}

export default async function CookiesPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage locale={locale} kind="cookies" path={PATH} />;
}
