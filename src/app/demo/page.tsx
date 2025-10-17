// src/app/demo/page.tsx
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Canlı Demo | KartvizitUp",
  description:
    "KartvizitUp ile tek linkten paylaşabileceğin dijital kartvizit örneği.",
  alternates: { canonical: "https://kartvizitup.com/demo" },
  openGraph: {
    title: "Canlı Demo | KartvizitUp",
    description:
      "KartvizitUp ile tek linkten paylaşabileceğin dijital kartvizit örneği.",
    url: "https://kartvizitup.com/demo",
    siteName: "KartvizitUp",
    images: ["/og.svg"], // istersen /demo-og.png ekleyip bunu değiştir
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canlı Demo | KartvizitUp",
    description:
      "KartvizitUp ile tek linkten paylaşabileceğin dijital kartvizit örneği.",
    images: ["/og.svg"],
  },
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahmut Engin",
  jobTitle: "Kurucu, KartvizitUp",
  url: "https://kartvizitup.com/demo",
  email: "hello@kartvizitup.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: [
    // "https://www.linkedin.com/in/…",
    // "https://x.com/…"
  ],
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-black text-white grid place-items-center px-6 py-20">
      {/* JSON-LD */}
      <JsonLd id="demo-person" data={PERSON_SCHEMA} />

      <section className="w-full max-w-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
          Canlı Demo
        </h1>
        <p className="text-center opacity-80 mt-2">
          KartvizitUp ile müşterine tek link ver. Aşağıdaki kart örnektir.
        </p>

        {/* Kart */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          {/* Üst bilgi */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/10 grid place-items-center">
              <span className="text-sm">ME</span>
            </div>
            <div>
              <div className="font-semibold">Mahmut Engin</div>
              <div className="text-sm opacity-70">Kurucu, KartvizitUp</div>
            </div>
          </div>

          {/* Aksiyon butonları */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            <a
              href="tel:+905000000000"
              className="rounded-lg border border-white/10 bg-white/5 py-2 text-center hover:bg-white/10 transition"
            >
              Ara
            </a>
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 py-2 text-center hover:bg-white/10 transition"
            >
              WhatsApp
            </a>
            <a
              href="https://kartvizitup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 py-2 text-center hover:bg-white/10 transition"
            >
              Web
            </a>
          </div>

          {/* Alt bilgi */}
          <div className="mt-5 space-y-1 text-sm">
            <div>📍 İstanbul, TR</div>
            <div>
              ✉️{" "}
              <a
                href="mailto:hello@kartvizitup.com"
                className="underline underline-offset-4 hover:opacity-100 opacity-80"
              >
                hello@kartvizitup.com
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold">Erken erişim için kaydol</h2>
          <p className="opacity-80 mt-1">
            Demo’yu beğendiysen, ürünü ilk deneyenlerden ol.
          </p>
          <a
            href="mailto:hello@kartvizitup.com?subject=KartvizitUp%20Erken%20Erişim"
            className="inline-block mt-4 rounded-lg px-5 py-3 border border-white/30 hover:border-white/60 transition"
          >
            İletişime Geç
          </a>
        </div>

        <p className="text-center text-xs opacity-60 mt-8">
          Bu sayfa bir örnek şablondur; gerçek projende bilgileri kendi verinle
          doldurursun.
        </p>
      </section>
    </main>
  );
}
