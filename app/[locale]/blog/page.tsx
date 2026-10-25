import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import Link from "@/components/i18n/Link";
import PostCard from "@/components/blog/PostCard";
import { blogUi, formatPostDate, getPosts } from "@/lib/content/blog";
import { alternatesFor, isLocale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = blogUi[locale];
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: alternatesFor(locale, "/blog"),
    openGraph: {
      type: "website",
      title: meta.ogTitle,
      description: meta.description,
      locale: locale === "eu" ? "eu_ES" : "es_ES",
      alternateLocale: locale === "eu" ? ["es_ES"] : ["eu_ES"],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const ui = blogUi[locale];
  const posts = getPosts(locale);
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p !== featured);

  return (
    <>
      <section className="pt-36 pb-16 bg-[var(--color-charcoal)]">
        <div className="container-wide">
          <p className="section-label !text-[var(--color-sage)]">{ui.list.label}</p>
          <h1 className="text-headline font-display text-white max-w-2xl">{ui.list.title}</h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">{ui.list.intro}</p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-wide">
          {!featured ? (
            <div className="text-center max-w-xl mx-auto">
              <p className="text-[var(--color-steel)] text-lg mb-6">{ui.list.empty}</p>
              <Link href="/contacto" className="btn-primary">
                {ui.list.emptyCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow card-hover"
              >
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-charcoal)]/40" />
                  <span className="absolute top-5 left-5 bg-[var(--color-clay)] text-[var(--color-charcoal)] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                    {ui.list.featured}
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
                        {formatPostDate(featured.date, locale)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {ui.post.minutes(featured.readMinutes)}
                      </span>
                    </div>
                    <span className="text-[var(--color-forest)] text-sm font-bold flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      {ui.list.read}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>

              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                  {rest.map((post) => (
                    <PostCard
                      key={post.slug}
                      post={post}
                      readLabel={ui.list.read}
                      minutesLabel={ui.post.minutes(post.readMinutes)}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
