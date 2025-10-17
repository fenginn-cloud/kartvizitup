"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/5 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        {/* Logo: / yerine Next.js Link kullan */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="KartvizitUp"
            width={112}
            height={28}
            priority
          />
        </Link>

        <div className="flex items-center gap-3 text-sm">
          <a
            href="mailto:hello@kartvizitup.com"
            className="opacity-80 hover:opacity-100"
          >
            İletişim
          </a>
          {/* Demo linkini sayfa içi anchor yapalım; / yerine #demo kuralı tetiklemez */}
          <a
            href="#demo"
            className="rounded-lg px-3 py-1.5 bg-white text-black font-medium hover:opacity-90"
          >
            Demo
          </a>
        </div>
      </nav>
    </header>
  );
}
