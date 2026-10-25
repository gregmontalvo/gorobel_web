import type { Localized } from "@/lib/i18n/config";

export interface ClubValue {
  title: string;
  body: string;
}

export interface ClubStoryBlock {
  title: string;
  body: string;
}

const es = {
  meta: {
    title: "El club: filosofía e historia de Gorobel en Laudio y Amurrio",
    description:
      "Conoce Gorobel, club de entrenamiento en Laudio (Llodio) y Amurrio, en Aiaraldea: nuestra filosofía, nuestra historia desde el 13 de mayo de 2019 y la comunidad que la hace posible.",
  },
  breadcrumb: { home: "Inicio", page: "El club" },
  hero: {
    label: "El club",
    title: "Entrenamos para vivir mejor. Crecemos como comunidad.",
    body: "Gorobel es un club de entrenamiento con dos centros, en Laudio y Amurrio. Promueve la salud, desarrolla su línea de competición y acerca el deporte a distintas edades y lugares.",
    imageAlt: "Comunidad del club Gorobel",
  },
  philosophy: {
    label: "Nuestra filosofía",
    title: "Tu salud, nuestro compromiso.",
    body: "Queremos que encuentres en el entrenamiento un tiempo para ti: moverte, desconectar, compartir y sentirte mejor. Con personas que te conocen y te ayudan a mantener el hábito, también cuando cambian tus circunstancias.",
    values: [
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
    ] as ClubValue[],
    cta: { label: "Conoce nuestra forma de entrenar", href: "/que-hacemos" },
  },
  history: {
    label: "Nuestra historia",
    title: "Desde 2019, una historia que construimos juntos.",
    body: "Gorobel comenzó su recorrido el 13 de mayo de 2019. Desde entonces, las personas que entrenan, el equipo que las acompaña y las experiencias compartidas han ido dando forma al proyecto.",
    imageAlt: "Entrenamiento en Gorobel",
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
    ] as ClubStoryBlock[],
    cta: { label: "Descubre la vida del club", href: "/comunidad" },
  },
  instagram: {
    label: "Síguenos",
    title: "Nuestro día a día",
    body: "Síguenos en Instagram para ver los entrenamientos y el ambiente del club.",
    imageAlt: "Perfil de Instagram de Gorobel",
  },
};

export type ClubContent = typeof es;

const eu: ClubContent = {
  meta: {
    title: "Kluba: Gorobelen filosofia eta historia Laudion eta Amurrion",
    description:
      "Ezagutu Gorobel, Laudioko (Llodio) eta Amurrioko entrenamendu kluba, Aiaraldean: gure filosofia, 2019ko maiatzaren 13tik egindako bidea eta hura posible egiten duen komunitatea.",
  },
  breadcrumb: { home: "Hasiera", page: "Kluba" },
  hero: {
    label: "Kluba",
    title: "Hobeto bizitzeko entrenatzen dugu. Komunitate gisa hazten gara.",
    body: "Gorobel entrenamendu kluba da, bi zentrorekin: Laudion eta Amurrion. Osasuna sustatzen du, lehiaketa-lerroa garatzen du eta kirola adin eta leku desberdinetara hurbiltzen du.",
    imageAlt: "Gorobel klubaren komunitatea",
  },
  philosophy: {
    label: "Gure filosofia",
    title: "Zure osasuna, gure konpromisoa.",
    body: "Entrenamenduan zuretzako denbora bat aurkitzea nahi dugu: mugitzeko, deskonektatzeko, partekatzeko eta hobeto sentitzeko. Zu ezagutzen zaituzten eta ohitura mantentzen laguntzen dizuten pertsonekin, baita zure egoera aldatzen denean ere.",
    values: [
      {
        title: "Entrenatu eta ikasi",
        body: "Saio egituratuak, taldearen orientazioa eta zure mailara egokitutako progresioa. Mugitzen ikastea eta egiten duzuna ulertzea entrenamenduaren parte da.",
      },
      {
        title: "Eroso sentitu",
        body: "Konplexurik gabe eta epaituko zaituzten beldurrik gabe entrenatu. Ahalegina, giro ona eta lehiaketa sana partekatzen ditugu, pertsona bakoitzaren helburuak eta erritmoa errespetatuz.",
      },
      {
        title: "Konstantzia eraiki",
        body: "Aurrerapena jarraitutasunarekin eraikitzen da. Zure bizitzan txertatzen den eta mantendu dezakezun entrenatzeko modu bat aurkitzen laguntzen dizugu.",
      },
      {
        title: "Komunitatea zaindu",
        body: "Lagunartea entrenamenduetan eta kanpoan erakusten da. Elkarri laguntza, elkartasuna eta lankidetza sustatzen ditugu, kirola jende gehiagorengana irits dadin.",
      },
    ],
    cta: { label: "Ezagutu gure entrenatzeko modua", href: "/que-hacemos" },
  },
  history: {
    label: "Gure historia",
    title: "2019tik, elkarrekin eraikitzen dugun historia.",
    body: "Gorobelek 2019ko maiatzaren 13an hasi zuen bere ibilbidea. Ordutik, entrenatzen duten pertsonek, haiekin dagoen taldeak eta partekatutako esperientziek eman diote forma proiektuari.",
    imageAlt: "Gorobeleko entrenamendua",
    blocks: [
      {
        title: "Topaleku bat Laudion eta Amurrion",
        body: "Gure zentroek adin, maila eta motibazio desberdineko pertsonak biltzen dituzte. Lehen klase bakoitza, berreskuratutako ohitura bakoitza eta partekatutako erronka bakoitza gure historiaren parte dira.",
      },
      {
        title: "Parte hartzen duen komunitatea",
        body: "Lehiaketek, campusek, erakustaldiek eta elkartasun-ekimenek ere esaten dute nor garen. Ikasteko, elkarlanean aritzeko eta entrenatzen partekatzen duguna gure eskualdeko kale eta mendietara eramateko aukerak dira.",
      },
      {
        title: "Eraikitzen jarraitzen dugun kluba",
        body: "Gaur egun, GOROBELek osasunerako entrenamendua, lehiaketa-taldeak eta kirola haurtzarora, adin helduagoetara eta landa-ingurunera hurbiltzeko proiektuak biltzen ditu. Laudion eta Amurrion ditugun sustraiekin eta Aiaraldeko bizitzan parte hartzeko borondatearekin jarraitzen dugu hazten.",
      },
    ],
    cta: { label: "Ezagutu klubaren bizitza", href: "/comunidad" },
  },
  instagram: {
    label: "Jarraitu gaitzazu",
    title: "Gure egunerokoa",
    body: "Jarraitu gaitzazu Instagramen, klubaren entrenamenduak eta giroa ikusteko.",
    imageAlt: "Gorobelen Instagram profila",
  },
};

export const club: Localized<ClubContent> = { es, eu };
