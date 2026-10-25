import { getSiteSettings, type SiteBanner } from "@/lib/kv";
import type { Locale } from "@/lib/i18n/config";

export interface ActiveBanner {
  text: string;
  ctaLabel: string;
  ctaHref: string;
}

/** The notice to show now, or null. Never throws: a settings outage must not take the page down. */
export async function getActiveBanner(locale: Locale): Promise<ActiveBanner | null> {
  let banner: SiteBanner | null | undefined;
  try {
    banner = (await getSiteSettings()).banner;
  } catch {
    return null;
  }
  if (!banner?.active) return null;
  if (banner.expiresAt && new Date(banner.expiresAt).getTime() < Date.now()) return null;
  const text = banner.text[locale] || banner.text.es;
  if (!text) return null;
  return {
    text,
    ctaLabel: banner.ctaLabel[locale] || banner.ctaLabel.es,
    ctaHref: banner.ctaHref,
  };
}
