import { LucideIcon } from "lucide-react";

export default function IconTile({
  icon: Icon,
  tone = "teal",
  size = "md",
}: {
  icon: LucideIcon;
  tone?: "teal" | "navy" | "white";
  size?: "sm" | "md";
}) {
  const tones: Record<string, string> = {
    teal: "bg-teal-50 text-teal-700 ring-1 ring-teal-600/15",
    navy: "bg-navy-900 text-teal-300",
    white: "bg-white/10 text-white ring-1 ring-white/15",
  };

  const sizes: Record<string, string> = {
    sm: "size-10 rounded-lg [&>svg]:size-5",
    md: "size-12 rounded-xl [&>svg]:size-6",
  };

  return (
    <div className={`flex shrink-0 items-center justify-center ${tones[tone]} ${sizes[size]}`}>
      <Icon strokeWidth={1.8} />
    </div>
  );
}
