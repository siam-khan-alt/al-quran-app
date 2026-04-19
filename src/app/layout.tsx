import type { Metadata } from "next";
import { Amiri,  Lateef } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const lateef = Lateef({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-lateef",
});

export const metadata: Metadata = {
  title: "Al-Quran App",
  description: "Read Holy Quran with Bengali Translation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${amiri.variable} ${lateef.variable} `}
    >
      <body className="min-h-full flex flex-col bg-accent text-text-main transition-colors duration-300">{children}</body>
    </html>
  );
}
