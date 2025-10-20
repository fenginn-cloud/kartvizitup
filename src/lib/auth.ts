// src/lib/auth.ts
import { cookies } from "next/headers";
import { getIronSession, type IronSession, type IronSessionOptions } from "iron-session";

type Sess = { isAdmin?: boolean };

const SESSION_COOKIE = "kvup_admin";

const sessionOptions: IronSessionOptions = {
  cookieName: SESSION_COOKIE,
  password: process.env.IRON_SESSION_PASSWORD!, // 32+ karakter olsun
  cookieOptions: {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    path: "/",
  },
};

export async function getSession(): Promise<IronSession<Sess>> {
  // cookies() senkron çalışır
  const c = cookies();
  return getIronSession<Sess>(c, sessionOptions);
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session.isAdmin) throw new Error("UNAUTHORIZED");
  return session;
}
