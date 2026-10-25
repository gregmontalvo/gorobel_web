import type { Localized } from "@/lib/i18n/config";

export interface NewCenterFocus {
  title: string;
  body: string;
  link: { label: string; href: string };
}

const es = {
  meta: {
    title: "Más espacios de fuerza y barre en Laudio",
    description:
      "Gorobel amplía en Laudio (Llodio) sus espacios de fuerza y barre. Déjanos tus datos y te avisamos cuando haya novedades.",
  },
  breadcrumb: { home: "Inicio", page: "Fuerza y barre en Laudio" },
  hero: {
    label: "Gorobel Kirol Gunea Laudio",
    title: "Más espacios para fuerza y barre en Laudio.",
    body: "El club amplía en Laudio los espacios dedicados a la fuerza y al barre. Si quieres que te avisemos cuando tengamos novedades, déjanos tus datos.",
    primary: "Quiero que me avisen",
    secondary: { label: "Ver el centro de Laudio", href: "/centros#laudio" },
    imageAlt: "Entrenamiento en Gorobel Kirol Gunea Laudio",
  },
  focus: {
    label: "Qué se entrena",
    title: "Fuerza y barre, con el equipo a tu lado.",
    items: [
      {
        title: "Fuerza y movilidad",
        body: "Trabaja capacidades que necesitas dentro y fuera del entrenamiento: mover cargas, desplazarte mejor y afrontar tu día con más confianza.",
        link: { label: "Más sobre fuerza y movilidad", href: "/que-hacemos#fuerza-y-movilidad" },
      },
      {
        title: "Barre",
        body: "Clases que combinan fuerza, control corporal y movilidad, con atención a la postura y a la ejecución de cada movimiento.",
        link: { label: "Más sobre barre", href: "/que-hacemos#barre" },
      },
    ] as NewCenterFocus[],
  },
  interest: {
    label: "Lista de interesados",
    title: "Te avisamos cuando haya novedades.",
    body: "Déjanos tu nombre, tu email y tu teléfono. Apuntarte no te compromete a nada: usaremos tus datos solo para contarte las novedades de estos espacios.",
    points: [
      "Te escribimos cuando haya información confirmada",
      "Sin compromiso al apuntarte",
      "Puedes pedirnos que borremos tus datos cuando quieras",
    ],
  },
  form: {
    heading: "Quiero que me avisen",
    name: "Nombre y apellidos *",
    namePlaceholder: "Tu nombre completo",
    email: "Email *",
    emailPlaceholder: "tu@email.com",
    phone: "Teléfono *",
    phonePlaceholder: "600 000 000",
    required: "Campo requerido",
    invalidEmail: "Email no válido",
    privacyPrefix: "Acepto la",
    privacyLink: "política de privacidad",
    privacyRequired: "Necesitamos tu aceptación para guardar tus datos",
    submit: "Apúntame",
    submitting: "Enviando...",
    note: "Solo te escribiremos por esta lista. Sin compromiso.",
    error: "No hemos podido guardar tus datos. Inténtalo de nuevo o escríbenos por WhatsApp.",
    successTitle: "¡Listo, gracias!",
    successBody:
      "Hemos guardado tus datos. Te avisaremos cuando tengamos novedades sobre los espacios de fuerza y barre en Laudio.",
  },
};

export type NewCenterContent = typeof es;

const eu: NewCenterContent = {
  meta: {
    title: "Indarra eta barre lantzeko espazio gehiago Laudion",
    description:
      "Gorobelek indarra eta barre lantzeko espazioak zabaltzen ditu Laudion (Llodio). Utzi zure datuak eta berriak izatean abisatuko dizugu.",
  },
  breadcrumb: { home: "Hasiera", page: "Indarra eta barre Laudion" },
  hero: {
    label: "Gorobel Kirol Gunea Laudio",
    title: "Indarra eta barre lantzeko espazio gehiago Laudion.",
    body: "Klubak indarrari eta barreari eskainitako espazioak zabaltzen ditu Laudion. Berriak ditugunean abisatzea nahi baduzu, utzi zure datuak.",
    primary: "Abisatzea nahi dut",
    secondary: { label: "Ikusi Laudioko zentroa", href: "/centros#laudio" },
    imageAlt: "Entrenamendua Gorobel Kirol Gunea Laudion",
  },
  focus: {
    label: "Zer entrenatzen den",
    title: "Indarra eta barre, taldea zure ondoan dela.",
    items: [
      {
        title: "Indarra eta mugikortasuna",
        body: "Entrenamenduan eta kanpoan behar dituzun gaitasunak landu: kargak mugitu, hobeto desplazatu eta zure eguna konfiantza handiagoz hartu.",
        link: { label: "Gehiago indarrari eta mugikortasunari buruz", href: "/que-hacemos#fuerza-y-movilidad" },
      },
      {
        title: "Barre",
        body: "Indarra, gorputz-kontrola eta mugikortasuna uztartzen dituzten klaseak, jarrerari eta mugimendu bakoitzaren exekuzioari arreta emanez.",
        link: { label: "Gehiago barreri buruz", href: "/que-hacemos#barre" },
      },
    ],
  },
  interest: {
    label: "Interesdunen zerrenda",
    title: "Berriak ditugunean abisatuko dizugu.",
    body: "Utzi zure izena, emaila eta telefonoa. Izena emateak ez zaitu ezertara behartzen: zure datuak espazio hauei buruzko berriak kontatzeko soilik erabiliko ditugu.",
    points: [
      "Baieztatutako informazioa dugunean idatziko dizugu",
      "Izena emateak ez du konpromisorik",
      "Nahi duzunean eska dezakezu zure datuak ezabatzea",
    ],
  },
  form: {
    heading: "Abisatzea nahi dut",
    name: "Izen-abizenak *",
    namePlaceholder: "Zure izen osoa",
    email: "Emaila *",
    emailPlaceholder: "zure@emaila.com",
    phone: "Telefonoa *",
    phonePlaceholder: "600 000 000",
    required: "Derrigorrezko eremua",
    invalidEmail: "Baliogabeko emaila",
    privacyPrefix: "Onartzen dut",
    privacyLink: "pribatutasun politika",
    privacyRequired: "Zure onarpena behar dugu zure datuak gordetzeko",
    submit: "Eman nire izena",
    submitting: "Bidaltzen...",
    note: "Zerrenda honen bidez soilik idatziko dizugu. Konpromisorik gabe.",
    error: "Ezin izan ditugu zure datuak gorde. Saiatu berriro edo idatzi iezaguzu WhatsAppez.",
    successTitle: "Eskerrik asko, izena emanda zaude!",
    successBody:
      "Zure datuak gorde ditugu. Laudioko indarra eta barre espazioei buruzko berriak ditugunean abisatuko dizugu.",
  },
};

export const newCenter: Localized<NewCenterContent> = { es, eu };
