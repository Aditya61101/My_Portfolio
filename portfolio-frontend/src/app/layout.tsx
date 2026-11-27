import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { profile, siteUrl } from "../data/profile";
import "./globals.css";
import "./interaction.css";
import "./work.css";

const heading = localFont({
  src: "../fonts/space-grotesk.woff2",
  weight: "300 700",
  variable: "--font-space-grotesk",
  display: "swap",
});
const body = localFont({
  src: "../fonts/inter.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});
const technical = localFont({
  src: "../fonts/jetbrains-mono.woff2",
  weight: "100 800",
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const title = `${profile.name} — Backend Engineer & AI Builder`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: profile.name,
    title,
    description: profile.description,
    images: [{
      url: "/portfolio-social.png",
      width: 1200,
      height: 630,
      alt: "Aditya Kumar, backend engineer and AI builder, beside a glowing computational cube.",
    }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${technical.variable}`}>
      <body className="min-w-0 bg-obsidian font-sans text-ink">{children}</body>
    </html>
  );
}
