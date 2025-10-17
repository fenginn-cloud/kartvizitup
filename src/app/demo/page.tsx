// src/app/demo/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Demo | KartvizitUp",
  description: "KartvizitUp dijital kartvizit önizlemesi",
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="mx-auto max-w-xl space-y-10">
        {/* Başlık */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Canlı Demo
          </h1>
          <p className="text-white/70">
            KartvizitUp ile müşterine tek link ver. Aşağıdaki kart örnektir.
          </p>
        </header>

        {/* Kart Önizlemesi */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/15">
              <Image
                src="https://avatars.githubusercontent.com/u/9919?v=4"
                alt="Kullanıcı"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Mahmut Engin</h2>
              <p className="text-white/60 text-sm">Kurucu, KartvizitUp</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="tel:+905555555555"
              className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-center hover:bg-white/15 transition"
            >
              📞 Ara
            </a>
            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-center hover:bg-white/15 transition"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://kartvizitup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-center hover:bg-white/15 transition"
            >
              🌐 Web
            </a>
          </div>

          <div className="mt-6 space-y-1 text-sm text-white/70">
            <p>📍 İstanbul, TR</p>
            <p>✉️ hello@kartvizitup.com</p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-3">
          <h3 className="text-xl font-semibold">Erken erişim için kaydol</h3>
          <p className="text-white/60">
            Demo’yu beğendiysen, ürünü ilk deneyenlerden ol.
          </p>
          <a
            href="mailto:hello@kartvizitup.com?subject=Erken%20Eri%C5%9Fim%20Talebi&body=Merhaba%2C%20KartvizitUp%27%C4%B1%20denemek%20istiyorum."
            className="inline-block rounded-lg bg-white text-black font-medium px-5 py-2 hover:bg-white/90 transition"
          >
            İletişime Geç
          </a>
        </section>

        <p className="mt-10 text-center text-xs text-white/50">
          Bu sayfa bir örnek şablondur. Gerçek projende butonları ve bilgileri
          kendi verinle dolduracaksın.
        </p>
      </div>
    </main>
  );
}
