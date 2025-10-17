export default function Footer() {
  return (
    <footer className="mt-24 py-10 text-center text-xs text-white/60 border-t border-white/10">
      <p>
        © {new Date().getFullYear()} KartvizitUp — Tek sayfa, hızlı ve modern dijital kartvizit.
      </p>
      <p className="mt-2">
        <a
          href="/demo"
          className="underline underline-offset-4 hover:text-white transition"
        >
          Canlı demo
        </a>
        {" · "}
        <a
          href="mailto:hello@kartvizitup.com"
          className="underline underline-offset-4 hover:text-white transition"
        >
          İletişim
        </a>
      </p>
    </footer>
  );
}
