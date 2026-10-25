import type { Localized } from "@/lib/i18n/config";

export interface HomeLink {
  label: string;
  href: string;
}

export interface TitledText {
  title: string;
  body: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}

/**
 * Home copy. The Spanish text is the reference Joseba sent on 22-oct-2026 (apartados 2-9);
 * the Basque text is a translation pending review by a native speaker.
 */
const es = {
  meta: {
    title: "Gorobel · Club de entrenamiento en Laudio (Llodio), Amurrio y Aiaraldea",
    description:
      "Club de entrenamiento en Laudio y Amurrio. Entrenamiento funcional, fuerza, barre, boxeo, kickboxing, Jiu Jitsu, programa +55 y actividades para niños y niñas. Entrena para vivir mejor.",
  },
  hero: {
    eyebrow: "GOROBEL · CLUB DE ENTRENAMIENTO",
    places: "Laudio · Amurrio · Aiaraldea",
    titleLine1: "Entrenamos para vivir mejor.",
    titleLine2: "Crecemos como comunidad.",
    intro:
      "Entrena, aprende y disfruta en un club donde puedes ser tú, empezar desde tu nivel y encontrar apoyo para avanzar.",
    body: "Te acompañamos para cuidar tu salud física y mental, construir hábitos y afrontar nuevos retos. Desde tu primera clase hasta la competición.",
    primary: { label: "Encuentra tu entrenamiento", href: "/que-hacemos" },
    secondary: { label: "Conoce el club", href: "/sobre-nosotros" },
    pillars: ["Salud y hábitos", "Equipos y competición", "Deporte para todas las edades"],
    scroll: "Descubre",
    imageAlt: "Entrenamiento en grupo en Gorobel",
    ticker: [
      "CrossTraining",
      "Functional Fitness",
      "Fuerza y movilidad",
      "Barre",
      "Endurance",
      "Boxeo",
      "Kickboxing",
      "Jiu Jitsu",
      "Recuperación deportiva",
      "+55",
      "Infancia y juventud",
    ],
  },
  philosophy: {
    label: "NUESTRA FILOSOFÍA",
    title: "Tu salud, nuestro compromiso.",
    intro:
      "Queremos que encuentres en el entrenamiento un tiempo para ti: moverte, desconectar, compartir y sentirte mejor. Con personas que te conocen y te ayudan a mantener el hábito, también cuando cambian tus circunstancias.",
    pillars: [
      {
        title: "Entrenar y aprender",
        body: "Sesiones estructuradas, orientación del equipo y una progresión adecuada a tu nivel. Aprender a moverte y entender lo que haces forma parte del entrenamiento.",
      },
      {
        title: "Sentirte a gusto",
        body: "Entrenar sin complejos ni miedo a sentirte juzgado. Compartimos esfuerzo, buen ambiente y una competición sana, respetando los objetivos y el ritmo de cada persona.",
      },
      {
        title: "Construir constancia",
        body: "El progreso se construye con continuidad. Te ayudamos a encontrar una forma de entrenar que encaje en tu vida y que puedas mantener.",
      },
      {
        title: "Cuidar la comunidad",
        body: "El compañerismo se demuestra en los entrenamientos y fuera de ellos. Promovemos el apoyo mutuo, la solidaridad y la colaboración para que el deporte llegue a más personas.",
      },
    ] as TitledText[],
    cta: { label: "Conoce nuestra forma de entrenar", href: "/que-hacemos" },
    imageAlt1: "Entrenamiento en comunidad en Gorobel",
    imageAlt2: "Clase dirigida en Gorobel",
    badgeValue: "2019",
    badgeLabel: "Gorobel echa a andar el 13 de mayo",
  },
  history: {
    label: "NUESTRA HISTORIA",
    title: "Desde 2019, una historia que construimos juntos.",
    intro:
      "Gorobel comenzó su recorrido el 13 de mayo de 2019. Desde entonces, las personas que entrenan, el equipo que las acompaña y las experiencias compartidas han ido dando forma al proyecto.",
    blocks: [
      {
        title: "Un lugar de encuentro en Laudio y Amurrio",
        body: "Nuestros centros reúnen a personas con distintas edades, niveles y motivaciones. Cada primera clase, cada hábito recuperado y cada reto compartido forman parte de nuestra historia.",
      },
      {
        title: "Una comunidad que participa",
        body: "Las competiciones, los campus, las exhibiciones y las iniciativas solidarias también cuentan quiénes somos. Son ocasiones para aprender, colaborar y llevar a las calles y montes de nuestra comarca lo que compartimos entrenando.",
      },
      {
        title: "El club que seguimos construyendo",
        body: "Hoy, GOROBEL reúne entrenamiento para la salud, equipos de competición y proyectos para acercar el deporte a la infancia, a edades más adultas y al medio rural. Seguimos creciendo con nuestras raíces en Laudio y Amurrio y con la voluntad de participar en la vida de Aiaraldea.",
      },
    ] as TitledText[],
    cta: { label: "Descubre la vida del club", href: "/comunidad" },
  },
  activities: {
    label: "QUÉ HACEMOS",
    title: "Hay muchas formas de moverse. Encuentra la tuya.",
    intro:
      "Tu motivación puede ser ganar fuerza, desconectar, aprender una disciplina o preparar una prueba. Te orientamos para encontrar una propuesta adecuada a ti.",
    items: [
      {
        title: "CrossTraining y Functional Fitness",
        body: "Entrenamiento que combina fuerza, gimnasia y resistencia. Aprende los movimientos y desarrolla tus capacidades con ejercicios adaptados a tu nivel.",
        href: "/que-hacemos#crosstraining-functional-fitness",
      },
      {
        title: "Fuerza y movilidad",
        body: "Trabaja capacidades que necesitas dentro y fuera del entrenamiento: mover cargas, desplazarte mejor y afrontar tu día con más confianza.",
        href: "/que-hacemos#fuerza-y-movilidad",
      },
      {
        title: "Barre",
        body: "Clases que combinan fuerza, control corporal y movilidad, con atención a la postura y a la ejecución de cada movimiento.",
        href: "/que-hacemos#barre",
      },
      {
        title: "Endurance y entrenamiento híbrido",
        body: "Desarrolla tu resistencia y combina carrera con ejercicios de fuerza. Entrena para mejorar tu condición física o preparar retos de carreras híbridas.",
        href: "/que-hacemos#endurance-e-hibrido",
      },
      {
        title: "Gorobel Fight · Deportes de contacto y artes marciales",
        body: "Boxeo, kickboxing y Jiu Jitsu. Aprende técnica y desarrolla tu condición física en un entorno de respeto, disciplina y compañerismo.",
        href: "/que-hacemos#gorobel-fight",
      },
      {
        title: "Recuperación deportiva",
        body: "Trabajo progresivo para recuperar capacidades y acompañar la vuelta al entrenamiento, atendiendo a la situación de cada persona.",
        href: "/que-hacemos#recuperacion-deportiva",
      },
      {
        title: "Fuerza y movilidad +55",
        body: "Clases dirigidas para mayores de 55 años. Entrena para mantenerte activo, ganar fuerza y cuidar tu autonomía, compartiendo el proceso con otras personas.",
        href: "/que-hacemos#fuerza-y-movilidad-55",
      },
      {
        title: "Equipos y competición",
        body: "Una línea del club dedicada a desarrollar equipos y preparar retos en CrossTraining, Functional Fitness, running, trail, OCR, boxeo, Jiu Jitsu, kickboxing, halterofilia y carreras híbridas.",
        href: "/que-hacemos#equipos-y-competicion",
      },
      {
        title: "Infancia y juventud",
        body: "Extraescolares en colaboración con las AMPAs y campus de verano, Semana Santa e invierno para edades de 6 a 14 años. Juego, movimiento y aprendizaje para descubrir el deporte y disfrutar en equipo.",
        href: "/que-hacemos#infancia-y-juventud",
      },
    ] as (TitledText & { href: string })[],
    primary: { label: "Consulta actividades y horarios", href: "/que-hacemos" },
    secondary: { label: "Infórmate sobre los equipos", href: "/que-hacemos#equipos-y-competicion" },
  },
  centers: {
    label: "DÓNDE ENTRENAMOS",
    title: "Dos centros. Un mismo club.",
    intro:
      "Gorobel Kirol Gunea Laudio y Gorobel Kirol Gunea Amurrio son nuestros centros de entrenamiento. Espacios donde aprender, compartir el esfuerzo y encontrarte con tu gente.",
    laudio: {
      name: "Gorobel Kirol Gunea Laudio",
      body: "Descubre las actividades y los espacios de entrenamiento del club en Laudio. Consulta horarios y encuentra una propuesta que encaje contigo.",
      cta: { label: "Ver Laudio", href: "/centros#laudio" },
      imageAlt: "Gorobel Kirol Gunea Laudio",
    },
    amurrio: {
      name: "Gorobel Kirol Gunea Amurrio",
      body: "Conoce las propuestas del club en Amurrio. Entrenamiento acompañado y un lugar donde dar continuidad a tus objetivos.",
      cta: { label: "Ver Amurrio", href: "/centros#amurrio" },
      imageAlt: "Gorobel Kirol Gunea Amurrio",
    },
    help: {
      title: "¿Necesitas orientación?",
      body: "Cuéntanos qué buscas y cuándo puedes entrenar. Te ayudamos a elegir.",
      cta: { label: "Habla con el equipo", href: "/contacto" },
    },
  },
  community: {
    label: "GOROBEL EN AIARALDEA",
    title: "El deporte también es una forma de encontrarnos.",
    intro:
      "Participamos en la vida de nuestra comarca para que entrenar, jugar y moverse formen parte del tiempo libre de más personas.",
    blocks: [
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
    ] as TitledText[],
    primary: { label: "Conoce nuestros proyectos", href: "/comunidad" },
    secondary: { label: "Propón una colaboración", href: "/comunidad#colaboraciones" },
  },
  faq: {
    label: "ANTES DE EMPEZAR",
    title: "Encuentra tu punto de partida.",
    items: [
      {
        q: "¿Qué es Gorobel?",
        a: "GOROBEL es un club de entrenamiento que promueve la salud, desarrolla su línea de competición y acerca el deporte a distintas edades y lugares. Nuestros centros son Gorobel Kirol Gunea Laudio y Amurrio.",
      },
      {
        q: "¿Necesito experiencia o estar en forma?",
        a: "Puedes empezar desde tu nivel. Hablaremos contigo para orientarte y adaptar el entrenamiento a tu punto de partida.",
      },
      {
        q: "¿Tengo que competir para formar parte?",
        a: "Puedes entrenar para cuidar tu salud, aprender o disfrutar. Si quieres competir, consulta las opciones de preparación y los equipos del club.",
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
      {
        q: "¿Colaboráis con colegios, asociaciones y pueblos?",
        a: "Sí. Cuéntanos tu propuesta, a quién va dirigida y qué espacios tenéis disponibles para estudiar cómo podemos colaborar.",
      },
    ] as FaqEntry[],
  },
  finalCta: {
    label: "TU PRIMER PASO",
    title: "Cuéntanos qué te gustaría conseguir.",
    body: "Volver a entrenar, ganar fuerza, aprender algo nuevo o preparar un reto. Te escuchamos y te ayudamos a encontrar tu lugar en Gorobel.",
    primary: { label: "Quiero entrenar", href: "/contacto" },
    whatsapp: "Hablar por WhatsApp",
  },
};

export type HomeContent = typeof es;

const eu: HomeContent = {
  meta: {
    title: "Gorobel · Entrenamendu kluba Laudion, Amurrion eta Aiaraldean",
    description:
      "Entrenamendu kluba Laudion eta Amurrion. Entrenamendu funtzionala, indarra, barre, boxeoa, kickboxing-a, Jiu Jitsua, +55 programa eta haur eta nerabeentzako jarduerak. Entrenatu hobeto bizitzeko.",
  },
  hero: {
    eyebrow: "GOROBEL · ENTRENAMENDU KLUBA",
    places: "Laudio · Amurrio · Aiaraldea",
    titleLine1: "Hobeto bizitzeko entrenatzen dugu.",
    titleLine2: "Komunitate gisa hazten gara.",
    intro:
      "Entrenatu, ikasi eta gozatu zu izan zaitezkeen klub batean: zure mailatik hasi eta aurrera egiteko babesa aurki dezakezu.",
    body: "Zure osasun fisikoa eta mentala zaintzen, ohiturak eraikitzen eta erronka berriei aurre egiten laguntzen dizugu. Zure lehen klasetik lehiaketara arte.",
    primary: { label: "Aurki ezazu zure entrenamendua", href: "/que-hacemos" },
    secondary: { label: "Ezagutu kluba", href: "/sobre-nosotros" },
    pillars: ["Osasuna eta ohiturak", "Taldeak eta lehiaketa", "Kirola adin guztietarako"],
    scroll: "Aurkitu",
    imageAlt: "Talde-entrenamendua Gorobelen",
    ticker: [
      "CrossTraining",
      "Functional Fitness",
      "Indarra eta mugikortasuna",
      "Barre",
      "Endurance",
      "Boxeoa",
      "Kickboxing-a",
      "Jiu Jitsua",
      "Kirol-errekuperazioa",
      "+55",
      "Haurtzaroa eta gaztaroa",
    ],
  },
  philosophy: {
    label: "GURE FILOSOFIA",
    title: "Zure osasuna, gure konpromisoa.",
    intro:
      "Entrenamenduan zuretzako denbora bat aurkitzea nahi dugu: mugitu, deskonektatu, partekatu eta hobeto sentitu. Zu ezagutzen zaituzten eta ohitura mantentzen laguntzen dizuten pertsonekin, baita zure egoera aldatzen denean ere.",
    pillars: [
      {
        title: "Entrenatu eta ikasi",
        body: "Saio egituratuak, taldearen orientazioa eta zure mailari egokitutako progresioa. Mugitzen ikastea eta egiten duzuna ulertzea entrenamenduaren parte da.",
      },
      {
        title: "Eroso sentitu",
        body: "Konplexurik gabe eta epaituko zaituzten beldurrik gabe entrenatu. Ahalegina, giro ona eta lehia osasuntsua partekatzen ditugu, pertsona bakoitzaren helburuak eta erritmoa errespetatuz.",
      },
      {
        title: "Konstantzia eraiki",
        body: "Aurrerapena jarraitutasunean eraikitzen da. Zure bizitzan txertatzen den eta mantendu dezakezun entrenatzeko modu bat aurkitzen laguntzen dizugu.",
      },
      {
        title: "Komunitatea zaindu",
        body: "Lagunartea entrenamenduetan eta kanpoan ere erakusten da. Elkarri laguntza, elkartasuna eta lankidetza sustatzen ditugu, kirola jende gehiagorengana irits dadin.",
      },
    ],
    cta: { label: "Ezagutu gure entrenatzeko modua", href: "/que-hacemos" },
    imageAlt1: "Komunitate-entrenamendua Gorobelen",
    imageAlt2: "Klase gidatua Gorobelen",
    badgeValue: "2019",
    badgeLabel: "Gorobelek maiatzaren 13an egin zuen lehen urratsa",
  },
  history: {
    label: "GURE HISTORIA",
    title: "2019tik, elkarrekin eraikitzen dugun historia.",
    intro:
      "Gorobelek bere ibilbidea 2019ko maiatzaren 13an hasi zuen. Ordutik, entrenatzen duten pertsonek, haiekin dabilen taldeak eta partekatutako esperientziek eman diote forma proiektuari.",
    blocks: [
      {
        title: "Laudion eta Amurrion elkartzeko leku bat",
        body: "Gure zentroetan adin, maila eta motibazio desberdinetako pertsonak biltzen dira. Lehen klase bakoitza, berreskuratutako ohitura bakoitza eta partekatutako erronka bakoitza gure historiaren parte dira.",
      },
      {
        title: "Parte hartzen duen komunitatea",
        body: "Lehiaketek, campusek, erakustaldiek eta ekimen solidarioek ere kontatzen dute nor garen. Entrenatzen partekatzen dugun hori ikasteko, elkarlanean aritzeko eta gure eskualdeko kaleetara eta mendietara eramateko aukerak dira.",
      },
      {
        title: "Eraikitzen jarraitzen dugun kluba",
        body: "Gaur egun, GOROBELek osasunerako entrenamendua, lehiaketa-taldeak eta kirola haurtzarora, adin helduagoetara eta landa-eremura hurbiltzeko proiektuak biltzen ditu. Hazten jarraitzen dugu, sustraiak Laudion eta Amurrion ditugula eta Aiaraldeko bizitzan parte hartzeko borondatearekin.",
      },
    ],
    cta: { label: "Ezagutu klubaren bizitza", href: "/comunidad" },
  },
  activities: {
    label: "ZER EGITEN DUGU",
    title: "Mugitzeko modu asko daude. Aurki ezazu zurea.",
    intro:
      "Zure motibazioa indarra irabaztea, deskonektatzea, diziplina bat ikastea edo proba bat prestatzea izan daiteke. Zuri egokitzen zaizun proposamen bat aurkitzen laguntzen dizugu.",
    items: [
      {
        title: "CrossTraining eta Functional Fitness",
        body: "Indarra, gimnasia eta erresistentzia uztartzen dituen entrenamendua. Ikasi mugimenduak eta garatu zure gaitasunak zure mailara egokitutako ariketekin.",
        href: "/que-hacemos#crosstraining-functional-fitness",
      },
      {
        title: "Indarra eta mugikortasuna",
        body: "Entrenamenduan eta kanpoan behar dituzun gaitasunak lantzen ditu: kargak mugitu, hobeto desplazatu eta zure eguna konfiantza handiagoz hasi.",
        href: "/que-hacemos#fuerza-y-movilidad",
      },
      {
        title: "Barre",
        body: "Indarra, gorputz-kontrola eta mugikortasuna uztartzen dituzten klaseak, jarrerari eta mugimendu bakoitzaren exekuzioari arreta emanez.",
        href: "/que-hacemos#barre",
      },
      {
        title: "Endurance eta entrenamendu hibridoa",
        body: "Garatu zure erresistentzia eta uztartu korrika indar-ariketekin. Entrenatu zure kondizio fisikoa hobetzeko edo lasterketa hibridoetako erronkak prestatzeko.",
        href: "/que-hacemos#endurance-e-hibrido",
      },
      {
        title: "Gorobel Fight · Kontaktuko kirolak eta arte martzialak",
        body: "Boxeoa, kickboxing-a eta Jiu Jitsua. Ikasi teknika eta garatu zure kondizio fisikoa errespetuaren, diziplinaren eta lagunartearen giroan.",
        href: "/que-hacemos#gorobel-fight",
      },
      {
        title: "Kirol-errekuperazioa",
        body: "Gaitasunak berreskuratzeko eta entrenamendura itzultzeko lan progresiboa, pertsona bakoitzaren egoera kontuan hartuta.",
        href: "/que-hacemos#recuperacion-deportiva",
      },
      {
        title: "Indarra eta mugikortasuna +55",
        body: "55 urtetik gorakoentzako klase gidatuak. Entrenatu aktibo mantentzeko, indarra irabazteko eta zure autonomia zaintzeko, prozesua beste pertsona batzuekin partekatuz.",
        href: "/que-hacemos#fuerza-y-movilidad-55",
      },
      {
        title: "Taldeak eta lehiaketa",
        body: "Klubaren lerro bat, CrossTraining, Functional Fitness, korrika, trail, OCR, boxeo, Jiu Jitsu, kickboxing, halterofilia eta lasterketa hibridoetako taldeak garatzeko eta erronkak prestatzeko.",
        href: "/que-hacemos#equipos-y-competicion",
      },
      {
        title: "Haurtzaroa eta gaztaroa",
        body: "Eskolaz kanpoko jarduerak guraso elkarteekin (AMPA) lankidetzan, eta 6-14 urteko haurrentzako uda, Aste Santu eta neguko campusak. Jolasa, mugimendua eta ikaskuntza, kirola ezagutzeko eta taldean gozatzeko.",
        href: "/que-hacemos#infancia-y-juventud",
      },
    ],
    primary: { label: "Kontsultatu jarduerak eta ordutegiak", href: "/que-hacemos" },
    secondary: { label: "Jakin taldeei buruz", href: "/que-hacemos#equipos-y-competicion" },
  },
  centers: {
    label: "NON ENTRENATZEN DUGUN",
    title: "Bi zentro. Klub bera.",
    intro:
      "Gorobel Kirol Gunea Laudio eta Gorobel Kirol Gunea Amurrio gure entrenamendu-zentroak dira. Ikasteko, ahalegina partekatzeko eta zure jendearekin topo egiteko guneak.",
    laudio: {
      name: "Gorobel Kirol Gunea Laudio",
      body: "Ezagutu klubaren entrenamendu-guneak eta jarduerak Laudion. Kontsultatu ordutegiak eta aurkitu zuri egokitzen zaizun proposamena.",
      cta: { label: "Ikusi Laudio", href: "/centros#laudio" },
      imageAlt: "Gorobel Kirol Gunea Laudio",
    },
    amurrio: {
      name: "Gorobel Kirol Gunea Amurrio",
      body: "Ezagutu klubaren proposamenak Amurrion. Entrenamendu lagundua eta zure helburuei jarraipena emateko lekua.",
      cta: { label: "Ikusi Amurrio", href: "/centros#amurrio" },
      imageAlt: "Gorobel Kirol Gunea Amurrio",
    },
    help: {
      title: "Orientazioa behar duzu?",
      body: "Kontatu iezaguzu zer bilatzen duzun eta noiz entrenatu dezakezun. Aukeratzen laguntzen dizugu.",
      cta: { label: "Hitz egin taldearekin", href: "/contacto" },
    },
  },
  community: {
    label: "GOROBEL AIARALDEAN",
    title: "Kirola elkartzeko modu bat ere bada.",
    intro:
      "Gure eskualdeko bizitzan parte hartzen dugu, entrenatzea, jolastea eta mugitzea jende gehiagoren aisialdiaren parte izan daitezen.",
    blocks: [
      {
        title: "Hezten duen kirola",
        body: "Guraso elkarteekin (AMPA) lankidetzan aritzen gara eta campusak antolatzen ditugu, mugimenduak ikasteko, elkarbizitzeko eta errespetua, lankidetza eta autonomia lantzeko balio dezan.",
      },
      {
        title: "Etxetik gertu dagoen kirola",
        body: "Inguruko eremuetako herri txikietan proposamenak bultzatzen ditugu, haien espazioak baliatuz entrenamendua landa-ingurunera hurbiltzeko.",
      },
      {
        title: "Biltzen duen kirola",
        body: "Ekitaldietan, erakustaldietan eta topaketetan lankidetzan aritzen gara, diziplinak ezagutzeko eta kirolaz komunitatean gozatzeko.",
      },
      {
        title: "Batzen duen kirola",
        body: "Elkartasunak eta boluntariotzak ere badute lekua Gorobelen. Ingurunearen ekimenetan parte hartzea eta laguntzea gure komunitatea zaintzeko beste modu bat da.",
      },
    ],
    primary: { label: "Ezagutu gure proiektuak", href: "/comunidad" },
    secondary: { label: "Proposatu lankidetza bat", href: "/comunidad#colaboraciones" },
  },
  faq: {
    label: "HASI AURRETIK",
    title: "Aurki ezazu zure abiapuntua.",
    items: [
      {
        q: "Zer da Gorobel?",
        a: "GOROBEL entrenamendu kluba da: osasuna sustatzen du, bere lehiaketa-lerroa garatzen du eta kirola adin eta toki desberdinetara hurbiltzen du. Gure zentroak Gorobel Kirol Gunea Laudio eta Amurrio dira.",
      },
      {
        q: "Esperientzia behar dut edo formaz egon behar dut?",
        a: "Zure mailatik hasi zaitezke. Zurekin hitz egingo dugu orientatzeko eta entrenamendua zure abiapuntura egokitzeko.",
      },
      {
        q: "Lehiatu behar dut kluban egoteko?",
        a: "Osasuna zaintzeko, ikasteko edo gozatzeko entrena dezakezu. Lehiatu nahi baduzu, kontsultatu prestakuntza-aukerak eta klubaren taldeak.",
      },
      {
        q: "Nolakoak dira klaseak?",
        a: "Saio gidatuak eta egituratuak dira. Taldeak ariketak azaltzen ditu, teknikan orientatzen zaitu eta jarduerari eta zure mailari egokitutako moldaketak proposatzen ditu.",
      },
      {
        q: "Ba al dago jarduerarik haur eta nerabeentzat?",
        a: "Bai. Eskolaz kanpoko jarduerak garatzen ditugu guraso elkarteekin (AMPA) lankidetzan, eta uda, Aste Santu eta neguko campusak antolatzen ditugu 6-14 urteko adinentzat.",
      },
      {
        q: "Ba al dago klaserik 55 urtetik gorakoentzat?",
        a: "Bai. Aktibo mantentzeko eta eguneroko bizitzan baliagarriak diren gaitasunak lantzeko indar- eta mugikortasun-proposamenak ditugu.",
      },
      {
        q: "Non kontsulta ditzaket ordutegiak, kuotak eta hasteko aukerak?",
        a: "Jarri harremanetan taldearekin. Eskuragarritasuna, jarduera bakoitzaren baldintzak eta nola sartu azalduko dizugu.",
      },
      {
        q: "Eskolekin, elkarteekin eta herriekin lankidetzan aritzen zarete?",
        a: "Bai. Kontatu iezaguzu zure proposamena, norentzat den eta zer espazio dituzuen, nola elkarlanean aritu gaitezkeen aztertzeko.",
      },
    ],
  },
  finalCta: {
    label: "ZURE LEHEN URRATSA",
    title: "Kontatu iezaguzu zer lortu nahi duzun.",
    body: "Berriro entrenatzea, indarra irabaztea, zerbait berria ikastea edo erronka bat prestatzea. Entzun egiten dizugu eta Gorobelen zure lekua aurkitzen laguntzen dizugu.",
    primary: { label: "Entrenatu nahi dut", href: "/contacto" },
    whatsapp: "Idatzi WhatsAppez",
  },
};

export const home: Localized<HomeContent> = { es, eu };
