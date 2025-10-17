import Image from "next/image";

export default function Gallery({ images }: { images?: string[] }) {
  if (!images || images.length === 0) return null;
  return (
    <div className="mt-6 grid grid-cols-3 gap-2">
      {images.slice(0, 6).map((src) => (
        <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
          <Image src={src} alt="" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
