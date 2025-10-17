// src/app/page.tsx
import Link from "next/link";
import { BUSINESSES } from "@/data/businesses";

export default function HomePage() {
  const items = Object.values(BUSINESSES);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      {/* Hero */}
      <section className="mx-auto max-w-4xl text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          KartvizitUp
        </h1>
        <p className="text-white/70">
          Tek link ile modern dijital kartvizit ve mini işletme sayfaları.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/demo"
            className="rounded-lg px-4 py-2 bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Canlı Demo
          </Link>
          <Link
            href="/iletisim"
            className="rounded-lg px-4 py-2 border border-white/30 hover:border-white/60 transition"
          >
            İletişim
          </Link>
        </div>
      </section>

      {/* İşletme grid’i */}
      <section className="mx-auto max-w-5xl mt-12">
        <h2 className="text-xl font-semibold mb-4">Öne çıkan işletmeler</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((biz) => (
            <Link
              key={biz.slug}
              href={`/${biz.slug}`}
              className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold group-hover:underline">
                    {biz.name}
                  </h3>
                  {biz.tagline && (
                    <p className="text-sm text-white/70">{biz.tagline}</p>
                  )}
                </div>
              </div>

              {biz.address && (
                <p className="mt-3 text-xs text-white/60">📍 {biz.address}</p>
              )}

              <div className="mt-4 text-sm underline underline-offset-4 opacity-90 group-hover:opacity-100">
                Profili aç →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
