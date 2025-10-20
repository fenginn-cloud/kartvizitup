// src/app/admin/page.tsx
import Link from "next/link";

export default function AdminHome() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-semibold">Admin Paneli</h1>

      <div className="mt-6 space-y-3">
        {/* Örnek yönetim linki – kendi slug’larınla çoğaltabilirsin */}
        <Link
          href="/admin/businesses/hidden-garden/"
          className="inline-block rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
        >
          Hidden Garden’ı düzenle
        </Link>
      </div>
    </main>
  );
}
