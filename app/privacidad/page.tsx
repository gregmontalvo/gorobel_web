import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Política de Privacidad — Gorobel Kirol Gunea",
  description:
    "Política de privacidad y protección de datos de Gorobel Kirol Gunea. Información sobre el tratamiento de datos personales conforme al RGPD.",
  alternates: { canonical: "https://gorobelgara.com/privacidad" },
  robots: { index: false, follow: false },
};

const schema = breadcrumbSchema([
  { name: "Inicio", url: "https://gorobelgara.com" },
  { name: "Política de Privacidad", url: "https://gorobelgara.com/privacidad" },
]);

export default function PrivacidadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="pt-36 pb-16 bg-[var(--color-charcoal)]">
        <div className="container-narrow">
          <p className="section-label !text-[var(--color-sage)]">Legal</p>
          <h1 className="text-headline font-display text-white">
            Política de Privacidad
          </h1>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-narrow">
          <div className="prose-content">

            <h2>Responsable del tratamiento</h2>
            <ul>
              <li><strong>Denominación:</strong> Gorobel Kirol Gunea</li>
              <li><strong>NIF:</strong> 28805784D</li>
              <li><strong>Dirección:</strong> Polígono Industrialdea, Pabellón 42, 01400 Llodio (Álava)</li>
              <li><strong>Teléfono:</strong> <a href="tel:+34667521542">667 521 542</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@gorobelgara.com">info@gorobelgara.com</a></li>
            </ul>

            <h2>Finalidad del tratamiento</h2>
            <p>
              Recogemos y tratamos la información que nos facilita con el fin de responder a las cuestiones
              que nos plantea a través de nuestros formularios, y de hacerle llegar información relacionada
              con la actividad de nuestra empresa que consideremos sea de su interés.
            </p>

            <h2>Conservación de datos</h2>
            <p>
              Conservaremos sus datos personales mientras usted no nos solicite su supresión.
            </p>

            <h2>Legitimación</h2>
            <p>
              La base legal para el tratamiento de estos datos está basada en su consentimiento,
              que puede retirar en cualquier momento.
            </p>

            <h2>Destinatarios</h2>
            <p>
              Gorobel Kirol Gunea no vende, alquila ni pone a disposición de terceras personas
              los datos personales que usted proporcione, salvo obligación legal.
            </p>

            <h2>Sus derechos</h2>
            <p>
              Tiene derecho a acceder a sus datos personales, rectificar los datos inexactos
              o solicitar su supresión cuando los datos ya no sean necesarios. Para ejercitar
              estos derechos deberá enviar un correo electrónico a{" "}
              <a href="mailto:info@gorobelgara.com">info@gorobelgara.com</a>, especificando
              cuál de estos derechos solicita sea satisfecho.
            </p>
            <p>
              Más información sobre sus derechos en la{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agencia Española de Protección de Datos
              </a>.
            </p>

            <h2>Uso de cookies</h2>
            <p>
              Este sitio web puede utilizar cookies técnicas necesarias para el funcionamiento
              de la web. No utilizamos cookies de seguimiento ni publicidad sin su consentimiento.
            </p>

          </div>

          <div className="mt-12">
            <Link href="/" className="btn-outline-dark">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
