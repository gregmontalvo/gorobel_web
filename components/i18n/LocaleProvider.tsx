"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { CommonContent } from "@/lib/content/common";

interface LocaleContextValue {
  locale: Locale;
  common: CommonContent;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  common,
  children,
}: LocaleContextValue & { children: React.ReactNode }) {
  return <LocaleContext.Provider value={{ locale, common }}>{children}</LocaleContext.Provider>;
}

function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("LocaleProvider missing above this component");
  return ctx;
}

export function useLocale(): Locale {
  return useLocaleContext().locale;
}

/** Strings shared by header, footer, forms and chat widget. */
export function useCommon(): CommonContent {
  return useLocaleContext().common;
}
