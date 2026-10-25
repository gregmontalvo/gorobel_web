import type { Locale, Localized } from "@/lib/i18n/config";
import type { BlogPost, BlogPostEntry } from "./blog-types";
import { startTraining } from "./blog-posts/empezar-a-entrenar-desde-cero";
import { strengthMobility55 } from "./blog-posts/fuerza-y-movilidad-mas-de-55";
import { functionalTraining } from "./blog-posts/entrenamiento-funcional-para-empezar";
import { kidsSport } from "./blog-posts/deporte-infantil-y-extraescolares";

export type { BlogPost, BlogSection } from "./blog-types";

const AUTHOR = "GOROBEL";

/**
 * Stored articles. Later this list can come from a content manager;
 * pages only go through getPosts / getPost.
 */
const entries: BlogPostEntry[] = [startTraining, strengthMobility55, functionalTraining, kidsSport];

function resolve(entry: BlogPostEntry, locale: Locale): BlogPost {
  return {
    ...entry.text[locale],
    slug: entry.slug,
    date: entry.date,
    image: entry.image,
    featured: entry.featured ?? false,
    author: AUTHOR,
  };
}

/** Published articles, newest first. */
export function getPosts(locale: Locale): BlogPost[] {
  return entries
    .filter((entry) => entry.status === "published")
    .map((entry) => resolve(entry, locale))
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** A published article, or undefined (drafts are never returned). */
export function getPost(locale: Locale, slug: string): BlogPost | undefined {
  const entry = entries.find((e) => e.slug === slug && e.status === "published");
  return entry ? resolve(entry, locale) : undefined;
}

/** Up to `limit` other published articles. */
export function getRelatedPosts(locale: Locale, slug: string, limit = 3): BlogPost[] {
  return getPosts(locale)
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}

const es = {
  meta: {
    title: "Blog: consejos para entrenar en Laudio (Llodio) y Amurrio",
    description:
      "Artículos del club de entrenamiento GOROBEL para empezar, mantener el hábito y cuidar tu salud en Laudio (Llodio), Amurrio y Aiaraldea.",
    keywords: ["blog entrenamiento Laudio", "entrenar en Amurrio", "club de entrenamiento Aiaraldea"],
    ogTitle: "Blog de GOROBEL: entrenamiento, salud y comunidad en Aiaraldea",
  },
  breadcrumbHome: "Inicio",
  list: {
    label: "Blog",
    title: "Entrena con criterio, a tu ritmo.",
    intro:
      "Artículos del club para empezar, mantener el hábito y cuidar tu salud desde Laudio, Amurrio y Aiaraldea.",
    featured: "Destacado",
    read: "Leer",
    empty: "Estamos preparando los primeros artículos. Mientras tanto, cuéntanos qué buscas y te orientamos.",
    emptyCta: "Habla con el equipo",
  },
  post: {
    back: "Volver al blog",
    by: "por",
    minutes: (n: number) => `${n} min de lectura`,
    moreLabel: "Sigue leyendo",
    moreTitle: "Más artículos del blog",
    notFound: "Artículo no encontrado",
    cta: {
      label: "Tu primer paso",
      title: "Cuéntanos qué te gustaría conseguir.",
      text: "Te escuchamos y te ayudamos a encontrar tu lugar en Gorobel.",
      button: "Quiero entrenar",
    },
  },
  dateLocale: "es-ES",
};

export type BlogUi = typeof es;

const eu: BlogUi = {
  meta: {
    title: "Bloga: entrenatzeko aholkuak Laudion eta Amurrion",
    description:
      "GOROBEL entrenamendu klubaren artikuluak: hasteko, ohitura mantentzeko eta osasuna zaintzeko Laudion, Amurrion eta Aiaraldean.",
    keywords: ["entrenamendu bloga Laudio", "entrenatu Amurrion", "entrenamendu kluba Aiaraldea"],
    ogTitle: "GOROBELen bloga: entrenamendua, osasuna eta komunitatea Aiaraldean",
  },
  breadcrumbHome: "Hasiera",
  list: {
    label: "Bloga",
    title: "Entrenatu buruz, zure erritmoan.",
    intro:
      "Klubaren artikuluak: hasteko, ohitura mantentzeko eta osasuna zaintzeko, Laudiotik, Amurriotik eta Aiaraldetik.",
    featured: "Nabarmendua",
    read: "Irakurri",
    empty: "Lehen artikuluak prestatzen ari gara. Bitartean, kontaiguzu zer bilatzen duzun eta orientatuko zaitugu.",
    emptyCta: "Hitz egin taldearekin",
  },
  post: {
    back: "Itzuli blogera",
    by: "Egilea:",
    minutes: (n: number) => `${n} min irakurtzeko`,
    moreLabel: "Jarraitu irakurtzen",
    moreTitle: "Blogeko beste artikulu batzuk",
    notFound: "Ez da artikulua aurkitu",
    cta: {
      label: "Zure lehen urratsa",
      title: "Kontaiguzu zer lortu nahi duzun.",
      text: "Entzun egingo zaitugu, eta Gorobelen zure lekua aurkitzen lagunduko dizugu.",
      button: "Entrenatu nahi dut",
    },
  },
  dateLocale: "eu-ES",
};

export const blogUi: Localized<BlogUi> = { es, eu };

export function formatPostDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(blogUi[locale].dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
