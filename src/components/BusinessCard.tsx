import VerifyBadge from "@/components/VerifyBadge";
import type { Business } from "@/types/business";

export default function BusinessCard({ biz }: { biz: Business }) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      {/* Başlık + rozet */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            {biz.name}
            <VerifyBadge status={biz.verificationStatus} />
          </h1>

          {biz.tursabNumber && (
            <p className="text-xs text-white/60 mt-1">
              TÜRSAB No: <span className="font-mono">{biz.tursabNumber}</span>
            </p>
          )}

          {biz.tagline && <p className="mt-2 text-white/70">{biz.tagline}</p>}
        </div>

        {biz.coverImage && (
          <img
            src={biz.coverImage}
            alt={biz.name}
            className="h-16 w-28 rounded-md object-cover border border-white/10"
          />
        )}
      </div>

      {/* Hızlı butonlar */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {biz.phone && (
          <a
            href={`tel:${biz.phone}`}
            className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15"
          >
            Ara
          </a>
        )}
        {biz.whatsapp && (
          <a
            href={`https://wa.me/${biz.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15"
          >
            WhatsApp
          </a>
        )}
        {biz.locationUrl && (
          <a
            href={biz.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15"
          >
            Harita
          </a>
        )}
        {biz.socials?.find((s) => s.type === "web") && (
          <a
            href={biz.socials.find((s) => s.type === "web")!.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15"
          >
            Web
          </a>
        )}
      </div>

      {/* Bilgiler */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {biz.checkin && (
          <div className="rounded-lg border border-white/10 bg-black/20 p-3">
            <p className="text-xs text-white/60">Check-in</p>
            <p className="font-medium">{biz.checkin}</p>
          </div>
        )}
        {biz.checkout && (
          <div className="rounded-lg border border-white/10 bg-black/20 p-3">
            <p className="text-xs text-white/60">Check-out</p>
            <p className="font-medium">{biz.checkout}</p>
          </div>
        )}
        {biz.email && (
          <div className="rounded-lg border border-white/10 bg-black/20 p-3">
            <p className="text-xs text-white/60">E-posta</p>
            <a href={`mailto:${biz.email}`} className="hover:underline">
              {biz.email}
            </a>
          </div>
        )}
      </div>

      {/* Açıklama */}
      {biz.description && (
        <p className="mt-6 text-white/80 leading-relaxed">{biz.description}</p>
      )}

      {/* Galeri */}
      {biz.gallery && biz.gallery.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {biz.gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${biz.name} foto ${i + 1}`}
              className="h-28 w-full rounded-lg object-cover border border-white/10"
              loading="lazy"
            />
          ))}
        </div>
      )}
    </section>
  );
}
