import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog — Consejos de entrenamiento y salud en Llodio y Amurrio",
  description:
    "Blog de Gorobel Kirol Gunea: consejos de CrossTraining, nutrición, salud mental, preparación para OCR y más. Contenido para mejorar tu bienestar en las Encartaciones.",
  keywords: [
    "blog crossfit llodio",
    "consejos crosstraining",
    "entrenamiento funcional amurrio",
    "sala musculacion llodio 2026",
    "crossfit principiantes",
  ],
  alternates: {
    canonical: "https://gorobelgara.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://gorobelgara.com/blog",
    title: "Blog de Gorobel — Entrenamiento, salud y comunidad en las Encartaciones",
    description:
      "Artículos de CrossTraining, nutrición, salud mental y más desde Gorobel Kirol Gunea en Llodio y Amurrio.",
    siteName: "Gorobel Kirol Gunea",
    locale: "es_ES",
    images: [
      {
        url: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Gorobel Kirol Gunea — Entrenamiento y salud en Llodio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Gorobel — Entrenamiento y salud en las Encartaciones",
    description: "Guías, consejos y artículos de entrenamiento desde Llodio y Amurrio.",
    images: ["https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg"],
  },
};

const posts = blogPosts.map((p) => ({
  id: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  date: p.date,
  readTime: p.readTime,
  image: p.image,
  slug: `/blog/${p.slug}`,
  featured: p.featured,
}));

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-[var(--color-charcoal)]">
        <div className="container-wide">
          <p className="section-label !text-[var(--color-sage)]">Blog</p>
          <h1 className="text-headline font-display text-white max-w-2xl">
            Aprende, mejora, supérate.
          </h1>
          <p className="text-white/60 text-lg mt-4">
            Artículos de entrenamiento, salud y comunidad desde las Encartaciones.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-wide">
          <Link
            href={featured.slug}
            className="group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow card-hover"
          >
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-charcoal)]/40" />
              <span className="absolute top-5 left-5 bg-[var(--color-clay)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                Destacado
              </span>
            </div>
            <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-[var(--color-moss)] text-xs font-bold uppercase tracking-widest mb-3 block">
                {featured.category}
              </span>
              <h2 className="font-display font-black text-[var(--color-charcoal)] text-2xl lg:text-3xl leading-tight mb-4">
                {featured.title}
              </h2>
              <p className="text-[var(--color-steel)] leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-[var(--color-stone)] text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="text-[var(--color-forest)] text-sm font-bold flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Leer
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Rest */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={post.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow card-hover"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute top-3 left-3 bg-[var(--color-charcoal)]/80 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-[var(--color-charcoal)] text-sm leading-snug mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-stone)] text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="text-[var(--color-forest)] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
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
    </>
  );
}
