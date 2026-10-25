import type { Localized } from "@/lib/i18n/config";

/** Facts that do not change with the language. */
export const CLUB = {
  name: "GOROBEL",
  legalName: "Gorobel Kirol Gunea",
  founded: "2019-05-13",
  foundedYear: 2019,
  phone: "667 521 542",
  phoneHref: "tel:+34667521542",
  whatsappHref: "https://wa.me/34667521542",
  email: "info@gorobelgara.com",
  instagramHref: "https://www.instagram.com/gorobelkirolgunea/",
  instagramHandle: "@gorobelkirolgunea",
  mapsLaudio: "https://maps.app.goo.gl/pXgDgb97bp8ZG5gK7",
  mapsAmurrio: "https://maps.app.goo.gl/7LhEu3Cq8Qz9yM1J6",
  addressLaudio: "Polígono Industrialdea, Pabellón 42, Laudio/Llodio (Álava)",
  logo: "https://gorobelgara.com/wp-content/uploads/2023/02/icono-sin-fondo-300x300.png",
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

const es = {
  brandTagline: "Club de entrenamiento · Entrenamendu Kluba",
  logoAlt: "Gorobel, club de entrenamiento",
  header: {
    nav: [
      { href: "/sobre-nosotros", label: "El club" },
      { href: "/que-hacemos", label: "Entrenamientos" },
      { href: "/que-hacemos#equipos-y-competicion", label: "Competición" },
      { href: "/que-hacemos#infancia-y-juventud", label: "Infancia y juventud" },
      { href: "/centros", label: "Centros" },
      { href: "/comunidad", label: "Comunidad" },
    ] as NavLink[],
    cta: { href: "/contacto", label: "Quiero entrenar" },
    menu: "Menú",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  language: {
    label: "Idioma",
    es: "Castellano",
    eu: "Euskara",
  },
  banner: { close: "Cerrar aviso" },
  footer: {
    intro:
      "Entrenamiento, salud y comunidad desde 2019. Con raíces en Laudio y Amurrio y compromiso con el deporte en Aiaraldea.",
    columns: [
      {
        title: "El club",
        links: [
          { href: "/sobre-nosotros#historia", label: "Nuestra historia" },
          { href: "/sobre-nosotros#filosofia", label: "Filosofía" },
          { href: "/que-hacemos#equipos-y-competicion", label: "Equipos y competición" },
        ],
      },
      {
        title: "Entrena",
        links: [
          { href: "/que-hacemos", label: "Actividades" },
          { href: "/que-hacemos#infancia-y-juventud", label: "Infancia y juventud" },
          { href: "/que-hacemos#fuerza-y-movilidad-55", label: "Fuerza y movilidad +55" },
        ],
      },
      {
        title: "Encuéntranos",
        links: [
          { href: "/centros#laudio", label: "Gorobel Kirol Gunea Laudio" },
          { href: "/centros#amurrio", label: "Gorobel Kirol Gunea Amurrio" },
        ],
      },
      {
        title: "Comunidad",
        links: [
          { href: "/blog", label: "Actualidad" },
          { href: "/comunidad", label: "Eventos y proyectos" },
          { href: "/comunidad#colaboraciones", label: "Colaboraciones" },
        ],
      },
    ] as FooterColumn[],
    contactTitle: "Contacto",
    legal: [
      { href: "/aviso-legal", label: "Aviso legal" },
      { href: "/privacidad", label: "Política de privacidad" },
      { href: "/cookies", label: "Cookies" },
    ] as NavLink[],
    copyright: "GOROBEL · Club de entrenamiento",
    credit: "Desarrollado por",
  },
};

export type CommonContent = typeof es;

const eu: CommonContent = {
  brandTagline: "Club de entrenamiento · Entrenamendu Kluba",
  logoAlt: "Gorobel, entrenamendu kluba",
  header: {
    nav: [
      { href: "/sobre-nosotros", label: "Kluba" },
      { href: "/que-hacemos", label: "Entrenamenduak" },
      { href: "/que-hacemos#equipos-y-competicion", label: "Lehiaketa" },
      { href: "/que-hacemos#infancia-y-juventud", label: "Haurtzaroa eta gaztaroa" },
      { href: "/centros", label: "Zentroak" },
      { href: "/comunidad", label: "Komunitatea" },
    ],
    cta: { href: "/contacto", label: "Entrenatu nahi dut" },
    menu: "Menua",
    openMenu: "Ireki menua",
    closeMenu: "Itxi menua",
  },
  language: {
    label: "Hizkuntza",
    es: "Gaztelania",
    eu: "Euskara",
  },
  banner: { close: "Itxi oharra" },
  footer: {
    intro:
      "Entrenamendua, osasuna eta komunitatea 2019tik. Laudion eta Amurrion ditugu sustraiak, eta Aiaraldeko kirol bizitzarekin gaude konprometituta.",
    columns: [
      {
        title: "Kluba",
        links: [
          { href: "/sobre-nosotros#historia", label: "Gure historia" },
          { href: "/sobre-nosotros#filosofia", label: "Filosofia" },
          { href: "/que-hacemos#equipos-y-competicion", label: "Taldeak eta lehiaketa" },
        ],
      },
      {
        title: "Entrenatu",
        links: [
          { href: "/que-hacemos", label: "Jarduerak" },
          { href: "/que-hacemos#infancia-y-juventud", label: "Haurtzaroa eta gaztaroa" },
          { href: "/que-hacemos#fuerza-y-movilidad-55", label: "Indarra eta mugikortasuna +55" },
        ],
      },
      {
        title: "Aurki gaitzazu",
        links: [
          { href: "/centros#laudio", label: "Gorobel Kirol Gunea Laudio" },
          { href: "/centros#amurrio", label: "Gorobel Kirol Gunea Amurrio" },
        ],
      },
      {
        title: "Komunitatea",
        links: [
          { href: "/blog", label: "Albisteak" },
          { href: "/comunidad", label: "Ekitaldiak eta proiektuak" },
          { href: "/comunidad#colaboraciones", label: "Lankidetzak" },
        ],
      },
    ],
    contactTitle: "Kontaktua",
    legal: [
      { href: "/aviso-legal", label: "Lege oharra" },
      { href: "/privacidad", label: "Pribatutasun politika" },
      { href: "/cookies", label: "Cookieak" },
    ],
    copyright: "GOROBEL · Entrenamendu kluba",
    credit: "Garatzailea:",
  },
};

export const common: Localized<CommonContent> = { es, eu };
