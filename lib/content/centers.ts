import type { Localized } from "@/lib/i18n/config";
import { CLUB } from "@/lib/content/common";
import type { FaqEntry } from "@/lib/content/activities";

/**
 * "Centros" copy: the club has two centres. The descriptions are the text Joseba sent on
 * 22-oct-2026 (apartado 6); the Basque text is a translation pending review by a native speaker.
 */

export type CenterId = "laudio" | "amurrio";

export interface CenterItem {
  /** Anchor id; other pages link to these exact values. */
  id: CenterId;
  name: string;
  /** Short place label shown over the photo and in the schema. */
  place: string;
  description: string;
  /** Street address when known; otherwise the centre is described by town only. */
  address: string;
  /** Street line for structured data; only set when the street is known. */
  streetAddress?: string;
  image: string;
  mapsUrl: string;
}

const es = {
  meta: {
    title: "Centros en Laudio (Llodio) y Amurrio",
    description:
      "Gorobel Kirol Gunea Laudio y Gorobel Kirol Gunea Amurrio: los dos centros de entrenamiento del club en Aiaraldea. Consulta actividades, horarios y cómo llegar.",
  },
  hero: {
    eyebrow: "Dónde entrenamos",
    title: "Dos centros. Un mismo club.",
    lead: "Gorobel Kirol Gunea Laudio y Gorobel Kirol Gunea Amurrio son nuestros centros de entrenamiento. Espacios donde aprender, compartir el esfuerzo y encontrarte con tu gente.",
  },
  labels: {
    address: "Dirección",
    viewActivities: "Ver actividades",
    howToGet: "Cómo llegar",
    talk: "Habla con el equipo",
    imageAltPrefix: "Entrenamiento en",
    schedulesHint: "Consulta horarios y condiciones con el equipo.",
  },
  centers: [
    {
      id: "laudio",
      name: "Gorobel Kirol Gunea Laudio",
      place: "Laudio (Llodio)",
      description:
        "Descubre las actividades y los espacios de entrenamiento del club en Laudio. Consulta horarios y encuentra una propuesta que encaje contigo.",
      address: CLUB.addressLaudio,
      streetAddress: "Polígono Industrialdea, Pabellón 42",
      image: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
      mapsUrl: CLUB.mapsLaudio,
    },
    {
      id: "amurrio",
      name: "Gorobel Kirol Gunea Amurrio",
      place: "Amurrio",
      description:
        "Conoce las propuestas del club en Amurrio. Entrenamiento acompañado y un lugar donde dar continuidad a tus objetivos.",
      address: "Amurrio (Álava)",
      image: "https://gorobelgara.com/wp-content/uploads/2025/06/Entreno-49.jpg",
      mapsUrl: CLUB.mapsAmurrio,
    },
  ] as CenterItem[],
  faq: {
    heading: "Sobre nuestros centros",
    items: [
      {
        q: "¿Cuántos centros tiene Gorobel?",
        a: "Dos: Gorobel Kirol Gunea Laudio y Gorobel Kirol Gunea Amurrio, en Aiaraldea.",
      },
      {
        q: "¿Dónde consulto horarios, cuotas y opciones para empezar?",
        a: "Contacta con el equipo. Te explicaremos la disponibilidad, las condiciones de cada actividad y cómo incorporarte.",
      },
      {
        q: "¿Puedo entrenar en los dos centros?",
        a: "Cuéntanos qué buscas y cuándo puedes entrenar, y te explicamos las opciones disponibles en cada centro.",
      },
      {
        q: "¿Colaboráis con colegios, asociaciones y pueblos?",
        a: "Sí. Cuéntanos vuestra propuesta, a quién va dirigida y qué espacios tenéis disponibles para estudiar cómo podemos colaborar.",
      },
    ] as FaqEntry[],
  },
  cta: {
    eyebrow: "¿Necesitas orientación?",
    title: "Te ayudamos a elegir.",
    body: "Cuéntanos qué buscas y cuándo puedes entrenar. Te ayudamos a elegir.",
    primary: { label: "Habla con el equipo", href: "/contacto" },
    secondary: { label: "Hablar por WhatsApp", href: CLUB.whatsappHref },
  },
  breadcrumb: { home: "Inicio", page: "Centros" },
};

