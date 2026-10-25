import { NextRequest, NextResponse } from "next/server";
import { getActiveKbEntries, getSiteSettings, type KbEntry } from "@/lib/kv";
import { buildSystemPrompt, getChatReply, type ChatMessage } from "@/lib/claude";
import { chat } from "@/lib/content/chat";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { clientIp, isRateLimited } from "@/lib/rate-limit";

const MAX_MESSAGES = 20;
const MAX_CONTENT = 1000;
const RATE_LIMIT = { max: 30, windowMs: 10 * 60 * 1000 };

/** Only well-formed turns, ending on the visitor's question, starting with a visitor turn. */
function cleanMessages(raw: unknown): ChatMessage[] {
  if (!Array.isArray(raw)) return [];
  const turns: ChatMessage[] = [];
  for (const item of raw.slice(-MAX_MESSAGES)) {
    if (!item || typeof item !== "object") continue;
    const { role, content } = item as { role?: unknown; content?: unknown };
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") continue;
    const trimmed = content.trim().slice(0, MAX_CONTENT);
    if (trimmed) turns.push({ role, content: trimmed });
  }
  while (turns.length > 0 && turns[0].role !== "user") turns.shift();
  while (turns.length > 0 && turns[turns.length - 1].role !== "user") turns.pop();
  return turns;
}

export async function POST(request: NextRequest) {
  let body: { messages?: unknown; locale?: unknown } = {};
  try {
    body = await request.json();
  } catch {
    // handled below as an empty conversation
  }
  const locale: Locale = typeof body.locale === "string" && isLocale(body.locale) ? body.locale : "es";
  const t = chat[locale];

  const messages = cleanMessages(body.messages);
  if (messages.length === 0) {
    return NextResponse.json({ error: t.noReply }, { status: 400 });
  }

  if (isRateLimited(`chat:${clientIp(request)}`, RATE_LIMIT.max, RATE_LIMIT.windowMs)) {
    return NextResponse.json({ error: t.tooMany }, { status: 429 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("[chat] ANTHROPIC_API_KEY is not set");
    return NextResponse.json({ error: t.unavailable }, { status: 503 });
  }

  try {
    // Knowledge base and settings live in KV; without them the assistant still answers from its base prompt.
    const [entries, settings] = await Promise.all([
      getActiveKbEntries().catch((): KbEntry[] => []),
      getSiteSettings(),
    ]);

    const reply = await getChatReply(messages, buildSystemPrompt(entries, settings, locale));
    if (!reply) return NextResponse.json({ error: t.noReply }, { status: 502 });
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[chat]", error);
    return NextResponse.json({ error: t.error }, { status: 500 });
  }
}
