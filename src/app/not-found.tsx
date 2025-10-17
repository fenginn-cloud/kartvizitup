// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center bg-black text-white px-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Sayfa bulunamadı</h1>
        <p className="opacity-70">
          Aradığın sayfa taşınmış veya hiç var olmamış olabilir.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg border border-white/30 px-4 py-2 hover:border-white/60 transition"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}
