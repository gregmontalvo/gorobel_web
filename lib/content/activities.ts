import type { Localized } from "@/lib/i18n/config";
import { CLUB } from "@/lib/content/common";
export interface FaqEntry {
  q: string;
  a: string;
}

/**
 * "Qué hacemos" copy. The short descriptions of each section are the text Joseba sent on
 * 22-oct-2026 (apartado 5); the "who for" and "what a session is like" lines only restate what he
 * says about the classes (structured sessions, adaptations, starting from your level).
 * The Basque text is a translation pending review by a native speaker.
 */

export interface ActivityItem {
  /** Anchor id; other pages link to these exact values. */
  id: string;
  name: string;
  summary: string;
  forWho: string;
  session: string;
  tagsLabel?: string;
  tags?: string[];
  image: string;
  cta: string;
}

const IMAGES = {
  group: "/photos/jaula.jpg",
  training: "/photos/grupo.jpg",
  center: "/photos/suelo.jpg",
  fight: "/photos/kickboxing-1.png",
  fightGround: "/photos/jiujitsu.jpg",
  outdoor: "/photos/entrenador.jpg",
  heroBg: "/photos/grupo.jpg",
  team: "/photos/kickboxing-2.png",
  kids: "/photos/kickboxing-2.png",
} as const;

