import type { Localized } from "@/lib/i18n/config";

const es = {
  label: "Error 404",
  title: "No encontramos esta página.",
  body: "Puede que el enlace haya cambiado o que la página ya no exista. Desde aquí puedes volver al inicio o escribirnos.",
  home: { label: "Volver al inicio", href: "/" },
  contact: { label: "Contacto", href: "/contacto" },
};

export type NotFoundContent = typeof es;

const eu: NotFoundContent = {
  label: "404 errorea",
  title: "Ez dugu orri hau aurkitu.",
  body: "Agian esteka aldatu egin da edo orria jada ez dago. Hemendik hasierara itzul zaitezke edo guri idatzi.",
  home: { label: "Itzuli hasierara", href: "/" },
  contact: { label: "Kontaktua", href: "/contacto" },
};

export const notFoundContent: Localized<NotFoundContent> = { es, eu };
