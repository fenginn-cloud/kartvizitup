import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* İstersen /public/logo.svg kullanmaya devam edebilirsin */}
          <img src="/logo.svg" alt="KartvizitUp" className="h-7" />
        </Link>

        <div className="flex items-center gap-3 text-sm">
          <Link
            href="mailto:hello@kartvizitup.com"
            className="opacity-90 hover:opacity-100"
          >
            İletişim
          </Link>

          {/* Marka renkli DEMO butonu */}
          <Link
            href="#"
            className="rounded-lg px-4 py-2 bg-brand text-black font-medium hover:bg-brand-900 hover:text-white transition"
          >
            Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
