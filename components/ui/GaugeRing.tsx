const accentStroke: Record<string, string> = {
  teal: "#4fc4cd",
  amber: "#f2a541",
  blue: "#60a5fa",
};

export default function GaugeRing({
  value,
  label,
  accent = "teal",
}: {
  value: number;
  label: string;
  accent?: "teal" | "amber" | "blue";
}) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 100 100" className="size-28 -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="9"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={accentStroke[accent]}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="-mt-20 flex flex-col items-center">
        <span className="text-2xl font-bold text-white">{value}%</span>
      </div>
      <span className="mt-8 text-xs font-medium tracking-wide text-white/50 uppercase">
        {label}
      </span>
    </div>
  );
}
