import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, Heart, Repeat, Users2, type LucideIcon } from "lucide-react";
import Link from "@/components/i18n/Link";
import PageCta from "@/components/shared/PageCta";
import { CLUB } from "@/lib/content/common";
import { club } from "@/lib/content/club";
import { alternatesFor, isLocale, localeUrl } from "@/lib/i18n/config";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/sobre-nosotros";
const HERO_IMAGE = "https://gorobelgara.com/wp-content/uploads/2025/06/Podcast-y-entreno-73.jpg";
const STORY_IMAGE =
  "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg";
const INSTAGRAM_IMAGE = "https://gorobelgara.com/wp-content/uploads/2024/03/insta.png";

const VALUE_ICONS: LucideIcon[] = [BookOpen, Heart, Repeat, Users2];

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { title, description } = club[locale].meta;
  return {
    title,
    description,
    alternates: alternatesFor(locale, PATH),
    openGraph: {
      type: "website",
      url: localeUrl(locale, PATH),
      title,
      description,
      images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: club[locale].hero.imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [HERO_IMAGE] },
  };
}

export default async function ClubPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = club[locale];

  const schema = breadcrumbSchema([
    { name: c.breadcrumb.home, url: localeUrl(locale, "/") },
    { name: c.breadcrumb.page, url: localeUrl(locale, PATH) },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative pt-36 pb-24 bg-[var(--color-charcoal)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt={c.hero.imageAlt}
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)] via-[var(--color-charcoal)]/90 to-[var(--color-charcoal)]/60" />
        </div>
        <div className="relative z-10 container-wide">
          <p className="section-label !text-[var(--color-sage)]">{c.hero.label}</p>
          <h1 className="text-headline font-display text-white max-w-3xl mb-5">{c.hero.title}</h1>
          <p className="text-white/65 text-xl leading-relaxed max-w-2xl">{c.hero.body}</p>
        </div>
      </section>

      <section id="filosofia" className="section-padding bg-[var(--color-cream)] scroll-mt-24">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <p className="section-label">{c.philosophy.label}</p>
            <h2 className="text-headline font-display text-[var(--color-charcoal)] mb-5">
              {c.philosophy.title}
            </h2>
            <p className="text-[var(--color-steel)] text-lg leading-relaxed">{c.philosophy.body}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.philosophy.values.map(({ title, body }, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-forest)]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[var(--color-forest)]" />
                  </div>
                  <h3 className="font-display font-bold text-[var(--color-charcoal)] text-xl mb-3">
                    {title}
                  </h3>
                  <p className="text-[var(--color-steel)] leading-relaxed">{body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <Link href={c.philosophy.cta.href} className="btn-primary">
              {c.philosophy.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="historia" className="section-padding bg-[var(--color-surface)] scroll-mt-24">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">{c.history.label}</p>
            <h2 className="text-title font-display text-[var(--color-charcoal)] mb-6">
              {c.history.title}
            </h2>
            <p className="text-[var(--color-steel)] text-lg leading-relaxed mb-8">{c.history.body}</p>
            <div className="space-y-7">
              {c.history.blocks.map(({ title, body }) => (
                <div key={title}>
                  <h3 className="font-display font-bold text-[var(--color-charcoal)] text-lg mb-2">
                    {title}
                  </h3>
                  <p className="text-[var(--color-steel)] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href={c.history.cta.href} className="btn-primary">
                {c.history.cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl lg:sticky lg:top-28">
            <Image
              src={STORY_IMAGE}
              alt={c.history.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-narrow text-center">
          <p className="section-label justify-center">{c.instagram.label}</p>
          <h2 className="text-title font-display text-[var(--color-charcoal)] mb-4">
            {c.instagram.title}
          </h2>
          <p className="text-[var(--color-steel)] mb-8">{c.instagram.body}</p>
          <a
            href={CLUB.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            {CLUB.instagramHandle}
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-10 rounded-2xl overflow-hidden aspect-video max-w-lg mx-auto">
            <Image
              src={INSTAGRAM_IMAGE}
              alt={c.instagram.imageAlt}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <PageCta locale={locale} />
    </>
  );
}
