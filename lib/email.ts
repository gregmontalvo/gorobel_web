const RESEND_URL = "https://api.resend.com/emails";
const DEFAULT_TO = "info@gorobelgara.com";

export interface MailConfig {
  apiKey: string;
  from: string;
  to: string[];
}

/** Null when the environment cannot send mail; the caller must say so instead of pretending. */
export function getMailConfig(): MailConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM?.trim();
  if (!apiKey || !from) return null;
  const to = (process.env.CONTACT_TO?.trim() || DEFAULT_TO)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  return { apiKey, from, to };
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Single line, safe for a header. */
export function oneLine(value: string): string {
  return value.replace(/[\r\n\u2028\u2029]+/g, " ").trim();
}

export class MailError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.status = status;
  }
}

/** Sends through Resend's REST API. Throws MailError when the provider does not accept the message. */
export async function sendMail(
  config: MailConfig,
  mail: { subject: string; text: string; html: string; replyTo?: string }
): Promise<void> {
  const response = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.from,
      to: config.to,
      subject: oneLine(mail.subject),
      text: mail.text,
      html: mail.html,
      ...(mail.replyTo ? { reply_to: mail.replyTo } : {}),
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new MailError(`Resend ${response.status}: ${detail.slice(0, 300)}`, response.status);
  }
}
