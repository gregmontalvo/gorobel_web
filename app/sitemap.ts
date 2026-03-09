import { MetadataRoute } from "next";

const BASE = "https://gorobelgara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/que-hacemos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/centros`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/nuevo-gimnasio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/sala-musculacion-llodio-2026`,
      lastModified: new Date("2026-02-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/crossfit-principiantes-amurrio`,
      lastModified: new Date("2026-01-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/mejor-gimnasio-llodio`,
      lastModified: new Date("2026-01-12"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/kickboxing-beneficios`,
      lastModified: new Date("2025-12-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/crossfit-open-2026-llodio`,
      lastModified: new Date("2025-12-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
