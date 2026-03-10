import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "gorobel_admin";

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

async function verifyToken(token: string, secret: string): Promise<string | null> {
  const lastDot = token.lastIndexOf(".");
  if (lastDot === -1) return null;
  const payload = token.slice(0, lastDot);
  const sig = token.slice(lastDot + 1);

  try {
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );
    const sigBytes = hexToBytes(sig).buffer as ArrayBuffer;
    const payloadBytes = new TextEncoder().encode(payload).buffer as ArrayBuffer;
    const valid = await crypto.subtle.verify("HMAC", key, sigBytes, payloadBytes);
    return valid ? payload : null;
  } catch {
    return null;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login";
  const isAdminApi = pathname.startsWith("/api/admin") && !pathname.startsWith("/api/admin/login");

  if ((isAdminRoute && !isLoginPage) || isAdminApi) {
    const secret = process.env.ADMIN_SECRET ?? "";
    const token = request.cookies.get(COOKIE_NAME)?.value;
    const payload = token ? await verifyToken(token, secret) : null;

    if (payload !== "admin") {
      if (isAdminApi) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
