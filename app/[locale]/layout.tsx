import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { montserrat, inter } from "../fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import ChatWidget from "@/components/chat/ChatWidget";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { common } from "@/lib/content/common";
import { home } from "@/lib/content/home";
import { isLocale, locales, SITE_URL, alternatesFor, type Locale } from "@/lib/i18n/config";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const OG_IMAGE = "/photos/suelo.jpg";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = home[locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title,
      template: "%s | GOROBEL",
    },
    description: meta.description,
    authors: [{ name: "GOROBEL" }],
    creator: "GOROBEL",
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      type: "website",
      locale: locale === "eu" ? "eu_ES" : "es_ES",
      alternateLocale: locale === "eu" ? ["es_ES"] : ["eu_ES"],
      siteName: "GOROBEL · Club de entrenamiento",
      title: meta.title,
      description: meta.description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: common[locale].logoAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <html lang={locale} className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema(locale)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema(locale)) }}
        />
      </head>
      <body className="antialiased">
        <LocaleProvider locale={locale} common={common[locale]}>
          <Header banner={<AnnouncementBar locale={locale} />} />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </LocaleProvider>
      </body>
    </html>
  );
}
