"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setU] = useState("");
  const [password, setP] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) router.push("/admin");
    else setError("Kullanıcı adı veya şifre hatalı.");
  }

  return (
    <main className="min-h-screen grid place-items-center bg-black text-white px-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm space-y-4 rounded-xl border border-white/10 bg-white/5 p-6"
      >
        <h1 className="text-xl font-semibold">Admin Giriş</h1>
        <input
          className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2"
          placeholder="Kullanıcı adı"
          value={username}
          onChange={(e) => setU(e.target.value)}
        />
        <input
          className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2"
          placeholder="Şifre"
          type="password"
          value={password}
          onChange={(e) => setP(e.target.value)}
        />
        {error && <p className="text-sm text-red-300">{error}</p>}
        <button className="w-full rounded-md bg-white text-black py-2 hover:bg-white/90">
          Giriş Yap
        </button>
      </form>
    </main>
  );
}
