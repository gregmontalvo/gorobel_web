const DEFAULT_URL = "https://www.badgie.es/api/public/web-lead";
const GOROBEL_SCHOOL_ID = "e2c2df9b-6ace-4b67-884b-a1d7acf36a5a";

export interface WebLead {
  name: string;
  email: string;
  phone: string;
  message: string;
  interest: string;
  locale: string;
}

/** Null when the site has no Badgie token; the caller keeps working through email alone. */
export function getBadgieLeadConfig(): { url: string; schoolId: string; token: string } | null {
  const token = process.env.BADGIE_WEB_LEAD_TOKEN?.trim();
  if (!token) return null;
  return {
    url: process.env.BADGIE_WEB_LEAD_URL?.trim() || DEFAULT_URL,
    schoolId: process.env.BADGIE_SCHOOL_ID?.trim() || GOROBEL_SCHOOL_ID,
    token,
  };
}

/** Sends the contact form to the club's Badgie account. Throws when Badgie does not accept it. */
export async function sendLeadToBadgie(
  config: NonNullable<ReturnType<typeof getBadgieLeadConfig>>,
  lead: WebLead
): Promise<void> {
  const response = await fetch(config.url, {
    method: "POST",
    headers: { Authorization: `Bearer ${config.token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      school_id: config.schoolId,
      nombre: lead.name,
      email: lead.email,
      telefono: lead.phone,
      mensaje: lead.message,
      interes: lead.interest,
      form: "web-contacto",
      locale: lead.locale,
    }),
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Badgie ${response.status}: ${detail.slice(0, 200)}`);
  }
}
