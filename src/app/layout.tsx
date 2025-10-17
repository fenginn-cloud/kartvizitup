// src/app/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KartvizitUp",
  description: "Tek sayfa, hızlı ve modern dijital kartvizit platformu.",
  metadataBase: new URL("https://kartvizitup.com"),
  openGraph: {
    title: "KartvizitUp",
    description: "Tek sayfa, hızlı ve modern dijital kartvizit platformu.",
    url: "https://kartvizitup.com",
    siteName: "KartvizitUp",
    images: ["/og.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KartvizitUp",
    description: "Tek sayfa, hızlı ve modern dijital kartvizit platformu.",
    images: ["/og.svg"],
    creator: "@kartvizitup",
  },
  alternates: {
    canonical: "https://kartvizitup.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
