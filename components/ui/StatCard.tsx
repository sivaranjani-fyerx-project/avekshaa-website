export default function StatCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)] sm:p-8">
      <span className="text-4xl font-bold tracking-tight text-teal-600 sm:text-5xl">
        {value}
      </span>
      <span className="text-base font-semibold text-ink">{label}</span>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
