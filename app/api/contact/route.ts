import { NextRequest, NextResponse } from "next/server";
import { saveContactLead } from "@/lib/kv";
import { escapeHtml, getMailConfig, oneLine, sendMail } from "@/lib/email";
import { clientIp, isRateLimited } from "@/lib/rate-limit";
import { contact, isActivityId } from "@/lib/content/contact";
import { isLocale, type Locale } from "@/lib/i18n/config";

const MAX = { name: 100, email: 254, phone: 30, message: 2000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s().-]{5,}$/;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

type ErrorCode = "invalid" | "rate_limited" | "not_configured" | "send_failed";

function fail(error: ErrorCode, status: number, extra?: Record<string, unknown>) {
  return NextResponse.json({ ok: false, error, ...extra }, { status });
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fail("invalid", 400);
    body = parsed as Record<string, unknown>;
  } catch {
    return fail("invalid", 400);
  }

  // The honeypot is invisible to people; whoever fills it is a bot, so pretend it worked.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(`contact:${clientIp(request)}`, RATE_LIMIT.max, RATE_LIMIT.windowMs)) {
    return fail("rate_limited", 429);
  }

  const locale: Locale = typeof body.locale === "string" && isLocale(body.locale) ? body.locale : "es";
  const name = text(body.name, MAX.name);
  const email = text(body.email, MAX.email).toLowerCase();
  const phone = text(body.phone, MAX.phone);
  const message = text(body.message, MAX.message);
  const interestId = text(body.interest, 40);

  const fields: string[] = [];
  if (name.length < 2) fields.push("name");
  if (!EMAIL_PATTERN.test(email)) fields.push("email");
  if (!PHONE_PATTERN.test(phone) || phone.replace(/\D/g, "").length < 6) fields.push("phone");
  if (message.length < 5) fields.push("message");
  if (interestId !== "" && !isActivityId(interestId)) fields.push("interest");
  if (body.privacy !== true) fields.push("privacy");
  if (fields.length > 0) return fail("invalid", 400, { fields });

  const mailConfig = getMailConfig();
  if (!mailConfig) {
    console.error("[contact] RESEND_API_KEY or CONTACT_FROM is not set: the message was not sent");
    return fail("not_configured", 503);
  }

  // The club reads its inbox in Castilian whatever language the visitor used.
  const activityLabel = isActivityId(interestId) ? contact.es.form.activities[interestId] : "Sin especificar";
  const languageLabel = locale === "eu" ? "euskera" : "castellano";
  const receivedAt = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });

  const rows: Array<[string, string]> = [
    ["Nombre", name],
    ["Email", email],
    ["Teléfono", phone],
    ["Interés", activityLabel],
    ["Idioma de la web", languageLabel],
    ["Recibido", receivedAt],
  ];
  const plain = [...rows.map(([label, value]) => `${label}: ${value}`), "", "Mensaje:", message].join("\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#111111">
<h2 style="margin:0 0 16px">Nuevo mensaje desde la web de Gorobel</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="color:#4D4D4D;vertical-align:top"><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`
    )
    .join("")}</table>
<h3 style="margin:20px 0 6px">Mensaje</h3>
<p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
<p style="color:#4D4D4D;font-size:13px;margin-top:24px">Puedes responder a este correo: la respuesta irá a ${escapeHtml(email)}.</p>
</div>`;

  // KV is only a backup: a missing or failing store must never block the notification.
  const backup = Promise.race([
    saveContactLead({ name, email, phone, interest: activityLabel, message }),
    new Promise((resolve) => setTimeout(resolve, 3000)),
  ]).catch((error) => console.warn("[contact] KV backup skipped:", error instanceof Error ? error.message : error));

  try {
    await sendMail(mailConfig, {
      subject: `Web Gorobel [${locale.toUpperCase()}] · ${activityLabel} · ${oneLine(name)}`,
      text: plain,
      html,
      replyTo: email,
    });
  } catch (error) {
    await backup;
    console.error("[contact] mail not delivered:", error instanceof Error ? error.message : error);
    return fail("send_failed", 502);
  }

  await backup;
  return NextResponse.json({ ok: true });
}
