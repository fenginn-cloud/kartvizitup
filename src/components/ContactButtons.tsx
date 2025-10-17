import Link from "next/link";

type Props = {
  phone?: string;
  whatsapp?: string;
  email?: string;
  locationUrl?: string;
};

export default function ContactButtons({ phone, whatsapp, email, locationUrl }: Props) {
  const items = [
    phone ? { href: `tel:${phone}`, label: "Ara" } : null,
    whatsapp ? { href: `https://wa.me/${whatsapp.replace(/\D/g, "")}`, label: "WhatsApp" } : null,
    email ? { href: `mailto:${email}`, label: "E-posta" } : null,
    locationUrl ? { href: locationUrl, label: "Konum" } : null,
  ].filter(Boolean) as { href: string; label: string }[];

  if (!items.length) return null;

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {items.map((it) => (
        <Link
          key={it.href}
          href={it.href}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          className="rounded-lg border border-white/20 px-3 py-2 text-center hover:bg-white hover:text-black transition"
        >
          {it.label}
        </Link>
      ))}
    </div>
  );
}
