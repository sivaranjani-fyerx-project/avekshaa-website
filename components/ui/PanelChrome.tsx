import { ReactNode } from "react";

export default function PanelChrome({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-[0_30px_80px_-24px_rgba(5,18,32,0.55)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
        </div>
        <span className="ml-2 text-xs font-medium text-white/50">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