const es = {
  meta: {
    title: "Entrenamientos en Laudio (Llodio) y Amurrio",
    description:
      "CrossTraining y Functional Fitness, fuerza y movilidad, barre, endurance, boxeo, kickboxing, Jiu Jitsu, recuperación deportiva, +55 e infancia y juventud en Aiaraldea. Empieza desde tu nivel.",
  },
  hero: {
    eyebrow: "Qué hacemos",
    title: "Hay muchas formas de moverse. Encuentra la tuya.",
    lead: "Tu motivación puede ser ganar fuerza, desconectar, aprender una disciplina o preparar una prueba. Te orientamos para encontrar una propuesta adecuada a ti.",
    image: IMAGES.heroBg,
    jumpTo: "Ir a",
  },
  labels: {
    forWho: "Para quién",
    session: "Cómo es una sesión",
    imageAlt: "Sesión de entrenamiento en Gorobel",
  },
  sections: [
    {
      id: "crosstraining-functional-fitness",
      name: "CrossTraining y Functional Fitness",
      summary:
        "Entrenamiento que combina fuerza, gimnasia y resistencia. Aprende los movimientos y desarrolla tus capacidades con ejercicios adaptados a tu nivel.",
      forWho:
        "Para quien quiere ganar condición física, tanto si empiezas desde cero como si ya has entrenado antes. No hace falta estar en forma para empezar.",
      session:
        "Sesión dirigida y estructurada: el equipo explica los ejercicios, te orienta en la técnica y propone adaptaciones para que trabajes a tu medida.",
      image: IMAGES.group,
      cta: "Quiero entrenar",
    },
    {
      id: "fuerza-y-movilidad",
      name: "Fuerza y movilidad",
      summary:
        "Trabaja capacidades que necesitas dentro y fuera del entrenamiento: mover cargas, desplazarte mejor y afrontar tu día con más confianza.",
      forWho:
        "Para quien quiere sentirse más fuerte y moverse mejor en el día a día. Puedes empezar desde tu nivel.",
      session:
        "Trabajo guiado de fuerza y de movilidad, con atención a cómo ejecutas cada ejercicio y una progresión que parte de tu punto de partida.",
      image: IMAGES.training,
      cta: "Quiero entrenar",
    },
    {
      id: "barre",
      name: "Barre",
      summary:
        "Clases que combinan fuerza, control corporal y movilidad, con atención a la postura y a la ejecución de cada movimiento.",
      forWho:
        "Para quien busca una forma de entrenar centrada en el control del cuerpo y la postura, sin necesidad de experiencia previa.",
      session:
        "Clase dirigida en la que se cuida la ejecución de cada movimiento, y en la que el equipo te corrige y te propone adaptaciones.",
      image: IMAGES.center,
      cta: "Quiero entrenar",
    },
    {
      id: "endurance-e-hibrido",
      name: "Endurance y entrenamiento híbrido",
      summary:
        "Desarrolla tu resistencia y combina carrera con ejercicios de fuerza. Entrena para mejorar tu condición física o preparar retos de carreras híbridas.",
      forWho:
        "Para quien quiere mejorar su resistencia o prepararse para un reto, ya sea correr más cómodo o afrontar una carrera híbrida.",
      session:
        "Entrenamiento que alterna carrera y trabajo de fuerza, con orientación del equipo sobre cómo progresar según tu objetivo.",
      image: IMAGES.outdoor,
      cta: "Quiero entrenar",
    },
    {
      id: "gorobel-fight",
      name: "Gorobel Fight · Deportes de contacto y artes marciales",
      summary:
        "Boxeo, kickboxing y Jiu Jitsu. Aprende técnica y desarrolla tu condición física en un entorno de respeto, disciplina y compañerismo.",
      forWho:
        "Para quien quiere aprender un deporte de contacto o un arte marcial desde la técnica y mejorar su condición física. Puedes empezar desde tu nivel.",
      session:
        "Sesión dirigida en la que se trabajan la técnica y la condición física, con un ambiente de respeto entre compañeros.",
      tagsLabel: "Disciplinas",
      tags: ["Boxeo", "Kickboxing", "Jiu Jitsu"],
      image: IMAGES.fight,
      cta: "Quiero entrenar",
    },
    {
      id: "recuperacion-deportiva",
      name: "Recuperación deportiva",
      summary:
        "Trabajo progresivo para recuperar capacidades y acompañar la vuelta al entrenamiento, atendiendo a la situación de cada persona.",
      forWho:
        "Para quien quiere volver a entrenar y necesita hacerlo de forma gradual. Hablamos contigo antes para conocer tu situación.",
      session:
        "Trabajo progresivo y adaptado, en el que el equipo te acompaña y ajusta la propuesta a cada momento. No sustituye a la atención médica ni a la fisioterapia.",
      image: IMAGES.training,
      cta: "Cuéntanos tu situación",
    },
    {
      id: "fuerza-y-movilidad-55",
      name: "Fuerza y movilidad +55",
      summary:
        "Clases dirigidas para mayores de 55 años. Entrena para mantenerte activo, ganar fuerza y cuidar tu autonomía, compartiendo el proceso con otras personas.",
      forWho:
        "Para mayores de 55 años que quieren mantenerse activos y trabajar capacidades útiles en la vida cotidiana. No hace falta experiencia.",
      session:
        "Clases dirigidas en grupo, con ejercicios de fuerza y movilidad que el equipo adapta a cada persona.",
      image: IMAGES.group,
      cta: "Quiero entrenar",
    },
    {
      id: "equipos-y-competicion",
      name: "Equipos y competición",
      summary:
        "Una línea del club dedicada a desarrollar equipos y preparar retos en CrossTraining, Functional Fitness, running, trail, OCR, boxeo, Jiu Jitsu, kickboxing, halterofilia y carreras híbridas.",
      forWho:
        "Para quien quiere ir más allá del entrenamiento diario y preparar pruebas o competiciones. No hace falta competir para formar parte del club.",
      session:
        "Te orientamos sobre las opciones de preparación y los equipos del club según tu disciplina y tu nivel.",
      tagsLabel: "Disciplinas",
      tags: [
        "CrossTraining",
        "Functional Fitness",
        "Running",
        "Trail",
        "OCR",
        "Boxeo",
        "Jiu Jitsu",
        "Kickboxing",
        "Halterofilia",
        "Carreras híbridas",
      ],
      image: IMAGES.team,
      cta: "Infórmate sobre los equipos",
    },
    {
      id: "infancia-y-juventud",
      name: "Infancia y juventud",
      summary:
        "Extraescolares en colaboración con las AMPAs y campus de verano, Semana Santa e invierno para edades de 6 a 14 años. Juego, movimiento y aprendizaje para descubrir el deporte y disfrutar en equipo.",
      forWho:
        "Para niñas y niños de 6 a 14 años. Si formas parte de un colegio o de una AMPA y quieres proponernos una colaboración, escríbenos.",
      session:
        "Actividades de juego y movimiento en grupo para aprender, convivir y descubrir el deporte.",
      tagsLabel: "Propuestas",
      tags: [
        "Extraescolares con AMPAs",
        "Campus de verano",
        "Campus de Semana Santa",
        "Campus de invierno",
      ],
      image: IMAGES.kids,
      cta: "Consulta actividades y horarios",
    },
  ] as ActivityItem[],
  faq: {
    heading: "Antes de empezar",
    items: [
      {
        q: "¿Necesito experiencia o estar en forma?",
        a: "Puedes empezar desde tu nivel. Hablaremos contigo para orientarte y adaptar el entrenamiento a tu punto de partida.",
      },
      {
        q: "¿Tengo que competir para formar parte?",
        a: "No. Puedes entrenar para cuidar tu salud, aprender o disfrutar. Si quieres competir, consulta las opciones de preparación y los equipos del club.",
      },
      {
        q: "¿Cómo son las clases?",
        a: "Son sesiones dirigidas y estructuradas. El equipo explica los ejercicios, te orienta en la técnica y propone adaptaciones según la actividad y tu nivel.",
      },
      {
        q: "¿Hay actividades para niños y niñas?",
        a: "Sí. Desarrollamos extraescolares en colaboración con las AMPAs y campus de verano, Semana Santa e invierno para edades de 6 a 14 años.",
      },
      {
        q: "¿Hay clases para mayores de 55 años?",
        a: "Sí. Contamos con propuestas de fuerza y movilidad para mantenerse activos y trabajar capacidades útiles en la vida cotidiana.",
      },
      {
        q: "¿Dónde consulto horarios, cuotas y opciones para empezar?",
        a: "Contacta con el equipo. Te explicaremos la disponibilidad, las condiciones de cada actividad y cómo incorporarte.",
      },
    ] as FaqEntry[],
  },
  cta: {
    eyebrow: "Tu primer paso",
    title: "Cuéntanos qué te gustaría conseguir.",
    body: "Volver a entrenar, ganar fuerza, aprender algo nuevo o preparar un reto. Te escuchamos y te ayudamos a encontrar tu lugar en Gorobel.",
    primary: { label: "Quiero entrenar", href: "/contacto" },
    secondary: { label: "Hablar por WhatsApp", href: CLUB.whatsappHref },
  },
  breadcrumb: { home: "Inicio", page: "Qué hacemos" },
};

