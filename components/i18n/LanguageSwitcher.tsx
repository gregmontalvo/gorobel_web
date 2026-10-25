"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { localePath, type Locale } from "@/lib/i18n/config";
import { useCommon, useLocale } from "./LocaleProvider";

const ORDER: Locale[] = ["eu", "es"];
const SHORT: Record<Locale, string> = { eu: "EU", es: "ES" };

/** EU / ES switch that lands on the same page in the other language. */
export default function LanguageSwitcher({ className }: { className?: string }) {
  const current = useLocale();
  const { language } = useCommon();
  const pathname = usePathname() || "/";
  const basePath = pathname.replace(/^\/eu(?=\/|$)/, "") || "/";

  return (
    <div className={cn("flex items-center gap-1 text-xs font-bold tracking-widest", className)} role="group" aria-label={language.label}>
      {ORDER.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/30" aria-hidden>/</span>}
          {locale === current ? (
            <span className="text-white" aria-current="true">
              {SHORT[locale]}
            </span>
          ) : (
            <NextLink
              href={localePath(locale, basePath)}
              hrefLang={locale}
              lang={locale}
              title={language[locale]}
              className="text-white/55 hover:text-white transition-colors"
            >
              {SHORT[locale]}
            </NextLink>
          )}
        </span>
      ))}
    </div>
  );
}
