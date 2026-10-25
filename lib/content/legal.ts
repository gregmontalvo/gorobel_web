import { CLUB } from "@/lib/content/common";
import type { Localized } from "@/lib/i18n/config";

const NIF = "28805784D";
const ADDRESS_ES = "Polígono Industrialdea, Pabellón 42, 01400 Laudio/Llodio (Álava)";
const ADDRESS_EU = "Polígono Industrialdea, 42. pabiloia, 01400 Laudio/Llodio (Araba)";

export interface LegalFact {
  label: string;
  value: string;
  /** Contact facts become tel:/mailto: links, resolved by the page. */
  kind?: "phone" | "email" | "plain";
}

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  facts?: LegalFact[];
  items?: string[];
  link?: { label: string; href: string };
}

export interface LegalPageContent {
  meta: { title: string; description: string };
  label: string;
  title: string;
  breadcrumb: string;
  sections: LegalSection[];
}

export interface LegalContent {
  home: string;
  back: string;
  privacy: LegalPageContent;
  notice: LegalPageContent;
  cookies: LegalPageContent;
}

const es: LegalContent = {
  home: "Inicio",
  back: "Volver al inicio",
  privacy: {
    meta: {
      title: "Política de privacidad",
      description:
        "Cómo trata Gorobel los datos personales que nos facilitas por el formulario de contacto, la lista de interesados y el asistente de chat, conforme al RGPD.",
    },
    label: "Información legal",
    title: "Política de privacidad",
    breadcrumb: "Política de privacidad",
    sections: [
      {
        heading: "Responsable del tratamiento",
        facts: [
          { label: "Denominación", value: "Gorobel Kirol Gunea (GOROBEL, club de entrenamiento)" },
          { label: "NIF", value: NIF },
          { label: "Dirección", value: ADDRESS_ES },
          { label: "Teléfono", value: CLUB.phone, kind: "phone" },
          { label: "Email", value: CLUB.email, kind: "email" },
        ],
      },
      {
        heading: "Qué datos tratamos y para qué",
        paragraphs: [
          "Tratamos la información que nos facilitas a través de esta web con las siguientes finalidades:",
        ],
        items: [
          "Formulario de contacto: tu nombre, email, teléfono, el interés que indiques y tu mensaje, para responder a tu consulta.",
          "Lista de interesados en los nuevos espacios de fuerza y barre de Laudio: tu nombre, email y teléfono, para avisarte cuando haya novedades.",
          "Asistente de chat: los mensajes que escribes se envían a un proveedor de inteligencia artificial para generar la respuesta. Nosotros no los guardamos. Te recomendamos no incluir datos personales sensibles en el chat.",
        ],
      },
      {
        heading: "Conservación de los datos",
        paragraphs: [
          "Conservaremos tus datos personales mientras no nos solicites su supresión y sean necesarios para la finalidad para la que los facilitaste.",
        ],
      },
      {
        heading: "Legitimación",
        paragraphs: [
          "La base legal para el tratamiento de estos datos es tu consentimiento, que puedes retirar en cualquier momento.",
        ],
      },
      {
        heading: "Destinatarios",
        paragraphs: [
          "Gorobel no vende, alquila ni cede a terceras personas los datos personales que facilitas, salvo obligación legal.",
          "Para que la web funcione contamos con proveedores técnicos (alojamiento de la web, almacenamiento de los formularios y asistente de chat) que tratan los datos por nuestra cuenta como encargados del tratamiento. Si alguno de ellos trata datos fuera del Espacio Económico Europeo, lo hace con las garantías que exige el RGPD.",
        ],
      },
      {
        heading: "Tus derechos",
        paragraphs: [
          "Puedes acceder a tus datos personales, rectificar los inexactos, solicitar su supresión, limitar u oponerte a su tratamiento y pedir su portabilidad. Para ejercer estos derechos escríbenos a info@gorobelgara.com indicando cuál de ellos quieres ejercer.",
          "Si consideras que tus datos no se han tratado correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "Esta web no utiliza cookies de seguimiento ni de publicidad. Encontrarás el detalle en la política de cookies.",
        ],
        link: { label: "Política de cookies", href: "/cookies" },
      },
    ],
  },
  notice: {
    meta: {
      title: "Aviso legal",
      description:
        "Aviso legal del sitio web de Gorobel, club de entrenamiento en Laudio y Amurrio: titular, condiciones de uso, propiedad intelectual y responsabilidad.",
    },
    label: "Información legal",
    title: "Aviso legal",
    breadcrumb: "Aviso legal",
    sections: [
      {
        heading: "Titular del sitio web",
        facts: [
          { label: "Nombre comercial", value: "Gorobel Kirol Gunea (GOROBEL, club de entrenamiento)" },
          { label: "NIF", value: NIF },
          { label: "Domicilio", value: ADDRESS_ES },
          { label: "Teléfono", value: CLUB.phone, kind: "phone" },
          { label: "Email", value: CLUB.email, kind: "email" },
          { label: "Sitio web", value: "gorobelgara.com" },
        ],
      },
      {
        heading: "Objeto",
        paragraphs: [
          "Este sitio web informa sobre GOROBEL, club de entrenamiento con centros en Laudio y Amurrio, y sobre sus actividades, y permite ponerse en contacto con el equipo. Acceder a la web y usarla supone aceptar este aviso legal.",
        ],
      },
      {
        heading: "Condiciones de uso",
        paragraphs: [
          "Te comprometes a usar la web de buena fe y de forma lícita, sin dañar su funcionamiento ni los derechos de otras personas, y a facilitar datos veraces en los formularios.",
        ],
      },
      {
        heading: "Propiedad intelectual e industrial",
        paragraphs: [
          "Los textos, imágenes, logotipos y demás contenidos de esta web pertenecen a Gorobel o se usan con la autorización de sus titulares. No se pueden reproducir, distribuir ni transformar sin autorización previa y por escrito.",
        ],
      },
      {
        heading: "Responsabilidad",
        paragraphs: [
          "La información de la web es orientativa. Las actividades, los horarios y las condiciones se confirman con el equipo del club, que puede modificarlas.",
          "Gorobel no se hace responsable de los contenidos de las páginas externas a las que puedan enlazar estas páginas ni garantiza que la web esté siempre disponible y libre de errores.",
        ],
      },
      {
        heading: "Protección de datos y cookies",
        paragraphs: [
          "El tratamiento de los datos personales y el uso de cookies se explican en la política de privacidad y en la política de cookies.",
        ],
        link: { label: "Política de privacidad", href: "/privacidad" },
      },
      {
        heading: "Legislación aplicable",
        paragraphs: [
          "Este aviso legal se rige por la legislación española. Cualquier controversia se resolverá ante los juzgados y tribunales que correspondan conforme a la normativa aplicable.",
        ],
      },
    ],
  },
  cookies: {
    meta: {
      title: "Política de cookies",
      description:
        "Cookies que utiliza el sitio web de Gorobel: solo una cookie técnica del acceso privado del equipo. No usamos cookies de seguimiento ni de publicidad.",
    },
    label: "Información legal",
    title: "Política de cookies",
    breadcrumb: "Cookies",
    sections: [
      {
        heading: "Qué son las cookies",
        paragraphs: [
          "Las cookies son pequeños archivos que una web guarda en tu navegador para recordar información, por ejemplo que has iniciado sesión.",
        ],
      },
      {
        heading: "La cookie que usa este sitio",
        paragraphs: [
          "Este sitio utiliza una única cookie técnica propia. Solo se crea cuando una persona del equipo de Gorobel inicia sesión en el panel de administración; quienes visitan la web no la reciben.",
        ],
        facts: [
          { label: "Nombre", value: "gorobel_admin" },
          { label: "Finalidad", value: "Mantener la sesión de acceso privado al panel de administración" },
          { label: "Tipo", value: "Propia, técnica y de solo lectura para el servidor (HttpOnly)" },
          { label: "Duración", value: "7 días" },
        ],
      },
      {
        heading: "Lo que no usamos",
        paragraphs: [
          "No utilizamos cookies analíticas, de publicidad ni de seguimiento, ni cookies de terceros. Los formularios y el asistente de chat tampoco usan cookies. Al ser la única cookie estrictamente necesaria, no mostramos un aviso para aceptarlas.",
        ],
      },
      {
        heading: "Cómo gestionarlas",
        paragraphs: [
          "Puedes consultar, bloquear o borrar las cookies desde la configuración de tu navegador. Bloquear la cookie técnica no afecta a la navegación por la web.",
        ],
      },
      {
        heading: "Cambios",
        paragraphs: [
          "Si en el futuro la web incorpora otras cookies, actualizaremos esta página y pediremos tu consentimiento cuando sea necesario.",
        ],
      },
    ],
  },
};

