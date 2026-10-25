import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import Link from "@/components/i18n/Link";
import PostBody from "@/components/blog/PostBody";
import PostCard from "@/components/blog/PostCard";
import { blogUi, formatPostDate, getPost, getPosts, getRelatedPosts } from "@/lib/content/blog";
import { alternatesFor, isLocale, localeUrl } from "@/lib/i18n/config";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getPosts("es").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getPost(locale, slug);
  if (!post) return { title: blogUi[locale].post.notFound, robots: { index: false } };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: alternatesFor(locale, `/blog/${post.slug}`),
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      locale: locale === "eu" ? "eu_ES" : "es_ES",
      alternateLocale: locale === "eu" ? ["es_ES"] : ["eu_ES"],
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = getPost(locale, slug);
  if (!post) notFound();

  const ui = blogUi[locale];
  const related = getRelatedPosts(locale, slug, 3);

  const schemas = [
    breadcrumbSchema([
      { name: ui.breadcrumbHome, url: localeUrl(locale, "/") },
      { name: ui.list.label, url: localeUrl(locale, "/blog") },
      { name: post.title, url: localeUrl(locale, `/blog/${post.slug}`) },
    ]),
    blogPostingSchema({
      locale,
      slug: post.slug,
      title: post.title,
      description: post.description,
      image: post.image,
      date: post.date,
      author: post.author,
      keywords: post.keywords,
      category: post.category,
    }),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="relative h-[60vh] min-h-[420px] max-h-[620px] flex items-end overflow-hidden bg-[var(--color-charcoal)]">
        <Image src={post.image} alt={post.imageAlt} fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/50 to-[var(--color-charcoal)]/10" />
        <div className="relative z-10 container-wide pb-12 pt-24">
          <span className="inline-flex items-center gap-1.5 bg-[var(--color-clay)] text-[var(--color-charcoal)] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg mb-4">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <h1 className="font-display font-black text-white text-3xl lg:text-5xl leading-tight max-w-3xl mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatPostDate(post.date, locale)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {ui.post.minutes(post.readMinutes)}
            </span>
            <span className="text-white/40">
              {ui.post.by} {post.author}
            </span>
          </div>
        </div>
      </section>

      <div className="bg-[var(--color-surface)]">
        <div className="container-narrow py-14 lg:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--color-moss)] hover:text-[var(--color-forest)] text-sm font-bold uppercase tracking-wider mb-10 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {ui.post.back}
          </Link>

          <p className="text-[var(--color-charcoal)] text-xl lg:text-2xl font-display font-semibold leading-snug mb-10 pb-10 border-b border-[var(--color-mist)]/40">
            {post.excerpt}
          </p>

          <PostBody body={post.body} />

          <div className="mt-14 pt-10 border-t border-[var(--color-mist)]/40">
            <div className="bg-[var(--color-charcoal)] rounded-2xl p-8 lg:p-10 text-center">
              <p className="section-label justify-center !text-[var(--color-sage)]">{ui.post.cta.label}</p>
              <p className="font-display font-black text-white text-2xl lg:text-3xl mb-3">{ui.post.cta.title}</p>
              <p className="text-white/60 mb-6 max-w-md mx-auto">{ui.post.cta.text}</p>
              <Link href="/contacto" className="btn-primary">
                {ui.post.cta.button}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section-padding bg-[var(--color-cream)]">
          <div className="container-wide">
            <p className="section-label">{ui.post.moreLabel}</p>
            <h2 className="font-display font-black text-[var(--color-charcoal)] text-2xl lg:text-3xl mb-10">
              {ui.post.moreTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <PostCard
                  key={rel.slug}
                  post={rel}
                  readLabel={ui.list.read}
                  minutesLabel={ui.post.minutes(rel.readMinutes)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
