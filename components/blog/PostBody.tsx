import type { BlogSection } from "@/lib/content/blog-types";

function Section({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "h2":
      return (
        <h2 className="font-display font-black text-[var(--color-charcoal)] text-2xl lg:text-3xl mt-12 mb-4 scroll-mt-24">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display font-bold text-[var(--color-charcoal)] text-xl mt-8 mb-3">
          {section.text}
        </h3>
      );
    case "p":
      return <p className="text-[var(--color-steel)] text-lg leading-relaxed mb-6">{section.text}</p>;
    case "ul":
      return (
        <ul className="space-y-3 mb-8 ml-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[var(--color-steel)] text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-clay)] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <div className="my-8 bg-[var(--color-forest)] text-white rounded-2xl p-6 lg:p-8">
          <p className="text-base lg:text-lg leading-relaxed font-medium">{section.text}</p>
        </div>
      );
  }
}

export default function PostBody({ body }: { body: BlogSection[] }) {
  return (
    <article>
      {body.map((section, i) => (
        <Section key={i} section={section} />
      ))}
    </article>
  );
}
