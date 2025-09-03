import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Explorador de Colores | Punta Digital",
  description: "Descubre, explora y copia códigos de colores perfectos para tus proyectos. Herramienta interactiva con 60+ tonalidades organizadas por categorías, búsqueda rápida y códigos HEX/RGB.",
  keywords: ["colores", "paleta de colores", "hex", "rgb", "diseño", "frontend", "web design", "color picker", "tonalidades"],
  authors: [{ name: "Punta Digital" }],
  creator: "Punta Digital",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Explorador de Colores | Punta Digital",
    description: "Descubre, explora y copia códigos de colores perfectos para tus proyectos",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explorador de Colores | Punta Digital",
    description: "Descubre, explora y copia códigos de colores perfectos para tus proyectos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
