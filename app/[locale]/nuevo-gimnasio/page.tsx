import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Link from "@/components/i18n/Link";
import FoundingMemberForm from "@/components/shared/FoundingMemberForm";
import { newCenter } from "@/lib/content/new-center";
import { alternatesFor, isLocale, localeUrl } from "@/lib/i18n/config";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/nuevo-gimnasio";
const HERO_IMAGE =
  "/photos/jaula.jpg";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { title, description } = newCenter[locale].meta;
  return {
    title,
    description,
    alternates: alternatesFor(locale, PATH),
    // Hidden from search until the club confirms what this page announces.
    robots: { index: false, follow: true },
  };
}

export default async function NewCenterPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = newCenter[locale];

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
            <a href="#reserva" className="btn-primary">
              {c.hero.primary}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link href={c.hero.secondary.href} className="btn-secondary">
              {c.hero.secondary.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <h2 className="text-headline font-display text-[var(--color-charcoal)]">
              {c.focus.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.focus.items.map(({ title, body, link }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-display font-bold text-[var(--color-charcoal)] text-xl mb-3">
                  {title}
                </h3>
                <p className="text-[var(--color-steel)] leading-relaxed mb-6">{body}</p>
                <Link href={link.href} className="btn-outline-dark">
                  {link.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reserva"
        className="section-padding scroll-mt-24"
        style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)" }}
      >
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:pt-4">
              <h2 className="font-display font-black text-white text-4xl leading-tight mb-6">
                {c.interest.title}
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-8">{c.interest.body}</p>
              <ul className="space-y-4">
                {c.interest.points.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--color-clay)] shrink-0 mt-0.5" />
                    <span className="text-white/65 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-3xl p-8 lg:p-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <FoundingMemberForm text={c.form} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
