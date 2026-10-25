"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { localePath } from "@/lib/i18n/config";
import { useLocale } from "./LocaleProvider";

type Props = Omit<ComponentProps<typeof NextLink>, "href"> & { href: string };

/** next/link that keeps the visitor in the current language. */
export default function Link({ href, ...rest }: Props) {
  const locale = useLocale();
  return <NextLink href={localePath(locale, href)} {...rest} />;
}
