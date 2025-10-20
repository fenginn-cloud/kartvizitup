// src/lib/auth.ts
import { cookies, type CookieStore } from "next/headers";
import { getIronSession, type IronSession, type SessionOptions } from "iron-session";

type Sess = { isAdmin?: boolean };

const SESSION_COOKIE = "kvup_admin";

const sessionOptions: SessionOptions = {
  cookieName: SESSION_COOKIE,
  password: process.env.IRON_SESSION_PASSWORD!, // en az 32 karakter olmalı
  cookieOptions: {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    path: "/",
  },
};

export async function getSession(): Promise<IronSession<Sess>> {
  // Next 15: cookies() artık Promise döndürüyor
  const store = (await cookies()) as unknown as CookieStore;
  return getIronSession<Sess>(store, sessionOptions);
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session.isAdmin) throw new Error("UNAUTHORIZED");
  return session;
}
