import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "gorobel_admin";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 días

function getSecret(): string {
  const s = process.env.ADMIN_SECRET;
  if (!s) throw new Error("ADMIN_SECRET env var not set");
  return s;
}

export function signToken(payload: string): string {
  const hmac = createHmac("sha256", getSecret());
  hmac.update(payload);
  const sig = hmac.digest("hex");
  return `${payload}.${sig}`;
}

export function verifyToken(token: string): string | null {
  const lastDot = token.lastIndexOf(".");
  if (lastDot === -1) return null;
  const payload = token.slice(0, lastDot);
  const sig = token.slice(lastDot + 1);
  const expected = createHmac("sha256", getSecret()).update(payload).digest("hex");
  try {
    if (!timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expected, "hex"))) return null;
  } catch {
    return null;
  }
  return payload;
}

export function verifyPassword(input: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  try {
    return timingSafeEqual(Buffer.from(input), Buffer.from(adminPassword));
  } catch {
    return false;
  }
}

export async function getAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const payload = verifyToken(token);
  return payload === "admin";
}

export function setAdminCookie(response: Response): Response {
  const token = signToken("admin");
  const expires = new Date(Date.now() + COOKIE_MAX_AGE * 1000);
  response.headers.append(
    "Set-Cookie",
    `${COOKIE_NAME}=${token}; HttpOnly; SameSite=Strict; Path=/; Expires=${expires.toUTCString()}; ${process.env.NODE_ENV === "production" ? "Secure;" : ""}`
  );
  return response;
}

export function clearAdminCookie(response: Response): Response {
  response.headers.append(
    "Set-Cookie",
    `${COOKIE_NAME}=; HttpOnly; SameSite=Strict; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
  );
  return response;
}
