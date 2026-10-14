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

export const metadata: Metadata = {
  title: "Boni Representações Têxteis | Malhas e tecidos para confecções",
  description:
    "Representação têxtil em Brusque/SC: malhas básicas e diferenciadas, texturas, fitness e wellness, tecidos planos nacionais, tactel UV e impermeável, elásticos e acabamentos tecnológicos para confecções.",
  openGraph: {
    title: "Boni Representações Têxteis",
    description:
      "Malhas e tecidos de alto padrão para a sua confecção.",
    type: "website",
    locale: "pt_BR",
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
      <body>{children}</body>
    </html>
  );
}
