export default function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const toneClass =
    tone === "dark"
      ? "text-amber-300 bg-white/5 ring-1 ring-white/10"
      : "text-amber-700 bg-amber-500/10 ring-1 ring-amber-500/20";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] uppercase ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
}
