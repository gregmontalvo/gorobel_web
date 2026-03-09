import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { getPostBySlug, getRelatedPosts, blogPosts, type SectionType } from "@/lib/data/blog";
import { breadcrumbSchema } from "@/lib/schema";

const BASE = "https://gorobelgara.com";

/* ─────────────────────────── Static params ─────────────────────────── */
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/* ─────────────────────────── Metadata ─────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };

  const url = `${BASE}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "Gorobel Kirol Gunea",
      locale: "es_ES",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

/* ─────────────────────────── Content renderer ─────────────────────────── */
function renderSection(section: SectionType, index: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={index}
          className="font-display font-black text-[var(--color-charcoal)] text-2xl lg:text-3xl mt-12 mb-4 scroll-mt-24"
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={index}
          className="font-display font-bold text-[var(--color-charcoal)] text-xl mt-8 mb-3"
        >
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p
          key={index}
          className="text-[var(--color-steel)] text-lg leading-relaxed mb-6"
        >
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={index} className="space-y-3 mb-8 ml-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[var(--color-steel)] text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-clay)] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-10 border-l-4 border-[var(--color-clay)] pl-6 bg-[var(--color-cream)] rounded-r-xl py-5 pr-6"
        >
          <p className="text-[var(--color-charcoal)] text-xl font-display font-semibold italic leading-snug mb-2">
            &ldquo;{section.text}&rdquo;
          </p>
          {section.author && (
            <cite className="text-[var(--color-stone)] text-sm not-italic font-medium">
              — {section.author}
            </cite>
          )}
        </blockquote>
      );
    case "highlight":
      return (
        <div
          key={index}
          className="my-8 bg-[var(--color-forest)] text-white rounded-2xl p-6 lg:p-8"
        >
          <p className="text-base lg:text-lg leading-relaxed font-medium">{section.text}</p>
        </div>
      );
    default:
      return null;
  }
}

/* ─────────────────────────── Page ─────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const schemas = [
    breadcrumbSchema([
      { name: "Inicio", url: BASE },
      { name: "Blog", url: `${BASE}/blog` },
      { name: post.title, url: `${BASE}/blog/${post.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${BASE}/blog/${post.slug}`,
      headline: post.title,
      description: post.description,
      image: post.image,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
        url: BASE,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: "Gorobel Kirol Gunea",
        logo: {
          "@type": "ImageObject",
          url: "https://gorobelgara.com/wp-content/uploads/2023/02/icono-sin-fondo-300x300.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE}/blog/${post.slug}`,
      },
      keywords: post.keywords.join(", "),
      articleSection: post.category,
      inLanguage: "es-ES",
    },
  ];

  const formattedDate = new Date(post.date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] max-h-[620px] flex items-end overflow-hidden bg-[var(--color-charcoal)]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/50 to-[var(--color-charcoal)]/10" />
        <div className="relative z-10 container-wide pb-12 pt-24">
          {/* Category badge */}
          <span className="inline-flex items-center gap-1.5 bg-[var(--color-clay)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg mb-4">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <h1 className="font-display font-black text-white text-3xl lg:text-5xl leading-tight max-w-3xl mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} de lectura
            </span>
            <span className="text-white/40">por {post.author}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <div className="bg-[var(--color-surface)]">
        <div className="container-narrow py-14 lg:py-20">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--color-moss)] hover:text-[var(--color-forest)] text-sm font-bold uppercase tracking-wider mb-10 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al blog
          </Link>

          {/* Excerpt lead */}
          <p className="text-[var(--color-charcoal)] text-xl lg:text-2xl font-display font-semibold leading-snug mb-10 pb-10 border-b border-[var(--color-mist)]/40">
            {post.excerpt}
          </p>

          {/* Body */}
          <article>{post.body.map((section, i) => renderSection(section, i))}</article>

          {/* CTA */}
          <div className="mt-14 pt-10 border-t border-[var(--color-mist)]/40">
            <div className="bg-[var(--color-charcoal)] rounded-2xl p-8 lg:p-10 text-center">
              <p className="section-label justify-center !text-[var(--color-sage)]">¿Listo para empezar?</p>
              <h3 className="font-display font-black text-white text-2xl lg:text-3xl mb-3">
                Tu primera clase, gratis.
              </h3>
              <p className="text-white/60 mb-6 max-w-md mx-auto">
                Sin compromiso, sin permanencia. Ven a conocer el ambiente de Gorobel y decide con criterio.
              </p>
              <Link href="/contacto" className="btn-primary">
                Solicitar clase de prueba
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-padding bg-[var(--color-cream)]">
          <div className="container-wide">
            <p className="section-label">Sigue leyendo</p>
            <h2 className="font-display font-black text-[var(--color-charcoal)] text-2xl lg:text-3xl mb-10">
              Más artículos del blog
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all card-hover"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={relPost.image}
                      alt={relPost.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 bg-[var(--color-clay)] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                      {relPost.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-[var(--color-charcoal)] text-base leading-snug mb-3 line-clamp-2">
                      {relPost.title}
                    </h3>
                    <div className="flex items-center justify-between text-[var(--color-stone)] text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relPost.readTime}
                      </span>
                      <span className="text-[var(--color-forest)] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Leer
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
