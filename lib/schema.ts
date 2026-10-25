import { localeUrl, SITE_URL, type Locale } from "@/lib/i18n/config";

const BASE_URL = "https://gorobelgara.com";
const LOGO_URL = "https://gorobelgara.com/wp-content/uploads/2023/02/icono-sin-fondo-300x300.png";
const OG_IMAGE = `${SITE_URL}/photos/suelo.jpg`;

const DESCRIPTION = {
  es: "Club de entrenamiento en Laudio (Llodio) y Amurrio. Entrenamiento funcional, fuerza, barre, boxeo, kickboxing, Jiu Jitsu, programa +55 e infancia y juventud. Desde 2019 en Aiaraldea.",
  eu: "Entrenamendu kluba Laudion eta Amurrion. Entrenamendu funtzionala, indarra, barre, boxeoa, kickboxing-a, Jiu Jitsua, +55 programa eta haurtzaroa eta gaztaroa. 2019tik Aiaraldean.",
} as const;

export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "@id": `${BASE_URL}/#organization`,
    name: "GOROBEL · Gorobel Kirol Gunea",
    alternateName: ["Gorobel Kirol Gunea Laudio", "Gorobel Kirol Gunea Amurrio"],
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 300,
      height: 300,
    },
    image: OG_IMAGE,
    description: DESCRIPTION[locale],
    foundingDate: "2019-05-13",
    areaServed: [
      { "@type": "City", name: "Laudio/Llodio" },
      { "@type": "City", name: "Amurrio" },
      { "@type": "AdministrativeArea", name: "Aiaraldea" },
    ],
    telephone: "+34667521542",
    email: "info@gorobelgara.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Polígono Industrialdea, Pabellón 42",
      addressLocality: "Laudio/Llodio",
      addressRegion: "Álava",
      postalCode: "01400",
      addressCountry: "ES",
    },
    sameAs: [
      "https://www.instagram.com/gorobelkirolgunea/",
      "https://www.facebook.com/gorobelkirolgunea",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34667521542",
      contactType: "customer service",
      availableLanguage: ["Spanish", "Basque"],
    },
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "GOROBEL · Club de entrenamiento",
    description: DESCRIPTION[locale],
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: locale === "eu" ? "eu-ES" : "es-ES",
  };
}

export function localBusinessSchema(opts: {
  locale: Locale;
  /** Anchor of the centre on /centros ("laudio" | "amurrio"). */
  id: string;
  name: string;
  description: string;
  /** Street address when known. */
  streetAddress?: string;
  city: string;
  phone: string;
  email: string;
  mapsUrl: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": `${BASE_URL}/centros#${opts.id}`,
    name: opts.name,
    description: opts.description,
    url: `${localeUrl(opts.locale, "/centros")}#${opts.id}`,
    inLanguage: opts.locale === "eu" ? "eu-ES" : "es-ES",
    telephone: opts.phone,
    email: opts.email,
    image: opts.image,
    address: {
      "@type": "PostalAddress",
      ...(opts.streetAddress ? { streetAddress: opts.streetAddress } : {}),
      addressLocality: opts.city,
      addressRegion: "Álava",
      addressCountry: "ES",
    },
    hasMap: opts.mapsUrl,
    parentOrganization: { "@id": `${BASE_URL}/#organization` },
  };
}

export function blogPostingSchema(opts: {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  keywords: string[];
  category: string;
}) {
  const url = localeUrl(opts.locale, `/blog/${opts.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    datePublished: opts.date,
    dateModified: opts.date,
    author: {
      "@type": "Organization",
      name: opts.author,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Gorobel Kirol Gunea",
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: opts.keywords.join(", "),
    articleSection: opts.category,
    inLanguage: opts.locale === "eu" ? "eu-ES" : "es-ES",
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
