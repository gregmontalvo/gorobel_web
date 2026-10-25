import type { Localized } from "@/lib/i18n/config";

export type BlogSection =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "highlight"; text: string };

/** Everything that changes with the language. */
export interface BlogPostText {
  title: string;
  excerpt: string;
  category: string;
  /** Meta description, around 150 characters. */
  description: string;
  keywords: string[];
  imageAlt: string;
  /** Approximate minutes of reading. */
  readMinutes: number;
  body: BlogSection[];
}

/** One article as stored: shared facts plus one text per language. */
export interface BlogPostEntry {
  /** Same in every language. */
  slug: string;
  /** Only "published" articles are listed, indexed and put in the sitemap. */
  status: "published" | "draft";
  /** ISO date (YYYY-MM-DD). */
  date: string;
  image: string;
  featured?: boolean;
  text: Localized<BlogPostText>;
}

/** An article resolved for one language. */
export interface BlogPost extends BlogPostText {
  slug: string;
  date: string;
  image: string;
  featured: boolean;
  author: string;
}
