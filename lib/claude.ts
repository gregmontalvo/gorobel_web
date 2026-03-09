import Anthropic from "@anthropic-ai/sdk";
import type { KbEntry, SiteSettings } from "./kv";

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export function buildSystemPrompt(entries: KbEntry[], settings: SiteSettings): string {
  const phone = settings.phone || "667 521 542";

  const kbText =
    entries.length > 0
      ? entries
          .map((e) => `[${e.category}]\nPregunta: ${e.question}\nRespuesta: ${e.answer}`)
          .join("\n\n")
      : "No hay información específica configurada aún. Informa al usuario que contacte directamente con el club.";

  const scheduleText = Object.entries(settings.schedule || {})
    .map(([act, hours]) => `- ${act}: ${hours}`)
    .join("\n");

  const pricingText = Object.entries(settings.pricing || {})
    .map(([plan, price]) => `- ${plan}: ${price}`)
    .join("\n");

  return `Eres el asistente virtual de Gorobel Kirol Gunea, un club deportivo en Llodio y Amurrio (País Vasco, España).
Tu nombre es "Gorobot". Eres amable, directo y respondes siempre en español.

REGLAS IMPORTANTES:
- Responde ÚNICAMENTE con la información que te proporciono a continuación.
- Si no tienes la información exacta, di: "Para más detalles te recomiendo contactar con nosotros por WhatsApp al ${phone} o llamarnos directamente."
- No inventes horarios, precios ni información que no esté aquí.
- Sé conciso (máximo 3-4 frases por respuesta).
- Usa un tono cercano y motivador, propio de un club deportivo de comunidad.

━━━ HORARIOS ━━━
${scheduleText || "Consultar horarios directamente con el club."}

━━━ PRECIOS ━━━
${pricingText || "Consultar precios directamente con el club."}

━━━ BASE DE CONOCIMIENTO ━━━
${kbText}

━━━ CONTACTO ━━━
Teléfono/WhatsApp: ${phone}
Email: ${settings.email || "gorobelgara@gmail.com"}
Dirección principal: Polígono Industrialdea, Pabellón 42, Llodio (Álava)`;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function getChatReply(
  messages: ChatMessage[],
  systemPrompt: string
): Promise<string> {
  const response = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    system: systemPrompt,
    messages,
  });

  const block = response.content[0];
  if (block.type !== "text") return "Lo siento, ha ocurrido un error. Inténtalo de nuevo.";
  return block.text;
}
