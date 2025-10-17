import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header /> {/* Header sabit olduğu için en üstte */}
      <main className="min-h-screen bg-black text-white grid place-items-center px-6 pt-16 py-16">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            KartvizitUp
          </h1>
          <p className="text-lg md:text-xl opacity-80">
            Tek sayfa, hızlı ve modern dijital kartvizit platformu.  
            Paylaş, güncelle, müşterine tek link ver.
          </p>

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

          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} KartvizitUp
          </p>
        </div>
      </main>
    </>
  );
}
