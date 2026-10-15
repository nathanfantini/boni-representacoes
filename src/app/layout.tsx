import type { Metadata, Viewport } from "next";
import { EB_Garamond, Manrope } from "next/font/google";
import "./globals.css";

// Cormorant Garamond foi trocada: o "ê" dela sai com o acento deslocado.
const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://bonirepresentacoes.com.br";

// Dados estruturados para o Google entender que é uma empresa local.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Boni Representações Têxteis",
  alternateName: "Boni Representações",
  description:
    "Representação têxtil em Brusque/SC: malhas, tecidos planos, elásticos e acabamentos tecnológicos para confecções.",
  url: SITE_URL,
  telephone: "+55-47-3252-1573",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Ewaldo Bruns, 140",
    addressLocality: "Brusque",
    addressRegion: "SC",
    postalCode: "88352-720",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/bonirepresentacoess/"],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "Boni Representações Têxteis | Malhas e tecidos para confecções",
  description:
    "Representação têxtil em Brusque/SC: malhas básicas e diferenciadas, texturas, fitness e wellness, tecidos planos nacionais, tactel UV e impermeável, elásticos e acabamentos tecnológicos para confecções.",
  openGraph: {
    title: "Boni Representações Têxteis",
    description:
      "Malhas e tecidos de alto padrão para a sua confecção.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Boni Representações Têxteis",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF8F3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
