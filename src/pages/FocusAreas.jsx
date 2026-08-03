import SectionMarker from '../components/SectionMarker.jsx'

const areas = [
  {
    tag: 'Model Risk & Governance',
    body: 'Frameworks that let institutions move fast on AI without losing the audit trail regulators expect.',
  },
  {
    tag: 'Legacy-to-AI Migration',
    body: 'Sequencing that respects what already works — replacing core systems in stages that a real bank can survive.',
  },
  {
    tag: 'Regulatory Readiness',
    body: 'Translating model behavior into language examiners accept, before the exam, not during it.',
  },
  {
    tag: 'Board Education',
    body: 'Giving directors enough technical fluency to ask the right questions, without turning them into engineers.',
  },
]

export default function FocusAreas() {
  return (
    <div>
      <SectionMarker index="e03" label="Focus Areas" />
      <h1 className="font-display text-3xl md:text-4xl text-paper mb-12 max-w-xl">
        Four problems worth solving properly.
      </h1>

      <div className="grid sm:grid-cols-2 gap-px bg-hairline border border-hairline">
        {areas.map((a) => (
          <div key={a.tag} className="bg-ink p-8">
            <h2 className="ledger-tick pl-8 font-display text-lg text-paper mb-3">{a.tag}</h2>
            <p className="font-body text-sm text-slate leading-relaxed">{a.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
