// src/app/iletisim/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim — KartvizitUp",
  description: "KartvizitUp ile ilgili soruların için bize ulaş.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          İletişim
        </h1>
        <p className="text-white/70">
          Sorun, önerin ya da erken erişim talebin için bize ulaş.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:hello@kartvizitup.com"
            className="rounded-lg border border-white/20 px-4 py-3 text-center hover:bg-white hover:text-black transition"
          >
            E-posta
          </a>
          <a
            href="https://wa.me/905536860704" // telefonunu buraya gir (905xx...)
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-4 py-3 text-center hover:bg-white hover:text-black transition"
          >
            WhatsApp
          </a>
          <a
            href="tel:+905536860704" // telefonunu buraya gir
            className="rounded-lg border border-white/20 px-4 py-3 text-center hover:bg-white hover:text-black transition"
          >
            Ara
          </a>
        </div>

        <div className="space-y-2 text-sm text-white/60">
          <p>📍 İstanbul, TR</p>
          <p>✉️ hello@kartvizitup.com</p>
        </div>
      </div>
    </main>
  );
}
