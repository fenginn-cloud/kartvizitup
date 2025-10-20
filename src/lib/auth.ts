// src/lib/auth.ts
import { cookies } from "next/headers";
import { getIronSession, type IronSession, type SessionOptions } from "iron-session";

type Sess = { isAdmin?: boolean };

const SESSION_COOKIE = "kvup_admin";

const sessionOptions: SessionOptions = {
  cookieName: SESSION_COOKIE,
  password: process.env.IRON_SESSION_PASSWORD!, // en az 32 karakter
  cookieOptions: {
    secure: true,
    sameSite: "lax",
    httpOnly: true,
    path: "/",
  },
};

export async function getSession(): Promise<IronSession<Sess>> {
  // Next 15: cookies() artık Promise döndürüyor
  const store = await cookies();
  // iron-session type'ı CookieStore beklediği için cast ediyoruz
  return getIronSession<Sess>(store as any, sessionOptions);
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session.isAdmin) throw new Error("UNAUTHORIZED");
  return session;
}
