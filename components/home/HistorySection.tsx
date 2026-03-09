import Link from "next/link";
import { ArrowRight } from "lucide-react";

const chapters = [
  {
    year: "2010",
    label: "El origen",
    keyword: "CrossFit en el País Vasco",
    heading: "Los primeros en traer CrossFit a las Encartaciones.",
    body: "Cuando el CrossFit era desconocido en España, Joseba y su equipo abrieron en Llodio el que se convertiría en uno de los primeros boxes CrossFit del País Vasco. Sin grandes referencias locales, sin comunidad establecida: solo la convicción de que este método —intenso, funcional y comunitario— transformaría vidas en las Encartaciones. No se equivocaron.",
  },
  {
    year: "2019",
    label: "El siguiente capítulo",
    keyword: "Hyrox en el País Vasco",
    heading: "Pioneros del Hyrox en Euskadi.",
    body: "Cuando la disciplina Hyrox empezaba a conquistar Europa, Gorobel fue de los primeros en introducirla en el País Vasco. La combinación de carrera y estaciones de fuerza funcional encajaba perfectamente con nuestra filosofía: entrenamientos completos, medibles y aptos para todos los niveles. Hoy nuestros atletas compiten en carreras Hyrox de toda España.",
  },
];

export default function HistorySection() {
  return (
    <section className="section-padding bg-[var(--color-charcoal)]">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label !text-[var(--color-sage)]">Nuestra historia</p>
          <h2 className="text-headline font-display text-white max-w-2xl">
            Más de 15 años siendo referencia en las Encartaciones.
          </h2>
        </div>

        {/* Chapters */}
        <div className="grid lg:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <article
              key={chapter.year}
              className="bg-[var(--color-iron)] rounded-2xl p-8 lg:p-10 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[var(--color-clay)] font-display font-black text-6xl leading-none">
                  {chapter.year}
                </span>
                <span className="text-[var(--color-sage)] text-xs font-semibold uppercase tracking-widest mt-2 text-right">
                  {chapter.label}
                </span>
              </div>

              {/* SEO keyword visible but integrado con diseño */}
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-moss)]" />
                <span className="text-[var(--color-sage-light)] text-sm font-medium">
                  {chapter.keyword}
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-xl leading-snug">
                {chapter.heading}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {chapter.body}
              </p>
            </article>
          ))}
        </div>

        {/* Closing statement + CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 pt-10">
          <p className="text-white/50 text-sm max-w-lg leading-relaxed">
            Dos disciplinas, una misma comunidad. CrossFit y Hyrox en Llodio y Amurrio
            —con los coaches que los trajeron al País Vasco.
          </p>
          <Link
            href="/sobre-nosotros"
            className="btn-secondary shrink-0 inline-flex items-center gap-2"
          >
            Conoce nuestra historia completa
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
