import type { Metadata } from "next";
import { Nunito, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "CompoBank — Primary School Compositions",
  description:
    "A collection of model compositions for Primary 1 to 6 students, with interactive vocabulary tooltips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative z-10">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
