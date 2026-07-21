const accentGradient: Record<string, string> = {
  teal: "from-teal-500/80 to-teal-300/60",
  amber: "from-amber-500/80 to-amber-300/60",
  blue: "from-blue-500/80 to-blue-300/60",
};

export default function MiniBarChart({
  bars = [40, 65, 50, 80, 60, 90, 70],
  className = "",
  accent = "teal",
}: {
  bars?: number[];
  className?: string;
  accent?: "teal" | "amber" | "blue";
}) {
  const max = Math.max(...bars);

  return (
    <div className={`flex h-24 items-end gap-2 ${className}`}>
      {bars.map((b, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-sm bg-gradient-to-t ${accentGradient[accent]}`}
          style={{ height: `${(b / max) * 100}%` }}
        />
      ))}
    </div>
  );
}