const eu: LegalContent = {
  home: "Hasiera",
  back: "Itzuli hasierara",
  privacy: {
    meta: {
      title: "Pribatutasun politika",
      description:
        "Gorobelek nola tratatzen dituen harremanetarako formularioan, interesdunen zerrendan eta txat laguntzailean ematen dizkiguzun datu pertsonalak, DBEOren arabera.",
    },
    label: "Lege informazioa",
    title: "Pribatutasun politika",
    breadcrumb: "Pribatutasun politika",
    sections: [
      {
        heading: "Tratamenduaren arduraduna",
        facts: [
          { label: "Izena", value: "Gorobel Kirol Gunea (GOROBEL, entrenamendu kluba)" },
          { label: "IFZ", value: NIF },
          { label: "Helbidea", value: ADDRESS_EU },
          { label: "Telefonoa", value: CLUB.phone, kind: "phone" },
          { label: "Emaila", value: CLUB.email, kind: "email" },
        ],
      },
      {
        heading: "Zer datu tratatzen ditugun eta zertarako",
        paragraphs: [
          "Web honen bidez ematen diguzun informazioa helburu hauekin tratatzen dugu:",
        ],
        items: [
          "Harremanetarako formularioa: zure izena, emaila, telefonoa, adierazten duzun interesa eta zure mezua, zure kontsultari erantzuteko.",
          "Laudioko indarra eta barre espazio berrien interesdunen zerrenda: zure izena, emaila eta telefonoa, berriak daudenean abisatzeko.",
          "Txat laguntzailea: idazten dituzun mezuak adimen artifizialeko hornitzaile batera bidaltzen dira, erantzuna sortzeko. Guk ez ditugu gordetzen. Txatean datu pertsonal sentikorrik ez sartzea gomendatzen dizugu.",
        ],
      },
      {
        heading: "Datuen kontserbazioa",
        paragraphs: [
          "Zure datu pertsonalak gordeko ditugu, zuk ezabatzeko eskatzen ez duzun bitartean eta eman zenituen helburuarako beharrezkoak diren bitartean.",
        ],
      },
      {
        heading: "Legitimazioa",
        paragraphs: [
          "Datu hauek tratatzeko lege-oinarria zure baimena da, eta noiznahi kendu dezakezu.",
        ],
      },
      {
        heading: "Hartzaileak",
        paragraphs: [
          "Gorobelek ez ditu saltzen, alokatzen edo hirugarrenei lagatzen ematen dizkiguzun datu pertsonalak, lege-betebeharra denean izan ezik.",
          "Webak funtziona dezan, hornitzaile teknikoak ditugu (webaren ostatua, formularioen biltegiratzea eta txat laguntzailea), eta haiek gure kontura tratatzen dituzte datuak, tratamendu-eragile gisa. Horietako batek Europako Esparru Ekonomikotik kanpo tratatzen baditu datuak, DBEOk eskatzen dituen bermeekin egiten du.",
        ],
      },
      {
        heading: "Zure eskubideak",
        paragraphs: [
          "Zure datu pertsonaletara sartu zaitezke, zehaztugabeak zuzendu, ezabatzea eskatu, tratamendua mugatu edo horren aurka egin eta eramangarritasuna eskatu. Eskubide hauek baliatzeko, idatzi iezaguzu info@gorobelgara.com helbidera, zein baliatu nahi duzun adieraziz.",
          "Zure datuak behar bezala tratatu ez direla uste baduzu, erreklamazioa aurkez dezakezu Datuak Babesteko Espainiako Agentziaren aurrean (aepd.es).",
        ],
      },
      {
        heading: "Cookieak",
        paragraphs: [
          "Web honek ez du jarraipen- edo publizitate-cookierik erabiltzen. Xehetasunak cookieen politikan aurkituko dituzu.",
        ],
        link: { label: "Cookieen politika", href: "/cookies" },
      },
    ],
  },
  notice: {
    meta: {
      title: "Lege oharra",
      description:
        "Gorobelen webgunearen lege oharra, Laudioko eta Amurrioko entrenamendu kluba: titularra, erabilera-baldintzak, jabetza intelektuala eta erantzukizuna.",
    },
    label: "Lege informazioa",
    title: "Lege oharra",
    breadcrumb: "Lege oharra",
    sections: [
      {
        heading: "Webgunearen titularra",
        facts: [
          { label: "Izen komertziala", value: "Gorobel Kirol Gunea (GOROBEL, entrenamendu kluba)" },
          { label: "IFZ", value: NIF },
          { label: "Egoitza", value: ADDRESS_EU },
          { label: "Telefonoa", value: CLUB.phone, kind: "phone" },
          { label: "Emaila", value: CLUB.email, kind: "email" },
          { label: "Webgunea", value: "gorobelgara.com" },
        ],
      },
      {
        heading: "Xedea",
        paragraphs: [
          "Webgune honek GOROBELi buruzko informazioa ematen du, Laudion eta Amurrion zentroak dituen entrenamendu klubari eta bere jarduerei buruzkoa, eta taldearekin harremanetan jartzeko aukera ematen du. Webera sartzeak eta erabiltzeak lege ohar hau onartzea dakar.",
        ],
      },
      {
        heading: "Erabilera-baldintzak",
        paragraphs: [
          "Webgunea fede onez eta legezko moduan erabiltzeko konpromisoa hartzen duzu, bere funtzionamendua edo beste pertsonen eskubideak kaltetu gabe, eta formularioetan datu egiazkoak emateko.",
        ],
      },
      {
        heading: "Jabetza intelektuala eta industriala",
        paragraphs: [
          "Web honetako testuak, irudiak, logotipoak eta gainerako edukiak Gorobelenak dira edo haien titularren baimenarekin erabiltzen dira. Ezin dira erreproduzitu, banatu edo eraldatu aldez aurretik eta idatziz baimenik gabe.",
        ],
      },
      {
        heading: "Erantzukizuna",
        paragraphs: [
          "Webeko informazioa orientagarria da. Jarduerak, ordutegiak eta baldintzak klubeko taldearekin baieztatzen dira, eta hark alda ditzake.",
          "Gorobel ez da erantzule orri hauek lotzen dituzten kanpoko orrien edukiez, eta ez du bermatzen weba beti erabilgarri egongo denik eta akatsik gabe egongo denik.",
        ],
      },
      {
        heading: "Datuen babesa eta cookieak",
        paragraphs: [
          "Datu pertsonalen tratamendua eta cookieen erabilera pribatutasun politikan eta cookieen politikan azaltzen dira.",
        ],
        link: { label: "Pribatutasun politika", href: "/privacidad" },
      },
      {
        heading: "Aplikatzekoa den legeria",
        paragraphs: [
          "Lege ohar hau Espainiako legeriaren mende dago. Edozein auzi aplikatzekoa den araudiaren arabera dagozkion epaitegien aurrean ebatziko da.",
        ],
      },
    ],
  },
  cookies: {
    meta: {
      title: "Cookieen politika",
      description:
        "Gorobelen webguneak erabiltzen dituen cookieak: taldearen sarbide pribatuko cookie tekniko bakarra. Ez dugu jarraipen- edo publizitate-cookierik erabiltzen.",
    },
    label: "Lege informazioa",
    title: "Cookieen politika",
    breadcrumb: "Cookieak",
    sections: [
      {
        heading: "Zer dira cookieak",
        paragraphs: [
          "Cookieak web batek zure nabigatzailean gordetzen dituen fitxategi txikiak dira, informazioa gogoratzeko, adibidez saioa hasi duzula.",
        ],
      },
      {
        heading: "Webgune honek erabiltzen duen cookiea",
        paragraphs: [
          "Webgune honek cookie tekniko propio bakarra erabiltzen du. Gorobeleko taldeko norbaitek administrazio-panelean saioa hasten duenean soilik sortzen da; weba bisitatzen dutenek ez dute jasotzen.",
        ],
        facts: [
          { label: "Izena", value: "gorobel_admin" },
          { label: "Helburua", value: "Administrazio-panelerako sarbide pribatuaren saioa mantentzea" },
          { label: "Mota", value: "Propioa, teknikoa eta zerbitzariarentzat soilik irakurgarria (HttpOnly)" },
          { label: "Iraupena", value: "7 egun" },
        ],
      },
      {
        heading: "Zer ez dugun erabiltzen",
        paragraphs: [
          "Ez dugu cookie analitikorik, publizitatekorik edo jarraipenekorik erabiltzen, ezta hirugarrenen cookierik ere. Formularioek eta txat laguntzaileak ere ez dute cookierik erabiltzen. Estu-estuan beharrezkoa den cookie bakarra denez, ez dugu onartzeko oharrik erakusten.",
        ],
      },
      {
        heading: "Nola kudeatu",
        paragraphs: [
          "Cookieak kontsultatu, blokeatu edo ezabatu ditzakezu zure nabigatzailearen ezarpenetatik. Cookie teknikoa blokeatzeak ez du webeko nabigazioan eraginik.",
        ],
      },
      {
        heading: "Aldaketak",
        paragraphs: [
          "Etorkizunean webak beste cookieren bat gehitzen badu, orri hau eguneratuko dugu eta, behar denean, zure baimena eskatuko dugu.",
        ],
      },
    ],
  },
};

export const legal: Localized<LegalContent> = { es, eu };
