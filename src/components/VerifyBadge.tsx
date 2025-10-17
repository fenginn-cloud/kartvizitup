type Props = {
  status?: "verified" | "pending" | "unverified" | "fraud";
  size?: "sm" | "md";
};

export default function VerifyBadge({ status = "unverified", size = "sm" }: Props) {
  const styles = {
    verified: "bg-emerald-600/20 text-emerald-300 border-emerald-600/40",
    pending: "bg-amber-600/20 text-amber-300 border-amber-600/40",
    unverified: "bg-white/10 text-white/60 border-white/20",
    fraud: "bg-rose-600/20 text-rose-300 border-rose-600/40",
  } as const;

  const label = {
    verified: "Doğrulandı",
    pending: "Doğrulama bekliyor",
    unverified: "Doğrulanmadı",
    fraud: "Uyarı: Şüpheli",
  }[status];

  const px = size === "sm" ? "px-2" : "px-3";
  const py = size === "sm" ? "py-0.5" : "py-1";
  const text = size === "sm" ? "text-xs" : "text-sm";

  return (
    <span
      aria-label={label}
      className={`inline-flex items-center gap-1 rounded-full border ${px} ${py} ${text} ${styles[status]}`}
      title={label}
    >
      {/* basit check/clock/x ikonları (inline svg) */}
      {status === "verified" && (
        <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-90">
          <path fill="currentColor" d="M9 16.2 4.8 12l1.4-1.4L9 13.4l8.8-8.8L19.2 6z" />
        </svg>
      )}
      {status === "pending" && (
        <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-90">
          <path fill="currentColor" d="M12 8v5l3 3 1.5-1.5-2.5-2.5V8z" />
          <path fill="currentColor" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" fillOpacity=".15" />
        </svg>
      )}
      {status === "fraud" && (
        <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-90">
          <path fill="currentColor" d="M12 2 1 21h22L12 2zm0 4.8 7.6 13.2H4.4L12 6.8zM11 10h2v5h-2zm0 6h2v2h-2z" />
        </svg>
      )}
      <span>{label}</span>
    </span>
  );
}
