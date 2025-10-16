import "./globals.css";
import type { Metadata } from "next";
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
    images: ["/og.png"],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
