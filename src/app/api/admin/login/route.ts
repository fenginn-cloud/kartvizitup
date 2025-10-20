import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

type LoginBody = { username?: string; password?: string };

export async function POST(req: Request) {
  try {
    const USER = (process.env.ADMIN_USERNAME ?? "").trim();
    const PASS = (process.env.ADMIN_PASSWORD ?? "").trim();

    const { username, password } = (await req.json()) as LoginBody;

    if (username?.trim() === USER && password === PASS) {
      const session = await getSession();
      session.isAdmin = true;
      await session.save();
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch {
    return NextResponse.json(
      { success: false, error: "invalid_request" },
      { status: 400 }
    );
  }
}
