import { LucideIcon } from "lucide-react";
import IconTile from "./IconTile";

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  linkLabel,
  size = "md",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  size?: "sm" | "md";
}) {
  return (
    <div className="group flex h-full flex-col gap-4 rounded-2xl border border-black/[0.06] bg-white p-6 transition-shadow hover:shadow-[0_12px_32px_-12px_rgba(10,20,32,0.15)] sm:p-7">
      <IconTile icon={icon} size={size} />
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="text-[15px] leading-relaxed text-slate-600">{description}</p>
      {href && linkLabel && (
        <a
          href={href}
          className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-600"
        >
          {linkLabel}
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      )}
    </div>
  );
}
