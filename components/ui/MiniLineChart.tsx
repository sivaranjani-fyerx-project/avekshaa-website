import { useId } from "react";

const accentColor: Record<string, string> = {
  teal: "#4fc4cd",
  amber: "#f2a541",
  blue: "#60a5fa",
};

export default function MiniLineChart({
  points = [28, 34, 30, 42, 38, 52, 48, 60, 55, 68, 64, 76],
  className = "",
  accent = "teal",
}: {
  points?: number[];
  className?: string;
  accent?: "teal" | "amber" | "blue";
}) {
  const color = accentColor[accent];
  const gradientId = `chart-fill-${useId()}`;
  const width = 100;
  const height = 40;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const step = width / (points.length - 1);

  const coords = points.map((p, i) => {
    const x = i * step;
    const y = height - ((p - min) / (max - min || 1)) * height;
    return [x, y];
  });

  const linePath = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");

  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={`h-24 w-full ${className}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId})`} />
      <path
        d={linePath}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
