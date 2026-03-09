import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gorobelgara.com"),
  title: {
    default: "Gorobel Kirol Gunea — Gimnasio en Llodio y Amurrio",
    template: "%s | Gorobel Kirol Gunea",
  },
  description:
    "Más que un gimnasio. CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR en Llodio y Amurrio. Pioneros del CrossFit en España desde 2010. Únete a nuestra comunidad.",
  keywords: [
    "gimnasio llodio",
    "gym llodio",
    "crossfit llodio",
    "gimnasio amurrio",
    "crossfit amurrio",
    "crosstraining llodio",
    "kickboxing llodio",
    "jiu jitsu llodio",
    "entrenamientos funcionales euskadi",
    "musculación llodio",
    "hyrox llodio",
    "hyrox país vasco",
    "gimnasio euskadi álava",
    "mejor gimnasio llodio",
    "clases boxeo llodio adultos",
    "sala musculación llodio 2026",
    "entrenamiento funcional llodio",
    "spartan race entrenamiento llodio",
    "crossfit para principiantes llodio",
    "gimnasio con comunidad llodio",
  ],
  authors: [{ name: "Gorobel Kirol Gunea" }],
  creator: "Gorobel Kirol Gunea",
  alternates: {
    canonical: "https://gorobelgara.com",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gorobelgara.com",
    siteName: "Gorobel Kirol Gunea",
    title: "Gorobel Kirol Gunea — Gimnasio en Llodio y Amurrio",
    description:
      "Más que un gimnasio. CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR. Pioneros del CrossFit en España desde 2010.",
    images: [
      {
        url: "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
        width: 1200,
        height: 630,
        alt: "Gorobel Kirol Gunea — Gimnasio en Llodio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorobel Kirol Gunea",
    description:
      "Más que un gimnasio. CrossTraining, Boxeo, Kickboxing, Jiu Jitsu y OCR en Llodio y Amurrio.",
    images: [
      "https://gorobelgara.com/wp-content/uploads/2025/06/ARG02501-scaled-e1749203039962.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
