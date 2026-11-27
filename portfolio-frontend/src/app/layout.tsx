import type { Metadata } from "next";
import type { ReactNode } from "react";
import { profile } from "../data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.name,
  description: profile.description,
  icons: { icon: "/adi.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
