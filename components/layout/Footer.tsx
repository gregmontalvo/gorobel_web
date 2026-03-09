import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const footerLinks = {
  disciplinas: [
    { href: "/que-hacemos#crosstraining", label: "CrossTraining" },
    { href: "/que-hacemos#boxeo", label: "Boxeo" },
    { href: "/que-hacemos#kickboxing", label: "Kick Boxing" },
    { href: "/que-hacemos#jiujitsu", label: "Jiu Jitsu" },
    { href: "/que-hacemos#ocr", label: "OCR" },
  ],
  centros: [
    { href: "/centros#llodio", label: "Llodio — CrossTraining" },
    { href: "/centros#llodio-contacto", label: "Llodio — Contacto" },
    { href: "/centros#amurrio", label: "Amurrio" },
    { href: "/centros#garazi", label: "Garazi" },
    { href: "/nuevo-gimnasio", label: "🆕 Nuevo Gimnasio Llodio" },
  ],
  info: [
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
    { href: "/privacidad", label: "Privacidad" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      {/* Top CTA band */}
      <div className="bg-[var(--color-forest)] py-12">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="section-label !text-[var(--color-sage-light)]">Únete ahora</p>
            <h2 className="text-title text-white font-display">
              Empieza tu transformación hoy.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary bg-white text-[var(--color-forest)] hover:bg-[var(--color-cream)]">
              Infórmate gratis
            </Link>
            <a
              href="https://wa.me/34667521542"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="https://gorobelgara.com/wp-content/uploads/2023/02/icono-sin-fondo-300x300.png"
                alt="Gorobel"
                width={44}
                height={44}
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <span className="font-display font-black text-xl text-white">Gorobel</span>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Más que un gimnasio — una comunidad comprometida con tu bienestar físico
              y mental desde 2010. Pioneros del CrossFit en España.
            </p>

            <div className="space-y-2.5">
              <a
                href="https://maps.app.goo.gl/pXgDgb97bp8ZG5gK7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white/60 hover:text-[var(--color-sage)] text-sm transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-clay)]" />
                Polígono Industrialdea, Pab. 42, Llodio
              </a>
              <a
                href="tel:+34667521542"
                className="flex items-center gap-2.5 text-white/60 hover:text-[var(--color-sage)] text-sm transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-[var(--color-clay)]" />
                667 521 542
              </a>
              <a
                href="mailto:info@gorobelgara.com"
                className="flex items-center gap-2.5 text-white/60 hover:text-[var(--color-sage)] text-sm transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-[var(--color-clay)]" />
                info@gorobelgara.com
              </a>
              <a
                href="https://www.instagram.com/gorobelkirolgunea/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/60 hover:text-[var(--color-sage)] text-sm transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0 text-[var(--color-clay)]" />
                @gorobelkirolgunea
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Disciplinas
            </h4>
            <ul className="space-y-2">
              {footerLinks.disciplinas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Centros
            </h4>
            <ul className="space-y-2">
              {footerLinks.centros.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Información
            </h4>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Gorobel Kirol Gunea · Todos los derechos reservados
          </p>
          <p className="text-white/30 text-xs">
            Desarrollado por{" "}
            <span className="text-[var(--color-sage)]/60">Badgie Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
