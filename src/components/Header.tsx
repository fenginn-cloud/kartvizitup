import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        {/* Logo → anasayfa linki */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="KartvizitUp" className="h-7" />
          <span className="sr-only">KartvizitUp</span>
        </Link>

        {/* Sağ menü */}
        <div className="flex items-center gap-3 text-sm">
          <Link href="/iletisim" className="opacity-90 hover:opacity-100">
            İletişim
          </Link>

          <Link
            href="/demo"
            className="rounded-lg px-4 py-2 bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
