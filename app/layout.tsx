import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nexaHeavy = localFont({
  src: "../public/Nexa-Heavy.ttf",
  variable: "--font-nexa-heavy",
  display: "swap",
});

const nexaLight = localFont({
  src: "../public/Nexa-ExtraLight.ttf",
  variable: "--font-nexa-light",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skyline - Track your flights, relive your journeys",
  description:
    "Skyline is a modern iOS app for tracking flights, managing travel documents, and reliving your journeys. Track your flights, view interactive maps, and organize your travel history.",
  keywords: [
    "flight tracking",
    "travel app",
    "iOS app",
    "flight management",
    "travel documents",
  ],
  authors: [{ name: "Boris Plesnicar" }],
  openGraph: {
    title: "Skyline - Track your flights, relive your journeys",
    description:
      "Skyline is a modern iOS app for tracking flights, managing travel documents, and reliving your journeys.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline - Track your flights, relive your journeys",
    description:
      "Skyline is a modern iOS app for tracking flights, managing travel documents, and reliving your journeys.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body
        className={`${nexaHeavy.variable} ${nexaLight.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
