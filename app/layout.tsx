import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: "Axiom Studio — Creative Web Designer",
  description:
    "Axiom Studio crafts immersive digital experiences with bold design, 3D animations, and cutting-edge visual effects.",
  keywords: ["web design", "3D animation", "creative portfolio", "UI/UX", "digital experiences"],
  authors: [{ name: "Axiom Studio" }],
  openGraph: {
    title: "Axiom Studio — Creative Web Designer",
    description: "Immersive digital experiences with bold design and 3D animations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f0f0f0] antialiased overflow-x-hidden">
        <LocaleProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <LanguageToggle />
        </LocaleProvider>
      </body>
    </html>
  );
}