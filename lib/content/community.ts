import type { Localized } from "@/lib/i18n/config";

export interface CommunityIdea {
  title: string;
  body: string;
}

const es = {
  meta: {
    title: "Comunidad y proyectos: Gorobel en Aiaraldea",
    description:
      "Gorobel participa en la vida de Aiaraldea: colaboración con AMPAs, campus, deporte en los pueblos, eventos y solidaridad. Propón una colaboración desde Laudio, Amurrio o tu pueblo.",
  },
  breadcrumb: { home: "Inicio", page: "Comunidad" },
  hero: {
    label: "Gorobel en Aiaraldea",
    title: "El deporte también es una forma de encontrarnos.",
    body: "Participamos en la vida de nuestra comarca para que entrenar, jugar y moverse formen parte del tiempo libre de más personas.",
    imageAlt: "Comunidad del club Gorobel",
    primary: { label: "Conoce nuestros proyectos", href: "#proyectos" },
    secondary: { label: "Propón una colaboración", href: "#colaboraciones" },
  },
  projects: {
    label: "Comunidad y proyectos",
    title: "Cuatro formas de participar.",
    ideas: [
      {
        title: "Deporte que educa",
        body: "Colaboramos con las AMPAs y organizamos campus donde el movimiento sirve para aprender, convivir y trabajar el respeto, la cooperación y la autonomía.",
      },
      {
        title: "Deporte cerca de casa",
        body: "Impulsamos propuestas en pequeños pueblos de las zonas limítrofes, aprovechando sus espacios para acercar el entrenamiento al medio rural.",
      },
      {
        title: "Deporte que reúne",
        body: "Colaboramos en eventos, exhibiciones y encuentros que permiten descubrir disciplinas y disfrutar del deporte en comunidad.",
      },
      {
        title: "Deporte que suma",
        body: "La solidaridad y el voluntariado también tienen su lugar en Gorobel. Participar y apoyar iniciativas del entorno es otra manera de cuidar nuestra comunidad.",
      },
    ] as CommunityIdea[],
  },
  collaborations: {
    label: "Colaboraciones",
    title: "Propón una colaboración.",
    body: "¿Colaboráis con colegios, asociaciones y pueblos? Sí. Cuéntanos tu propuesta, a quién va dirigida y qué espacios tenéis disponibles para estudiar cómo podemos colaborar.",
    audiencesTitle: "Hablamos con",
    audiences: ["Colegios", "AMPAs", "Asociaciones", "Pueblos"],
    cta: { label: "Propón una colaboración", href: "/contacto" },
  },
  news: {
    label: "Actualidad",
    title: "Lo que pasa en el club.",
    body: "Novedades, eventos y proyectos de Gorobel, contados por quienes los viven.",
    cta: { label: "Ver actualidad", href: "/blog" },
  },
};

export type CommunityContent = typeof es;

const eu: CommunityContent = {
  meta: {
    title: "Komunitatea eta proiektuak: Gorobel Aiaraldean",
    description:
      "Gorobelek Aiaraldeko bizitzan parte hartzen du: guraso elkarteekin (AMPA) lankidetza, campusak, herrietako kirola, ekitaldiak eta elkartasuna. Proposatu lankidetza bat Laudiotik, Amurriotik edo zure herritik.",
  },
  breadcrumb: { home: "Hasiera", page: "Komunitatea" },
  hero: {
    label: "Gorobel Aiaraldean",
    title: "Kirola elkartzeko modu bat ere bada.",
    body: "Gure eskualdeko bizitzan parte hartzen dugu, entrenatzea, jolastea eta mugitzea jende gehiagoren aisialdiaren parte izan daitezen.",
    imageAlt: "Gorobel klubaren komunitatea",
    primary: { label: "Ezagutu gure proiektuak", href: "#proyectos" },
    secondary: { label: "Proposatu lankidetza bat", href: "#colaboraciones" },
  },
  projects: {
    label: "Komunitatea eta proiektuak",
    title: "Parte hartzeko lau modu.",
    ideas: [
      {
        title: "Hezten duen kirola",
        body: "Guraso elkarteekin (AMPA) lankidetzan aritzen gara eta campusak antolatzen ditugu, non mugimenduak ikasteko, elkarrekin bizitzeko eta errespetua, lankidetza eta autonomia lantzeko balio duen.",
      },
      {
        title: "Etxetik gertu dagoen kirola",
        body: "Inguruko herri txikietan proposamenak bultzatzen ditugu, haien espazioez baliatuz entrenamendua landa-ingurunera hurbiltzeko.",
      },
      {
        title: "Biltzen duen kirola",
        body: "Ekitaldietan, erakustaldietan eta topaketetan lankidetzan aritzen gara; diziplinak ezagutzeko eta kirola komunitatean gozatzeko aukera ematen dute.",
      },
      {
        title: "Batzen duen kirola",
        body: "Elkartasunak eta boluntariotzak ere badute lekua Gorobelen. Ingurunearen ekimenetan parte hartzea eta horiei laguntzea gure komunitatea zaintzeko beste modu bat da.",
      },
    ],
  },
  collaborations: {
    label: "Lankidetzak",
    title: "Proposatu lankidetza bat.",
    body: "Ikastetxeekin, elkarteekin eta herriekin lankidetzan aritzen al zarete? Bai. Kontatu iezaguzu zuen proposamena, nori zuzenduta dagoen eta zer espazio dituzuen, elkarrekin nola lankidetzan aritu gaitezkeen aztertzeko.",
    audiencesTitle: "Hauekin hitz egiten dugu",
    audiences: ["Ikastetxeak", "Guraso elkarteak (AMPA)", "Elkarteak", "Herriak"],
    cta: { label: "Proposatu lankidetza bat", href: "/contacto" },
  },
  news: {
    label: "Albisteak",
    title: "Klubean gertatzen dena.",
    body: "Gorobelen berriak, ekitaldiak eta proiektuak, bizi dituztenek kontatuta.",
    cta: { label: "Ikusi albisteak", href: "/blog" },
  },
};

export const community: Localized<CommunityContent> = { es, eu };
