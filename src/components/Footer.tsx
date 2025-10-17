export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} KartvizitUp — Tüm hakları saklıdır.
      </p>
      <p className="mt-1">
        <a
          href="mailto:hello@kartvizitup.com"
          className="hover:text-white transition"
        >
          hello@kartvizitup.com
        </a>
      </p>
    </footer>
  );
}
