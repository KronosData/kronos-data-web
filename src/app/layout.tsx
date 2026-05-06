import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kronos Data | Ingeniería de Eficiencia y Consultoría Administrativa",
  description:
    "Kronos Data ofrece soluciones de ingeniería de eficiencia y consultoría administrativa para optimizar procesos y maximizar resultados en tu empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-slate-200">
        {children}
        <WhatsAppButton />
        {/* HubSpot Embed Code */}
        <Script
          id="hs-script-loader"
          src="//js.hs-scripts.com/51436991.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
