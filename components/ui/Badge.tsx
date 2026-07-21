import { Award } from "lucide-react";

export default function Badge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-black/[0.06] bg-white px-5 py-4 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <Award className="size-5 shrink-0 text-amber-500" strokeWidth={1.8} />
      <span className="text-sm font-semibold text-ink">{label}</span>
    </div>
  );
}
