import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const mono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Détox 21 jours",
  description: "Compteur de progression — 21 jours sans écrans récréatifs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
