// src/app/api/admin/login/route.ts
import { NextResponse } from "next/server";

// Route her istekte sunucuda çalışsın (cache'e takılmasın)
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  // ENV'leri al
  const USER = process.env.ADMIN_USERNAME;
  const PASS = process.env.ADMIN_PASSWORD;

  // ENV yoksa açıkça 500 dön (UI'da "Sunucu hatası" görürsün; bu durumda ENV yanlış/eksik demektir)
  if (!USER || !PASS) {
    console.log("DEBUG ENV MISSING:", { USER: !!USER, PASS: !!PASS });
    return NextResponse.json(
      { success: false, error: "ENV not set on server" },
      { status: 500 }
    );
  }

  // İstekten gelen değerleri al ve boşluk kırpmayı garanti et
  const { username, password } = await req.json();
  const u = (username ?? "").toString().trim();
  const p = (password ?? "").toString().trim();

  // Debug: maskeli log (parola uzunluğu)
  console.log("DEBUG LOGIN TRY:", {
    u,
    pLen: p.length,
    envU: USER,
    envPLen: PASS.length,
  });

  if (u === USER && p === PASS) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
