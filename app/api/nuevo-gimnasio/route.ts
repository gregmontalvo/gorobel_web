import { NextRequest, NextResponse } from "next/server";
import { saveFounderLead } from "@/lib/kv";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const lead = await saveFounderLead({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone || "").trim(),
    });

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (error) {
    console.error("[nuevo-gimnasio]", error);
    return NextResponse.json({ error: "Error al guardar. Inténtalo de nuevo." }, { status: 500 });
  }
}
