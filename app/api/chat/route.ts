import { NextRequest, NextResponse } from "next/server";
import { getActiveKbEntries, getSiteSettings } from "@/lib/kv";
import { buildSystemPrompt, getChatReply, type ChatMessage } from "@/lib/claude";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json() as { messages: ChatMessage[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages required" }, { status: 400 });
    }

    const [entries, settings] = await Promise.all([
      getActiveKbEntries(),
      getSiteSettings(),
    ]);

    const systemPrompt = buildSystemPrompt(entries, settings);
    const reply = await getChatReply(messages, systemPrompt);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[chat]", error);
    return NextResponse.json(
      { error: "Error al procesar la respuesta. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}
