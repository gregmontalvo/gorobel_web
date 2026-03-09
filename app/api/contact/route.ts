import { NextRequest, NextResponse } from "next/server";
import { saveContactLead } from "@/lib/kv";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const lead = await saveContactLead({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone || "").trim(),
      interest: String(interest || "").trim(),
      message: String(message).trim(),
    });

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json({ error: "Error al guardar. Inténtalo de nuevo." }, { status: 500 });
  }
}
