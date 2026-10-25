import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/content/blog";
import { localeUrl, locales } from "@/lib/i18n/config";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  lastModified?: Date;
};

// /nuevo-gimnasio stays out on purpose: the page is noindex.
const pages: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/que-hacemos", priority: 0.9, changeFrequency: "monthly" },
  { path: "/centros", priority: 0.9, changeFrequency: "monthly" },
  { path: "/sobre-nosotros", priority: 0.7, changeFrequency: "yearly" },
  { path: "/comunidad", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.8, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/privacidad", priority: 0.2, changeFrequency: "yearly" },
  { path: "/aviso-legal", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: Entry[] = getPosts("es").map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
    lastModified: new Date(post.date),
  }));

  return [...pages, ...posts].flatMap(({ path, priority, changeFrequency, lastModified }) =>
    locales.map((locale) => ({
      url: localeUrl(locale, path),
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "es-ES": localeUrl("es", path),
          "eu-ES": localeUrl("eu", path),
        },
      },
    })),
  );
}
