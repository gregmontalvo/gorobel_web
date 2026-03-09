import { NextResponse } from "next/server";

const COOKIE_NAME = "gorobel_admin";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.headers.set(
    "Set-Cookie",
    `${COOKIE_NAME}=; HttpOnly; SameSite=Strict; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
  );
  return response;
}
