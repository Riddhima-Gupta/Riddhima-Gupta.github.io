export default function Badge({ label }) {
  return (
    <span className="rounded-full border border-slate-700/80 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-200">
      {label}
    </span>
  );
}
