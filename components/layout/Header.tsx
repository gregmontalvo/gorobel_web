"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "@/components/i18n/Link";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import { useCommon } from "@/components/i18n/LocaleProvider";
import { CLUB } from "@/lib/content/common";

export default function Header({ banner }: { banner?: React.ReactNode }) {
  const { header, logoAlt, brandTagline } = useCommon();
  const navLinks = header.nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[var(--color-charcoal)]/98 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        {banner}
        <div className="container-wide py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={CLUB.logo}
              alt={logoAlt}
              width={56}
              height={56}
              className="w-14 h-14 object-contain brightness-0 invert"
            />
            <span className="font-display font-800 text-white text-lg tracking-tight">
              <span className="font-black">GOROBEL</span>
              <span className="text-[var(--color-sage)] font-normal ml-1 text-sm uppercase tracking-widest hidden 2xl:inline">
                {brandTagline}
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-[13px] font-600 tracking-wide uppercase transition-colors duration-200 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-clay)] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <Link
              href={header.cta.href}
              className="hidden sm:inline-flex items-center gap-2 bg-[var(--color-clay)] hover:bg-[var(--color-clay-light)] text-[var(--color-charcoal)] text-sm font-bold uppercase tracking-wide px-4 py-2.5 rounded-lg transition-colors duration-200"
            >
              {header.cta.label}
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label={header.openMenu}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={cn(
            "absolute top-0 right-0 w-80 h-full bg-[var(--color-charcoal)] flex flex-col transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-white font-display font-black text-xl uppercase">{header.menu}</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label={header.closeMenu}
              className="text-white/60 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-2 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/5 text-lg font-600 uppercase tracking-wide px-4 py-3 rounded-lg transition-all duration-200 border border-transparent hover:border-white/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-white/10 space-y-3">
            <Link
              href={header.cta.href}
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full justify-center text-center"
            >
              {header.cta.label}
            </Link>
            <a
              href={CLUB.phoneHref}
              className="flex items-center justify-center gap-2 text-[var(--color-sage)] text-sm font-600"
            >
              <Phone className="w-4 h-4" />
              {CLUB.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