export type ActivitiesContent = typeof es;

const eu: ActivitiesContent = {
  meta: {
    title: "Entrenamenduak Laudion eta Amurrion",
    description:
      "CrossTraining eta Functional Fitness, indarra eta mugikortasuna, barre, endurance, boxeoa, kickboxing-a, Jiu Jitsua, kirol-berreskuratzea, +55 eta haurtzaroa eta gaztaroa Aiaraldean. Hasi zure mailatik.",
  },
  hero: {
    eyebrow: "Zer egiten dugu",
    title: "Mugitzeko modu asko daude. Aurkitu zurea.",
    lead: "Zure motibazioa indarra irabaztea, deskonektatzea, diziplina bat ikastea edo proba bat prestatzea izan daiteke. Zuri egokitzen zaizun proposamena aurkitzen laguntzen dizugu.",
    image: IMAGES.heroBg,
    jumpTo: "Joan hona",
  },
  labels: {
    forWho: "Nori zuzenduta",
    session: "Nolakoa da saio bat",
    imageAlt: "Entrenamendu saioa Gorobelen",
  },
  sections: [
    {
      id: "crosstraining-functional-fitness",
      name: "CrossTraining eta Functional Fitness",
      summary:
        "Indarra, gimnasia eta erresistentzia uztartzen dituen entrenamendua. Ikasi mugimenduak eta garatu zure gaitasunak zure mailara egokitutako ariketekin.",
      forWho:
        "Forma fisikoa hobetu nahi duenarentzat, zerotik hasten bada nahiz lehenago entrenatu badu. Ez da beharrezkoa formaz egotea hasteko.",
      session:
        "Saio gidatu eta egituratua: taldeak ariketak azaltzen ditu, teknikan gidatzen zaitu eta egokitzapenak proposatzen ditu zure neurrira lan egin dezazun.",
      image: IMAGES.group,
      cta: "Entrenatu nahi dut",
    },
    {
      id: "fuerza-y-movilidad",
      name: "Indarra eta mugikortasuna",
      summary:
        "Entrenamenduan eta kanpoan behar dituzun gaitasunak lantzen ditu: kargak mugitzea, hobeto desplazatzea eta eguna konfiantza handiagoz hastea.",
      forWho:
        "Egunerokoan indartsuago sentitu eta hobeto mugitu nahi duenarentzat. Zure mailatik has zaitezke.",
      session:
        "Indar eta mugikortasun lan gidatua. Ariketa bakoitza nola egiten duzun zaintzen da, eta progresioa zure abiapuntutik hasten da.",
      image: IMAGES.training,
      cta: "Entrenatu nahi dut",
    },
    {
      id: "barre",
      name: "Barre",
      summary:
        "Indarra, gorputz-kontrola eta mugikortasuna uztartzen dituzten klaseak, jarrerari eta mugimendu bakoitzaren exekuzioari arreta eginez.",
      forWho:
        "Gorputzaren kontrolean eta jarreran oinarritutako entrenatzeko modu bat bilatzen duenarentzat, aurretiazko esperientziarik gabe.",
      session:
        "Klase gidatua, mugimendu bakoitzaren exekuzioa zaintzen duena. Taldeak zuzenketak egiten ditu eta egokitzapenak proposatzen ditu.",
      image: IMAGES.center,
      cta: "Entrenatu nahi dut",
    },
    {
      id: "endurance-e-hibrido",
      name: "Endurance eta entrenamendu hibridoa",
      summary:
        "Garatu zure erresistentzia eta uztartu korrika indar ariketekin. Entrenatu zure forma fisikoa hobetzeko edo lasterketa hibridoetako erronkak prestatzeko.",
      forWho:
        "Erresistentzia hobetu edo erronka bat prestatu nahi duenarentzat: korrika erosoago egitea edo lasterketa hibrido bati aurre egitea.",
      session:
        "Korrika eta indar lana txandakatzen dituen entrenamendua. Taldeak zure helburuaren arabera nola aurrera egin azaltzen dizu.",
      image: IMAGES.outdoor,
      cta: "Entrenatu nahi dut",
    },
    {
      id: "gorobel-fight",
      name: "Gorobel Fight · Kontaktu kirolak eta arte martzialak",
      summary:
        "Boxeoa, kickboxing-a eta Jiu Jitsua. Ikasi teknika eta garatu zure forma fisikoa errespetua, diziplina eta lagunartea nagusi diren giroan.",
      forWho:
        "Kontaktu kirol bat edo arte martzial bat teknikatik ikasi eta forma fisikoa hobetu nahi duenarentzat. Zure mailatik has zaitezke.",
      session:
        "Saio gidatua, teknika eta forma fisikoa lantzen dituena, kideen arteko errespetuzko giroan.",
      tagsLabel: "Diziplinak",
      tags: ["Boxeoa", "Kickboxing-a", "Jiu Jitsua"],
      image: IMAGES.fight,
      cta: "Entrenatu nahi dut",
    },
    {
      id: "recuperacion-deportiva",
      name: "Kirol-berreskuratzea",
      summary:
        "Gaitasunak berreskuratzeko eta entrenamendura itzultzeko lan progresiboa, pertsona bakoitzaren egoera kontuan hartuta.",
      forWho:
        "Berriro entrenatu nahi duenarentzat eta pixkanaka egin behar duenarentzat. Zurekin hitz egiten dugu lehenik, zure egoera ezagutzeko.",
      session:
        "Lan progresiboa eta egokitua; taldeak lagundu egiten zaitu eta proposamena une bakoitzera moldatzen du. Ez ditu ordezkatzen arreta medikoa ez fisioterapia.",
      image: IMAGES.training,
      cta: "Kontatu zure egoera",
    },
    {
      id: "fuerza-y-movilidad-55",
      name: "Indarra eta mugikortasuna +55",
      summary:
        "55 urtetik gorakoentzako klase gidatuak. Entrenatu aktibo mantentzeko, indarra irabazteko eta zure autonomia zaintzeko, prozesua beste pertsona batzuekin partekatuz.",
      forWho:
        "55 urtetik gorakoentzat, aktibo egon eta eguneroko bizitzan baliagarriak diren gaitasunak landu nahi dituztenentzat. Ez da esperientziarik behar.",
      session:
        "Talde klase gidatuak, indar eta mugikortasun ariketekin; taldeak pertsona bakoitzari egokitzen dizkio.",
      image: IMAGES.group,
      cta: "Entrenatu nahi dut",
    },
    {
      id: "equipos-y-competicion",
      name: "Taldeak eta lehiaketa",
      summary:
        "Klubaren lerro bat, taldeak garatzeko eta erronkak prestatzeko: CrossTraining, Functional Fitness, running, trail, OCR, boxeoa, Jiu Jitsua, kickboxing-a, halterofilia eta lasterketa hibridoak.",
      forWho:
        "Eguneroko entrenamenduaz harago joan eta probak edo lehiaketak prestatu nahi dituenarentzat. Klubaren parte izateko ez da lehiatu behar.",
      session:
        "Prestakuntza aukerei eta klubaren taldeei buruz orientatzen zaitugu, zure diziplinaren eta mailaren arabera.",
      tagsLabel: "Diziplinak",
      tags: [
        "CrossTraining",
        "Functional Fitness",
        "Running",
        "Trail",
        "OCR",
        "Boxeoa",
        "Jiu Jitsua",
        "Kickboxing-a",
        "Halterofilia",
        "Lasterketa hibridoak",
      ],
      image: IMAGES.team,
      cta: "Jakin taldeei buruz",
    },
    {
      id: "infancia-y-juventud",
      name: "Haurtzaroa eta gaztaroa",
      summary:
        "Eskolaz kanpoko jarduerak guraso elkarteekin (AMPA) elkarlanean, eta uda, Aste Santu eta neguko campusak 6 eta 14 urte bitarteko haurrentzat. Jolasa, mugimendua eta ikasketa kirola ezagutzeko eta taldean gozatzeko.",
      forWho:
        "6 eta 14 urte bitarteko neska-mutilentzat. Ikastetxe edo guraso elkarte (AMPA) bateko kide bazara eta lankidetza bat proposatu nahi badiguzu, idatzi iezaguzu.",
      session:
        "Taldeko jolas eta mugimendu jarduerak, ikasteko, elkarbizitzeko eta kirola ezagutzeko.",
      tagsLabel: "Proposamenak",
      tags: [
        "Eskolaz kanpokoak guraso elkarteekin (AMPA)",
        "Udako campusa",
        "Aste Santuko campusa",
        "Neguko campusa",
      ],
      image: IMAGES.kids,
      cta: "Kontsultatu jarduerak eta ordutegiak",
    },
  ],
  faq: {
    heading: "Hasi baino lehen",
    items: [
      {
        q: "Esperientzia behar dut edo formaz egon behar dut?",
        a: "Zure mailatik has zaitezke. Zurekin hitz egingo dugu orientatzeko eta entrenamendua zure abiapuntura egokitzeko.",
      },
      {
        q: "Lehiatu behar dut klubaren parte izateko?",
        a: "Ez. Zure osasuna zaintzeko, ikasteko edo gozatzeko entrena dezakezu. Lehiatu nahi baduzu, kontsultatu prestakuntza aukerak eta klubaren taldeak.",
      },
      {
        q: "Nolakoak dira klaseak?",
        a: "Saio gidatu eta egituratuak dira. Taldeak ariketak azaltzen ditu, teknikan gidatzen zaitu eta egokitzapenak proposatzen ditu jardueraren eta zure mailaren arabera.",
      },
      {
        q: "Badago jarduerarik haurrentzat?",
        a: "Bai. Eskolaz kanpoko jarduerak garatzen ditugu guraso elkarteekin (AMPA) elkarlanean, eta uda, Aste Santu eta neguko campusak 6 eta 14 urte bitarteko haurrentzat.",
      },
      {
        q: "Badago klaserik 55 urtetik gorakoentzat?",
        a: "Bai. Indar eta mugikortasun proposamenak ditugu aktibo mantentzeko eta eguneroko bizitzan baliagarriak diren gaitasunak lantzeko.",
      },
      {
        q: "Non kontsultatu ordutegiak, kuotak eta hasteko aukerak?",
        a: "Jarri harremanetan taldearekin. Eskuragarritasuna, jarduera bakoitzaren baldintzak eta nola sartu azalduko dizugu.",
      },
    ],
  },
  cta: {
    eyebrow: "Zure lehen urratsa",
    title: "Kontatu zer lortu nahi duzun.",
    body: "Berriro entrenatzea, indarra irabaztea, zerbait berria ikastea edo erronka bat prestatzea. Entzun egiten dizugu eta Gorobelen zure lekua aurkitzen laguntzen dizugu.",
    primary: { label: "Entrenatu nahi dut", href: "/contacto" },
    secondary: { label: "WhatsAppez hitz egin", href: CLUB.whatsappHref },
  },
  breadcrumb: { home: "Hasiera", page: "Zer egiten dugu" },
};

export const activities: Localized<ActivitiesContent> = { es, eu };
