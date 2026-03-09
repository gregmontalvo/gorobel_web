import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock } from "lucide-react";

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
};

const posts = [
  {
    id: "sala-musculacion-llodio-2026",
    title: "Por qué Llodio necesitaba una sala de musculación de verdad",
    excerpt:
      "En mayo de 2026 abriremos el mayor centro de musculación de las Encartaciones. Te contamos qué hay detrás de esta decisión y qué va a suponer para la zona.",
    category: "Instalaciones",
    date: "2026-02-15",
    readTime: "4 min",
    image: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
    slug: "/blog/sala-musculacion-llodio-2026",
    featured: true,
  },
  {
    id: "crossfit-principiantes-amurrio",
    title: "CrossTraining para principiantes en Amurrio: lo que nadie te cuenta",
    excerpt:
      "Si nunca has hecho CrossTraining y vives en Amurrio, este artículo es para ti. Sin mitos, sin miedo. Solo la verdad sobre cómo empezar bien.",
    category: "Guías",
    date: "2026-01-28",
    readTime: "6 min",
    image: "https://gorobelgara.com/wp-content/uploads/2024/03/photo_2024-02-28_23-33-44-1024x768.jpg",
    slug: "/blog/crossfit-principiantes-amurrio",
    featured: false,
  },
  {
    id: "mejor-gimnasio-llodio",
    title: "¿Cuál es el mejor gimnasio para perder peso en Llodio?",
    excerpt:
      "Guía honesta para elegir el gimnasio en Llodio que mejor se adapta a tu objetivo. Comparamos opciones y te damos claves para tomar la decisión correcta.",
    category: "Guías",
    date: "2026-01-12",
    readTime: "5 min",
    image: "https://gorobelgara.com/wp-content/uploads/2025/06/Entreno-49.jpg",
    slug: "/blog/mejor-gimnasio-llodio",
    featured: false,
  },
  {
    id: "kickboxing-beneficios",
    title: "5 razones por las que el Kickboxing te cambiará la vida",
    excerpt:
      "Más allá del golpe: el Kickboxing mejora tu cardiovascular, reduce el estrés, aumenta la confianza y crea una disciplina mental que trasciende el gym.",
    category: "Disciplinas",
    date: "2025-12-20",
    readTime: "4 min",
    image: "https://gorobelgara.com/wp-content/uploads/2024/04/3.png",
    slug: "/blog/kickboxing-beneficios",
    featured: false,
  },
  {
    id: "crossfit-open-2026-llodio",
    title: "CrossFit Open 2026 en Gorobel: cómo prepararte y qué esperar",
    excerpt:
      "El CrossFit Open es la competición más grande del mundo. Te explicamos cómo prepararte desde Llodio y por qué participar aunque seas principiante.",
    category: "Competición",
    date: "2025-12-08",
    readTime: "7 min",
    image: "https://gorobelgara.com/wp-content/uploads/2025/06/Podcast-y-entreno-73.jpg",
    slug: "/blog/crossfit-open-2026-llodio",
    featured: false,
  },
];

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
