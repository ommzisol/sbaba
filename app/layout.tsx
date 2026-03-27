import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Steel Baba | Latest Price | Metal | Indian and Global Market",
  description: "Steel Baba platform for latest prices, metal updates, and Indian and global market visibility."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
