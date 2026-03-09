import { NextRequest, NextResponse } from "next/server";
import { getKbEntries, createKbEntry, updateKbEntry, deleteKbEntry } from "@/lib/kv";

export async function GET() {
  const entries = await getKbEntries();
  return NextResponse.json(entries);
}

export async function POST(request: NextRequest) {
  const { category, question, answer } = await request.json();
  if (!category || !question || !answer) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }
  const entry = await createKbEntry({ category, question, answer });
  return NextResponse.json(entry, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { id, ...data } = await request.json();
  if (!id) return NextResponse.json({ error: "id requerido" }, { status: 400 });
  const updated = await updateKbEntry(id, data);
  if (!updated) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: "id requerido" }, { status: 400 });
  await deleteKbEntry(id);
  return NextResponse.json({ ok: true });
}
