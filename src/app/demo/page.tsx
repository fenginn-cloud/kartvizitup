export default function DemoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Demo</h1>
        <p className="opacity-80">
          Demo çok yakında. Erken erişim istiyorsan e-postanı bırak:
        </p>

        <form
          action="https://formspree.io/f/mayl-örnek" // kendi form servis adresinle değiştir
          method="POST"
          className="flex gap-3"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="ornek@mail.com"
            className="bg-transparent border border-white/20 rounded-lg px-4 py-3 w-full outline-none focus:border-white/50"
          />
          <button
            type="submit"
            className="rounded-lg px-5 py-3 bg-white text-black font-medium"
          >
            Gönder
          </button>
        </form>

        <p className="text-xs opacity-60">İstersen buraya demo ekran görüntüsü, GIF veya kısa video da ekleyebiliriz.</p>
      </div>
    </main>
  );
}
