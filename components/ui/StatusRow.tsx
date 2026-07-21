const accentDot: Record<string, string> = {
  teal: "bg-teal-400",
  amber: "bg-amber-400",
  blue: "bg-blue-400",
};

const accentText: Record<string, string> = {
  teal: "text-teal-300",
  amber: "text-amber-300",
  blue: "text-blue-300",
};

export default function StatusRow({
  label,
  value,
  status = "healthy",
  accent = "teal",
}: {
  label: string;
  value: string;
  status?: "healthy" | "watch";
  accent?: "teal" | "amber" | "blue";
}) {
  return (
    <div className="flex items-center justify-between rounded-lg px-3 py-2.5 odd:bg-white/[0.03]">
      <div className="flex items-center gap-2.5">
        <span
          className={`size-2 rounded-full ${
            status === "healthy" ? accentDot[accent] : "bg-amber-500"
          }`}
        />
        <span className="text-sm text-white/80">{label}</span>
      </div>
      <span
        className={`text-xs font-semibold ${
          status === "healthy" ? accentText[accent] : "text-amber-400"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
