import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, GraduationCap, HandHeart, Home, Users, type LucideIcon } from "lucide-react";
import Link from "@/components/i18n/Link";
import PageCta from "@/components/shared/PageCta";
import { community } from "@/lib/content/community";
import { alternatesFor, isLocale, localeUrl } from "@/lib/i18n/config";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/comunidad";
const HERO_IMAGE = "/photos/entrenador.jpg";

// Same order as `ideas`: educa, cerca de casa, reúne, suma.
const IDEA_ICONS: LucideIcon[] = [GraduationCap, Home, Users, HandHeart];

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { title, description } = community[locale].meta;
  return {
    title,
    description,
    alternates: alternatesFor(locale, PATH),
    openGraph: {
      type: "website",
      url: localeUrl(locale, PATH),
      title,
      description,
      images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: community[locale].hero.imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [HERO_IMAGE] },
  };
}

export default async function CommunityPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = community[locale];

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
          <h1 className="text-headline font-display text-white max-w-3xl mb-5">{c.hero.title}</h1>
          <p className="text-white/65 text-xl leading-relaxed max-w-2xl mb-10">{c.hero.body}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={c.hero.primary.href} className="btn-primary">
              {c.hero.primary.label}
            </Link>
            <Link href={c.hero.secondary.href} className="btn-secondary">
              {c.hero.secondary.label}
            </Link>
          </div>
        </div>
      </section>

      <section id="proyectos" className="section-padding bg-[var(--color-surface)] scroll-mt-24">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <h2 className="text-headline font-display text-[var(--color-charcoal)]">
              {c.projects.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {c.projects.ideas.map(({ title, body }, i) => {
              const Icon = IDEA_ICONS[i];
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
        </div>
      </section>

      <section
        id="colaboraciones"
        className="section-padding bg-[var(--color-charcoal)] scroll-mt-24"
      >
        <div className="container-wide grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-headline font-display text-white mb-5">{c.collaborations.title}</h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8">{c.collaborations.body}</p>
            <Link href={c.collaborations.cta.href} className="btn-primary">
              {c.collaborations.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl bg-[var(--color-iron)] p-8">
            <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold mb-5">
              {c.collaborations.audiencesTitle}
            </p>
            <ul className="space-y-4">
              {c.collaborations.audiences.map((audience) => (
                <li
                  key={audience}
                  className="font-display font-bold text-white text-xl border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-narrow text-center">
          <h2 className="text-title font-display text-[var(--color-charcoal)] mb-4">
            {c.news.title}
          </h2>
          <p className="text-[var(--color-steel)] mb-8">{c.news.body}</p>
          <Link href={c.news.cta.href} className="btn-outline-dark">
            {c.news.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <PageCta locale={locale} />
    </>
  );
}
