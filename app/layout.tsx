import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Skyline - Track your flights, relive your journeys",
  description: "Skyline is a modern iOS app for tracking flights, managing travel documents, and reliving your journeys. Track your flights, view interactive maps, and organize your travel history.",
  keywords: ["flight tracking", "travel app", "iOS app", "flight management", "travel documents"],
  authors: [{ name: "Boris Plesnicar" }],
  openGraph: {
    title: "Skyline - Track your flights, relive your journeys",
    description: "Skyline is a modern iOS app for tracking flights, managing travel documents, and reliving your journeys.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline - Track your flights, relive your journeys",
    description: "Skyline is a modern iOS app for tracking flights, managing travel documents, and reliving your journeys.",
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
        className={`${montserrat.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
