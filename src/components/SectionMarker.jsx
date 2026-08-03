export default function SectionMarker({ index, label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-[11px] text-brass tracking-widish">{index}</span>
      <span className="h-px flex-1 bg-hairline" />
      <span className="font-mono text-[11px] text-slate tracking-widish uppercase">{label}</span>
    </div>
  )
}
