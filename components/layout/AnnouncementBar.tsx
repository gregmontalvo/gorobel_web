import Link from "@/components/i18n/Link";
import { getActiveBanner } from "@/lib/banner";
import type { Locale } from "@/lib/i18n/config";

/** Featured notice the club switches on from /admin/settings (events, enrolments). */
export default async function AnnouncementBar({ locale }: { locale: Locale }) {
  const banner = await getActiveBanner(locale);
  if (!banner) return null;

  const external = /^https?:/.test(banner.ctaHref);
  const cta = "ml-3 inline-flex items-center font-bold underline underline-offset-4 hover:no-underline";

  return (
    <div className="relative z-[70] bg-[var(--color-forest)] px-4 py-2.5 text-center text-sm text-white">
      <span>{banner.text}</span>
      {banner.ctaLabel &&
        (external ? (
          <a href={banner.ctaHref} target="_blank" rel="noopener noreferrer" className={cta}>
            {banner.ctaLabel}
          </a>
        ) : (
          <Link href={banner.ctaHref} className={cta}>
            {banner.ctaLabel}
          </Link>
        ))}
    </div>
  );
}
