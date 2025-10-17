// src/app/api/admin/login/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("DEBUG ENV:", process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);

  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Giriş başarılı
    return NextResponse.json({ success: true });
  }

  // Hatalı giriş
  return NextResponse.json({ success: false }, { status: 401 });
}
