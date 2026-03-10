import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Vanshika Walia — Marketing Portfolio",
  description:
    "Data-driven marketer with expertise in performance marketing, brand strategy, and e-commerce. Master in Marketing at HEC Paris.",
  keywords: [
    "marketing portfolio",
    "performance marketing",
    "brand strategy",
    "HEC Paris",
    "digital marketing",
    "e-commerce",
  ],
  openGraph: {
    title: "Vanshika Walia — Marketing Portfolio",
    description:
      "Data-driven marketer with expertise in performance marketing, brand strategy, and e-commerce.",
    url: "https://vanshikawalia.com",
    siteName: "Vanshika Walia Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${cormorant.variable} font-sans bg-ivory text-charcoal antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
