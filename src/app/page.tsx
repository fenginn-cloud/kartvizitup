import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header /> {/* Header sabit olduğu için en üstte */}
      <main className="min-h-screen bg-black text-white grid place-items-center px-6 pt-16 py-16">
        <div className="max-w-2xl text-center space-y-6">
          
          {/* Başlık */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            KartvizitUp
          </h1>

          {/* Alt açıklama */}
          <p className="text-lg md:text-xl opacity-80">
            Tek sayfa, hızlı ve modern dijital kartvizit platformu.
            Paylaş, güncelle, müşterine tek link ver.
          </p>

          {/* Butonlar */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="mailto:hello@kartvizitup.com"
              className="rounded-lg px-5 py-3 bg-white text-black font-medium"
            >
              İletişime Geç
            </a>
            <a
              href="#"
              className="rounded-lg px-5 py-3 border border-white/30 hover:border-white/60"
            >
              Demo Çok Yakında
            </a>
          </div>

          {/* Öne çıkan faydalar */}
          <section
            id="features"
            className="mt-16 grid gap-6 md:grid-cols-3 text-left"
          >
            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="font-semibold mb-2">
                Tek Link, Sonsuz Güncelleme
              </h3>
              <p className="text-sm opacity-70">
                Kartvizitin değiştiğinde baskı masrafı yok; link hep aynı, içerik anında güncel.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="font-semibold mb-2">Paylaşması Kolay</h3>
              <p className="text-sm opacity-70">
                QR ile, WhatsApp’ta, e-posta imzasında veya web sitende tek tıkla paylaş.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="font-semibold mb-2">Analitik Hazır</h3>
              <p className="text-sm opacity-70">
                Kaç görüntülenme olmuş, hangi buton tıklanmış — metrikleri gör.
              </p>
            </div>
          </section>

          {/* Alt yazı */}
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} KartvizitUp
          </p>
        </div>
      </main>
    </>
  );
}
