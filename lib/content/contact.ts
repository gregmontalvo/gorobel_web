import type { Localized } from "@/lib/i18n/config";

/** Values of the "what are you interested in" select; the order is the order shown. */
export const ACTIVITY_IDS = [
  "crosstraining",
  "fuerza-movilidad",
  "barre",
  "endurance-hibrido",
  "fight",
  "recuperacion",
  "fuerza-movilidad-55",
  "equipos-competicion",
  "infancia-juventud",
  "colaboracion",
  "orientacion",
] as const;

export type ActivityId = (typeof ACTIVITY_IDS)[number];

export function isActivityId(value: string): value is ActivityId {
  return (ACTIVITY_IDS as readonly string[]).includes(value);
}

const es = {
  meta: {
    title: "Contacto | Gorobel, club de entrenamiento en Laudio (Llodio) y Amurrio",
    description:
      "Habla con el equipo de Gorobel, club de entrenamiento en Laudio (Llodio) y Amurrio, Aiaraldea. Cuéntanos qué te gustaría conseguir y te ayudamos a encontrar tu lugar.",
  },
  breadcrumb: { home: "Inicio", current: "Contacto" },
  hero: {
    label: "Habla con el equipo",
    title: "Cuéntanos qué te gustaría conseguir.",
    lead: "Volver a entrenar, ganar fuerza, aprender algo nuevo o preparar un reto. Te escuchamos y te ayudamos a encontrar tu lugar en Gorobel.",
    imageAlt: "Entrenamiento en Gorobel, club de entrenamiento de Laudio y Amurrio",
  },
  formSection: {
    title: "Escríbenos",
    intro: "Cuéntanos qué buscas y cuándo puedes entrenar. Te ayudamos a elegir.",
  },
  direct: {
    title: "Contacto directo",
    phoneNote: "Llamadas y WhatsApp",
    emailNote: "Escríbenos un correo",
    whatsappLabel: "WhatsApp",
    whatsappNote: "Hablar por WhatsApp",
    instagramNote: "Síguenos en Instagram",
  },
  centers: {
    title: "Dónde entrenamos",
    laudioText: "Consulta las actividades y los horarios del club en Laudio.",
    amurrioText: "Conoce las propuestas del club en Amurrio.",
    seeCenter: "Ver el centro",
    maps: "Cómo llegar",
  },
  faqHeading: "Antes de escribirnos",
  faqs: [
    {
      q: "¿Dónde consulto horarios, cuotas y opciones para empezar?",
      a: "Contacta con el equipo. Te explicaremos la disponibilidad, las condiciones de cada actividad y cómo incorporarte.",
    },
    {
      q: "¿Necesito experiencia o estar en forma?",
      a: "Puedes empezar desde tu nivel. Hablaremos contigo para orientarte y adaptar el entrenamiento a tu punto de partida.",
    },
    {
      q: "¿Colaboráis con colegios, asociaciones y pueblos?",
      a: "Sí. Cuéntanos vuestra propuesta, a quién va dirigida y qué espacios tenéis disponibles para estudiar cómo podemos colaborar.",
    },
    {
      q: "¿Cómo puedo contactar con el club?",
      a: "Con el formulario de esta página, por WhatsApp o llamando al 667 521 542, o escribiendo a info@gorobelgara.com.",
    },
  ],
  schema: {
    centerName: "Gorobel Kirol Gunea Laudio",
    description:
      "Club de entrenamiento en Laudio (Llodio), Aiaraldea. Entrenamiento funcional, fuerza y movilidad, barre, Gorobel Fight, programa +55 e infancia y juventud.",
    activities: [
      "CrossTraining y Functional Fitness",
      "Fuerza y movilidad",
      "Barre",
      "Boxeo",
      "Kickboxing",
      "Jiu Jitsu",
    ],
  },
  form: {
    name: "Nombre y apellidos",
    namePlaceholder: "Tu nombre completo",
    phone: "Teléfono",
    phonePlaceholder: "600 000 000",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    interest: "¿Qué te interesa?",
    interestPlaceholder: "Selecciona una opción…",
    activities: {
      crosstraining: "CrossTraining y Functional Fitness",
      "fuerza-movilidad": "Fuerza y movilidad",
      barre: "Barre",
      "endurance-hibrido": "Endurance y entrenamiento híbrido",
      fight: "Gorobel Fight (boxeo, kickboxing y Jiu Jitsu)",
      recuperacion: "Recuperación deportiva",
      "fuerza-movilidad-55": "Fuerza y movilidad +55",
      "equipos-competicion": "Equipos y competición",
      "infancia-juventud": "Infancia y juventud",
      colaboracion: "Propuesta de colaboración (colegios, asociaciones, pueblos)",
      orientacion: "No sé por dónde empezar",
    },
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos qué buscas, tu punto de partida y cuándo puedes entrenar…",
    privacyBefore: "He leído y acepto la",
    privacyLink: "política de privacidad",
    privacyAfter: "de Gorobel Kirol Gunea",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    errors: {
      required: "Campo requerido",
      email: "Email no válido",
      phone: "Teléfono no válido",
      message: "Cuéntanos un poco más (mínimo 5 caracteres)",
      privacy: "Debes aceptar la política de privacidad",
    },
    success: {
      title: "Mensaje enviado",
      text: "Gracias. El equipo de Gorobel ha recibido tu mensaje y te responderá lo antes posible. Si es urgente, también puedes escribirnos por WhatsApp.",
    },
    failure: {
      title: "No hemos podido enviar tu mensaje",
      text: "Inténtalo de nuevo dentro de unos minutos o escríbenos directamente al equipo:",
      tooMany:
        "Has enviado varios mensajes seguidos. Espera unos minutos o escríbenos directamente al equipo:",
      whatsapp: "Escribir por WhatsApp",
      call: "Llamar al",
    },
  },
};

