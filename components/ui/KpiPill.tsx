const accentText: Record<string, string> = {
  teal: "text-teal-300",
  amber: "text-amber-300",
  blue: "text-blue-300",
};

export default function KpiPill({
  label,
  value,
  tone = "positive",
  accent = "teal",
}: {
  label: string;
  value: string;
  tone?: "positive" | "neutral";
  accent?: "teal" | "amber" | "blue";
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
      <span className="text-[11px] font-medium tracking-wide text-white/50 uppercase">
        {label}
      </span>
      <span
        className={`text-lg font-semibold ${
          tone === "positive" ? accentText[accent] : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
