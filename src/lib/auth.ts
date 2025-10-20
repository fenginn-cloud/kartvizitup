import { cookies } from "next/headers";
import { IronSession, getIronSession } from "iron-session";

type Sess = { isAdmin?: boolean };

const SESSION_COOKIE = "kvup_admin";

const sessionOptions = {
  cookieName: SESSION_COOKIE,
  password: process.env.IRON_SESSION_PASSWORD!,
  cookieOptions: {
    secure: true,
    sameSite: "lax" as const,
    httpOnly: true,
    path: "/",
  },
};

export async function getSession(): Promise<IronSession<Sess>> {
  const c = await cookies();
  return getIronSession<Sess>(c, sessionOptions as any);
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session.isAdmin) throw new Error("UNAUTHORIZED");
  return session;
}
