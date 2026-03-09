import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, signToken } from "@/lib/auth";

const COOKIE_NAME = "gorobel_admin";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 días

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (!verifyPassword(password)) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  const token = signToken("admin");
  const expires = new Date(Date.now() + COOKIE_MAX_AGE * 1000);

  const response = NextResponse.json({ ok: true });
  response.headers.set(
    "Set-Cookie",
    `${COOKIE_NAME}=${token}; HttpOnly; SameSite=Strict; Path=/; Expires=${expires.toUTCString()}${process.env.NODE_ENV === "production" ? "; Secure" : ""}`
  );
  return response;
}
