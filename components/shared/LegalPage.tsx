import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "@/components/i18n/Link";
import { CLUB } from "@/lib/content/common";
import { legal, type LegalFact } from "@/lib/content/legal";
import { alternatesFor, localeUrl, type Locale } from "@/lib/i18n/config";
import { breadcrumbSchema } from "@/lib/schema";

export type LegalKind = "privacy" | "notice" | "cookies";

export function legalMetadata(locale: Locale, kind: LegalKind, path: string): Metadata {
  const { title, description } = legal[locale][kind].meta;
  return {
    title,
    description,
    alternates: alternatesFor(locale, path),
    robots: { index: false, follow: true },
  };
}

function FactValue({ fact }: { fact: LegalFact }) {
  if (fact.kind === "phone") return <a href={CLUB.phoneHref}>{fact.value}</a>;
  if (fact.kind === "email") return <a href={`mailto:${fact.value}`}>{fact.value}</a>;
  return <>{fact.value}</>;
}

export default function LegalPage({
  locale,
  kind,
  path,
}: {
  locale: Locale;
  kind: LegalKind;
  path: string;
}) {
  const content = legal[locale];
  const page = content[kind];
  const schema = breadcrumbSchema([
    { name: content.home, url: localeUrl(locale, "/") },
    { name: page.breadcrumb, url: localeUrl(locale, path) },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pt-36 pb-16 bg-[var(--color-charcoal)]">
        <div className="container-narrow">
          <p className="section-label !text-[var(--color-sage)]">{page.label}</p>
          <h1 className="text-headline font-display text-white">{page.title}</h1>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-narrow">
          <div className="prose-content">
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
                {section.facts && (
                  <ul>
                    {section.facts.map((fact) => (
                      <li key={fact.label}>
                        <strong>{fact.label}:</strong> <FactValue fact={fact} />
                      </li>
                    ))}
                  </ul>
                )}
                {section.items && (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.link && (
                  <p>
                    <Link href={section.link.href}>{section.link.label}</Link>
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/" className="btn-outline-dark">
              <ArrowLeft className="w-4 h-4" />
              {content.back}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
