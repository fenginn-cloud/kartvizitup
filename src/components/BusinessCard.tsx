import Image from "next/image";
import ContactButtons from "./ContactButtons";
import type { Business } from "@/types/business";
import Gallery from "./Gallery";

export default function BusinessCard({ biz }: { biz: Business }) {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      {biz.coverImage && (
        <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
          <Image src={biz.coverImage} alt={biz.name} fill className="object-cover" priority />
        </div>
      )}

      <h1 className="text-2xl font-semibold">{biz.name}</h1>
      {biz.tagline && <p className="mt-1 text-white/70">{biz.tagline}</p>}

      <div className="mt-4 grid gap-2 text-sm text-white/80">
        {biz.checkIn && biz.checkOut && (
          <p>⏱️ Check-in: {biz.checkIn} • Check-out: {biz.checkOut}</p>
        )}
        {biz.address && <p>📍 {biz.address}</p>}
        {biz.email && <p>✉️ {biz.email}</p>}
      </div>

      <div className="mt-5">
        <ContactButtons
          phone={biz.phone}
          whatsapp={biz.whatsapp}
          email={biz.email}
          locationUrl={biz.locationUrl}
        />
      </div>

      <Gallery images={biz.gallery} />
    </section>
  );
}