export type CentersContent = typeof es;

const eu: CentersContent = {
  meta: {
    title: "Zentroak Laudion eta Amurrion",
    description:
      "Gorobel Kirol Gunea Laudio eta Gorobel Kirol Gunea Amurrio: klubaren bi entrenamendu zentroak Aiaraldean. Kontsultatu jarduerak, ordutegiak eta nola iritsi.",
  },
  hero: {
    eyebrow: "Non entrenatzen dugun",
    title: "Bi zentro. Klub bera.",
    lead: "Gorobel Kirol Gunea Laudio eta Gorobel Kirol Gunea Amurrio dira gure entrenamendu zentroak. Ikasteko, esfortzua partekatzeko eta zure jendearekin elkartzeko guneak.",
  },
  labels: {
    address: "Helbidea",
    viewActivities: "Ikusi jarduerak",
    howToGet: "Nola iritsi",
    talk: "Hitz egin taldearekin",
    imageAltPrefix: "Entrenamendua hemen:",
    schedulesHint: "Kontsultatu ordutegiak eta baldintzak taldearekin.",
  },
  centers: [
    {
      id: "laudio",
      name: "Gorobel Kirol Gunea Laudio",
      place: "Laudio",
      description:
        "Ezagutu klubaren jarduerak eta entrenamendu guneak Laudion. Kontsultatu ordutegiak eta aurkitu zuri egokitzen zaizun proposamena.",
      address: CLUB.addressLaudio,
      streetAddress: "Polígono Industrialdea, Pabellón 42",
      image: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
      mapsUrl: CLUB.mapsLaudio,
    },
    {
      id: "amurrio",
      name: "Gorobel Kirol Gunea Amurrio",
      place: "Amurrio",
      description:
        "Ezagutu klubaren proposamenak Amurrion. Lagunduta entrenatzea eta zure helburuei jarraipena emateko lekua.",
      address: "Amurrio (Araba)",
      image: "https://gorobelgara.com/wp-content/uploads/2025/06/Entreno-49.jpg",
      mapsUrl: CLUB.mapsAmurrio,
    },
  ],
  faq: {
    heading: "Gure zentroei buruz",
    items: [
      {
        q: "Zenbat zentro ditu Gorobelek?",
        a: "Bi: Gorobel Kirol Gunea Laudio eta Gorobel Kirol Gunea Amurrio, Aiaraldean.",
      },
      {
        q: "Non kontsultatu ordutegiak, kuotak eta hasteko aukerak?",
        a: "Jarri harremanetan taldearekin. Eskuragarritasuna, jarduera bakoitzaren baldintzak eta nola sartu azalduko dizugu.",
      },
      {
        q: "Bi zentroetan entrenatu dezaket?",
        a: "Kontatu zer bilatzen duzun eta noiz entrenatu dezakezun, eta zentro bakoitzean dauden aukerak azalduko dizkizugu.",
      },
      {
        q: "Ikastetxeekin, elkarteekin eta herriekin elkarlanean aritzen zarete?",
        a: "Bai. Kontatu zure proposamena, nori zuzenduta dagoen eta zer espazio dituzuen, elkarlanean nola jardun dezakegun aztertzeko.",
      },
    ],
  },
  cta: {
    eyebrow: "Orientazioa behar duzu?",
    title: "Aukeratzen laguntzen dizugu.",
    body: "Kontatu zer bilatzen duzun eta noiz entrenatu dezakezun. Aukeratzen laguntzen dizugu.",
    primary: { label: "Hitz egin taldearekin", href: "/contacto" },
    secondary: { label: "WhatsAppez hitz egin", href: CLUB.whatsappHref },
  },
  breadcrumb: { home: "Hasiera", page: "Zentroak" },
};

export const centers: Localized<CentersContent> = { es, eu };
