import SectionMarker from '../components/SectionMarker.jsx'

const engagements = [
  {
    name: 'Board Advisory',
    desc: 'Ongoing counsel to boards and audit committees on AI risk exposure and governance maturity.',
  },
  {
    name: 'Transformation Sprints',
    desc: 'A focused 12-week engagement to move one high-value AI use case from pilot to production, safely.',
  },
  {
    name: 'Executive Briefings',
    desc: 'Closed-door sessions for leadership teams preparing for a regulatory exam or a major system migration.',
  },
]

export default function Advisory() {
  return (
    <div>
      <SectionMarker index="e04" label="Advisory" />
      <h1 className="font-display text-3xl md:text-4xl text-paper mb-6 max-w-xl">
        Engagements built around one problem at a time.
      </h1>
      <p className="font-body text-sm text-slate leading-relaxed max-w-lg mb-14">
        Margit takes on a small number of advisory relationships each year, prioritizing
        institutions with a specific, board-level decision on the table.
      </p>

      <div className="space-y-0 border-t border-hairline">
        {engagements.map((e, i) => (
          <div key={e.name} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-hairline">
            <span className="font-mono text-[11px] text-brassdim tracking-widish w-16 shrink-0">
              e04.{i + 1}
            </span>
            <h2 className="font-display text-lg text-paper w-full md:w-56 shrink-0">{e.name}</h2>
            <p className="font-body text-sm text-slate leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
