"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import Link from "@/components/i18n/Link";
import { useCommon } from "@/components/i18n/LocaleProvider";
import { CLUB } from "@/lib/content/common";

const contactLink =
  "flex items-start gap-2.5 text-white/60 hover:text-[var(--color-sage)] text-sm transition-colors";

export default function Footer() {
  const { footer, brandTagline, logoAlt } = useCommon();

  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src={CLUB.logo}
                alt={logoAlt}
                width={44}
                height={44}
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <span>
                <span className="block font-display font-black text-xl text-white leading-none">
                  {CLUB.name}
                </span>
                <span className="block text-[var(--color-sage)] text-xs uppercase tracking-widest mt-1">
                  {brandTagline}
                </span>
              </span>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">{footer.intro}</p>

            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">
              {footer.contactTitle}
            </h4>
            <div className="space-y-2.5">
              <a href={CLUB.phoneHref} className={contactLink}>
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-clay)]" />
                {CLUB.phone}
              </a>
              <a href={`mailto:${CLUB.email}`} className={contactLink}>
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-clay)]" />
                {CLUB.email}
              </a>
              <a href={CLUB.instagramHref} target="_blank" rel="noopener noreferrer" className={contactLink}>
                <Instagram className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-clay)]" />
                {CLUB.instagramHandle}
              </a>
              <a href={CLUB.mapsLaudio} target="_blank" rel="noopener noreferrer" className={contactLink}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-clay)]" />
                {CLUB.addressLaudio}
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/55 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col lg:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {footer.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/40 hover:text-white text-xs transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-white/30 text-xs">
            {footer.credit} <span className="text-[var(--color-sage)]/60">Badgie</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
