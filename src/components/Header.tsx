import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        {/* Logo ve anasayfa */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="KartvizitUp"
            width={100}
            height={28}
            priority
          />
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