export type ContactContent = typeof es;

const eu: ContactContent = {
  meta: {
    title: "Kontaktua | Gorobel, entrenamendu kluba Laudion (Llodio) eta Amurrion",
    description:
      "Hitz egin Gorobeleko taldearekin, Laudion (Llodio) eta Amurrion, Aiaraldean, dagoen entrenamendu klubarekin. Kontatu iezaguzu zer lortu nahi duzun eta zure tokia aurkitzen lagunduko dizugu.",
  },
  breadcrumb: { home: "Hasiera", current: "Kontaktua" },
  hero: {
    label: "Hitz egin taldearekin",
    title: "Kontatu iezaguzu zer lortu nahi duzun.",
    lead: "Berriro entrenatzea, indarra irabaztea, zerbait berria ikastea edo erronka bat prestatzea. Entzun egingo dugu, eta Gorobelen zure tokia aurkitzen lagunduko dizugu.",
    imageAlt: "Entrenamendua Gorobelen, Laudioko eta Amurrioko entrenamendu klubean",
  },
  formSection: {
    title: "Idatzi iezaguzu",
    intro: "Kontatu iezaguzu zer bilatzen duzun eta noiz entrena dezakezun. Aukeratzen lagunduko dizugu.",
  },
  direct: {
    title: "Zuzeneko kontaktua",
    phoneNote: "Deiak eta WhatsApp",
    emailNote: "Bidali mezu elektroniko bat",
    whatsappLabel: "WhatsApp",
    whatsappNote: "Hitz egin WhatsApp bidez",
    instagramNote: "Jarraitu Instagramen",
  },
  centers: {
    title: "Non entrenatzen dugun",
    laudioText: "Kontsultatu klubaren jarduerak eta ordutegiak Laudion.",
    amurrioText: "Ezagutu klubaren proposamenak Amurrion.",
    seeCenter: "Ikusi zentroa",
    maps: "Nola iritsi",
  },
  faqHeading: "Idatzi aurretik",
  faqs: [
    {
      q: "Non kontsultatu ditzaket ordutegiak, kuotak eta hasteko aukerak?",
      a: "Jarri harremanetan taldearekin. Eskuragarritasuna, jarduera bakoitzaren baldintzak eta nola sartu azalduko dizugu.",
    },
    {
      q: "Esperientzia behar dut, edo formaz egon behar dut?",
      a: "Zure mailatik has zaitezke. Zurekin hitz egingo dugu orientatzeko eta entrenamendua zure abiapuntura egokitzeko.",
    },
    {
      q: "Eskolekin, elkarteekin eta herriekin elkarlanean aritzen zarete?",
      a: "Bai. Kontatu iezaguzu zuen proposamena, nori zuzenduta dagoen eta zer espazio dituzuen, elkarrekin zer egin dezakegun aztertzeko.",
    },
    {
      q: "Nola jar naiteke klubarekin harremanetan?",
      a: "Orri honetako formularioarekin, WhatsApp bidez edo 667 521 542 telefonora deituz, edo info@gorobelgara.com helbidera idatziz.",
    },
  ],
  schema: {
    centerName: "Gorobel Kirol Gunea Laudio",
    description:
      "Entrenamendu kluba Laudion (Llodio), Aiaraldean. Entrenamendu funtzionala, indarra eta mugikortasuna, barre, Gorobel Fight, +55 programa eta haurtzaroa eta gaztaroa.",
    activities: [
      "CrossTraining eta Functional Fitness",
      "Indarra eta mugikortasuna",
      "Barre",
      "Boxeoa",
      "Kickboxing-a",
      "Jiu Jitsua",
    ],
  },
  form: {
    name: "Izena eta abizenak",
    namePlaceholder: "Zure izen osoa",
    phone: "Telefonoa",
    phonePlaceholder: "600 000 000",
    email: "Helbide elektronikoa",
    emailPlaceholder: "zu@posta.com",
    interest: "Zerk interesatzen zaizu?",
    interestPlaceholder: "Aukeratu bat…",
    activities: {
      crosstraining: "CrossTraining eta Functional Fitness",
      "fuerza-movilidad": "Indarra eta mugikortasuna",
      barre: "Barre",
      "endurance-hibrido": "Endurance eta entrenamendu hibridoa",
      fight: "Gorobel Fight (boxeoa, kickboxing-a eta Jiu Jitsua)",
      recuperacion: "Kirol-berreskuratzea",
      "fuerza-movilidad-55": "Indarra eta mugikortasuna +55",
      "equipos-competicion": "Taldeak eta lehiaketa",
      "infancia-juventud": "Haurtzaroa eta gaztaroa",
      colaboracion: "Lankidetza proposamena (eskolak, elkarteak, herriak)",
      orientacion: "Ez dakit nondik hasi",
    },
    message: "Mezua",
    messagePlaceholder: "Kontatu iezaguzu zer bilatzen duzun, zein den zure abiapuntua eta noiz entrena dezakezun…",
    privacyBefore: "Irakurri dut eta onartzen dut Gorobel Kirol Gunearen",
    privacyLink: "pribatutasun politika",
    privacyAfter: "",
    submit: "Bidali mezua",
    sending: "Bidaltzen…",
    errors: {
      required: "Eremu beharrezkoa",
      email: "Helbide elektroniko baliogabea",
      phone: "Telefono baliogabea",
      message: "Kontatu iezaguzu apur bat gehiago (gutxienez 5 karaktere)",
      privacy: "Pribatutasun politika onartu behar duzu",
    },
    success: {
      title: "Mezua bidali da",
      text: "Eskerrik asko. Gorobeleko taldeak zure mezua jaso du eta lehen bait lehen erantzungo dizu. Premiazkoa bada, WhatsApp bidez ere idatz diezaguzu.",
    },
    failure: {
      title: "Ezin izan dugu zure mezua bidali",
      text: "Saiatu berriro minutu batzuk barru, edo idatzi zuzenean taldeari:",
      tooMany:
        "Mezu asko bidali dituzu segidan. Itxaron minutu batzuk, edo idatzi zuzenean taldeari:",
      whatsapp: "Idatzi WhatsApp bidez",
      call: "Deitu hona:",
    },
  },
};

export const contact: Localized<ContactContent> = { es, eu };
