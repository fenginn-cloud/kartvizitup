export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="KartvizitUp" className="h-7" />
        </a>
        <div className="flex items-center gap-3 text-sm">
          <a href="mailto:hello@kartvizitup.com" className="opacity-80 hover:opacity-100">İletişim</a>
          <a href="#" className="rounded-lg px-3 py-1.5 bg-white text-black font-medium hover:opacity-90">Demo</a>
        </div>
      </nav>
    </header>
  );
}
