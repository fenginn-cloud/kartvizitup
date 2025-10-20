// src/app/api/admin/login/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // cache'e takılmasın

export async function POST(req: Request) {
  const USER = process.env.ADMIN_USERNAME;
  const PASS = process.env.ADMIN_PASSWORD;

  console.log("DEBUG ENV:", USER, PASS ? "***" : "undefined");

  if (!USER || !PASS) {
    return NextResponse.json(
      { success: false, error: "ENV not set on server" },
      { status: 500 }
    );
  }

  const { username, password } = await req.json();

  if (username === USER && password === PASS) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
