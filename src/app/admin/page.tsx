import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export default async function AdminHome() {
  const session = await getSession();
  if (!session.isAdmin) redirect("/admin/login");

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-semibold">Yönetim Paneli</h1>

      <div className="mt-6 grid gap-3">
        <a
          href="/admin/businesses/hidden-garden"
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
        >
          Hidden Garden — Düzenle
        </a>
      </div>

      <form
        className="mt-8"
        action={async () => {
          "use server";
          await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/admin/logout`, { method: "POST" });
        }}
      >
        {/* server action yerine client fetch kullanıyorsan '/api/admin/logout' a POST atıp window.location='/' yapabilirsin */}
      </form>

      <button
        onClick={async () => {
          await fetch("/api/admin/logout", { method: "POST" });
          window.location.href = "/admin/login";
        }}
        className="mt-8 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15"
      >
        Çıkış Yap
      </button>
    </main>
  );
}
