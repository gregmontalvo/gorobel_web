import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-[var(--color-forest)]">
      <div className="container-narrow text-center">
        <p className="section-label justify-center !text-[var(--color-sage-light)]">
          Tu momento es ahora
        </p>
        <h2 className="text-headline font-display text-white mb-6">
          Una hora al día.
          <span className="block text-[var(--color-sand)]">Toda la diferencia.</span>
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          No necesitas estar en forma para empezar. Solo necesitas dar el primer paso.
          Nuestros coaches te llevan desde donde estás hasta donde quieres llegar.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contacto" className="btn-primary bg-white text-[var(--color-forest)] hover:bg-[var(--color-cream)] text-base px-8 py-4">
            Empieza gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://www.instagram.com/gorobelkirolgunea/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base px-8 py-4"
          >
            <Instagram className="w-5 h-5" />
            @gorobelkirolgunea
          </a>
        </div>
      </div>
    </section>
  );
}
