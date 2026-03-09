import { NextRequest, NextResponse } from "next/server";
import { getContactLeads, getFounderLeads } from "@/lib/kv";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? "contact";
  if (type === "founders") {
    const leads = await getFounderLeads();
    return NextResponse.json(leads);
  }
  const leads = await getContactLeads();
  return NextResponse.json(leads);
}
