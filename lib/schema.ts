const BASE_URL = "https://gorobelgara.com";
const LOGO_URL = "https://gorobelgara.com/wp-content/uploads/2023/02/icono-sin-fondo-300x300.png";
const OG_IMAGE = "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Gorobel Kirol Gunea",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 300,
    height: 300,
  },
  image: OG_IMAGE,
  description:
    "Más que un gimnasio. CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR en Llodio y Amurrio. Pioneros del CrossFit en España desde 2010.",
  foundingDate: "2010",
  areaServed: [
    { "@type": "City", name: "Llodio" },
    { "@type": "City", name: "Amurrio" },
    { "@type": "AdministrativeArea", name: "Euskadi" },
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
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: opts.city === "Llodio" ? 43.1422 : 43.0494,
      longitude: opts.city === "Llodio" ? -3.0006 : -2.9927,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };
}

export function blogPostingSchema(opts: {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  keywords: string[];
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE_URL}/blog/${opts.slug}`,
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
      "@id": `${BASE_URL}/blog/${opts.slug}`,
    },
    keywords: opts.keywords.join(", "),
    articleSection: opts.category,
    inLanguage: "es-ES",
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
