const BASE_URL = "https://gorobelgara.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Gorobel Kirol Gunea",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
    width: 1200,
    height: 630,
  },
  description:
    "Más que un gimnasio. CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR en Llodio y Amurrio. Pioneros del CrossFit en España desde 2010.",
  foundingDate: "2010",
  areaServed: [
    { "@type": "City", name: "Llodio" },
    { "@type": "City", name: "Amurrio" },
  ],
  telephone: "+34667521542",
  email: "info@gorobelgara.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Polígono Industrialdea, Pabellón 42",
    addressLocality: "Llodio",
    addressRegion: "Álava",
    postalCode: "01400",
    addressCountry: "ES",
  },
  sameAs: ["https://www.instagram.com/gorobelkirolgunea/"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Gorobel Kirol Gunea",
  description:
    "Gimnasio CrossFit, Boxeo, Kickboxing, Jiu Jitsu y OCR en Llodio y Amurrio. Pioneros desde 2010.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: "es-ES",
};

export function localBusinessSchema(opts: {
  id: string;
  name: string;
  description: string;
  streetAddress: string;
  city: string;
  postalCode?: string;
  phone: string;
  email: string;
  mapsUrl: string;
  image: string;
  activities: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthClub", "SportsActivityLocation"],
    "@id": `${BASE_URL}/centros#${opts.id}`,
    name: opts.name,
    description: opts.description,
    url: `${BASE_URL}/centros#${opts.id}`,
    telephone: opts.phone,
    email: opts.email,
    image: opts.image,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: opts.streetAddress,
      addressLocality: opts.city,
      addressRegion: "Álava",
      postalCode: opts.postalCode ?? "01400",
      addressCountry: "ES",
    },
    hasMap: opts.mapsUrl,
    sport: opts.activities,
    parentOrganization: { "@id": `${BASE_URL}/#organization` },
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
