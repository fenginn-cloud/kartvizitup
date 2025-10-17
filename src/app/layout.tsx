// src/app/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";

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
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KartvizitUp",
  url: "https://kartvizitup.com",
  logo: "https://kartvizitup.com/logo.svg",
  sameAs: [
    // Sosyal hesap eklemek istersen:
    // "https://www.linkedin.com/company/kartvizitup",
    // "https://twitter.com/kartvizitup"
  ],
  contactPoint: [{
    "@type": "ContactPoint",
    email: "hello@kartvizitup.com",
    contactType: "customer support",
    availableLanguage: ["tr","en"]
  }]
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KartvizitUp",
  url: "https://kartvizitup.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://kartvizitup.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {/* JSON-LD */}
        <JsonLd id="org-schema" data={ORG_SCHEMA} />
        <JsonLd id="website-schema" data={WEBSITE_SCHEMA} />

        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
