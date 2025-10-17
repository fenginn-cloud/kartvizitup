// src/components/VerifyBadge.tsx
export default function VerifyBadge({
  status,
  label = "Doğrulandı",
}: {
  status?: "unverified" | "pending" | "verified" | "rejected";
  label?: string;
}) {
  if (status === "verified") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 text-emerald-300 px-2 py-1 text-xs">
        <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-90">
          <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
        </svg>
        {label}
      </span>
    );
  }
  if (status === "pending") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/15 text-yellow-300 px-2 py-1 text-xs">
        Beklemede
      </span>
    );
  }
  if (status === "rejected") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-red-500/15 text-red-300 px-2 py-1 text-xs">
        Doğrulanamadı
      </span>
    );
  }
  return null; // unverified gösterme
}
