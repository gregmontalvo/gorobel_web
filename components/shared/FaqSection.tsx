export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  heading?: string;
  faqs: FaqItem[];
  bg?: string;
  dark?: boolean;
}

export default function FaqSection({
  heading = "Preguntas frecuentes",
  faqs,
  bg = "bg-[var(--color-cream)]",
  dark = false,
}: FaqSectionProps) {
  const headingColor = dark
    ? "text-white"
    : "text-[var(--color-charcoal)]";
  const labelColor = dark
    ? "!text-[var(--color-sage)]"
    : "";

  return (
    <section className={`section-padding ${bg}`}>
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className={`section-label justify-center ${labelColor}`}>FAQ</p>
          <h2 className={`text-headline font-display ${headingColor}`}>
            {heading}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-white rounded-2xl shadow-sm overflow-hidden border border-[var(--color-mist)]/20"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none font-display font-bold text-[var(--color-charcoal)] hover:text-[var(--color-forest)] transition-colors">
                <span className="text-left">{q}</span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-forest)]/10 flex items-center justify-center text-[var(--color-forest)] text-lg leading-none transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-steel)] leading-relaxed">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
