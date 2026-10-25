import type { Localized } from "@/lib/i18n/config";

const es = {
  name: "Gorobot",
  subtitle: "Asistente de Gorobel",
  welcome:
    "¡Hola! Soy Gorobot, el asistente del club Gorobel. Cuéntame qué te gustaría conseguir y te oriento sobre entrenamientos, centros, infancia y juventud o equipos. Para horarios y cuotas te pondré en contacto con el equipo.",
  placeholder: "Escribe tu pregunta…",
  typing: "Escribiendo…",
  send: "Enviar",
  open: "Abrir chat",
  close: "Cerrar chat",
  noReply: "Lo siento, no he podido procesar tu pregunta.",
  error: "Ha ocurrido un error. Inténtalo de nuevo o escribe al equipo por WhatsApp (667 521 542).",
  unavailable:
    "Ahora mismo no puedo responder. Escribe al equipo por WhatsApp o llama al 667 521 542, o usa la página de contacto.",
  tooMany: "Estás escribiendo muy rápido. Espera un momento o escribe al equipo por WhatsApp (667 521 542).",
};

export type ChatContent = typeof es;

const eu: ChatContent = {
  name: "Gorobot",
  subtitle: "Gorobeleko laguntzailea",
  welcome:
    "Kaixo! Gorobot naiz, Gorobel klubaren laguntzailea. Kontatu iezaguzu zer lortu nahi duzun, eta entrenamenduei, zentroei, haurtzaroa eta gaztaroari edo taldeei buruz orientatuko zaitut. Ordutegiak eta kuotak jakiteko, taldearekin jarriko zaitut harremanetan.",
  placeholder: "Idatzi zure galdera…",
  typing: "Idazten…",
  send: "Bidali",
  open: "Ireki txata",
  close: "Itxi txata",
  noReply: "Barkatu, ezin izan dut zure galdera prozesatu.",
  error: "Errore bat gertatu da. Saiatu berriro edo idatzi taldeari WhatsApp bidez (667 521 542).",
  unavailable:
    "Orain ezin dut erantzun. Idatzi taldeari WhatsApp bidez edo deitu 667 521 542 telefonora, edo erabili kontaktu orria.",
  tooMany: "Azkarregi ari zara idazten. Itxaron une bat edo idatzi taldeari WhatsApp bidez (667 521 542).",
};

export const chat: Localized<ChatContent> = { es, eu };
