import SectionMarker from '../components/SectionMarker.jsx'

const posts = [
  {
    date: '2026.06',
    title: 'The Trust Ledger: why regulated AI adoption is a documentation problem first',
    excerpt: 'Most AI programs fail the exam long before they fail the model.',
  },
  {
    date: '2026.03',
    title: 'Board fluency, not board expertise',
    excerpt: 'Directors don\u2019t need to understand gradient descent. They need to know which question to ask.',
  },
  {
    date: '2025.11',
    title: 'Sequencing a legacy migration so it survives contact with an examiner',
    excerpt: 'Four phases, each independently defensible, beats one big-bang cutover every time.',
  },
]

export default function Insights() {
  return (
    <div>
      <SectionMarker index="e07" label="Insights" />
      <h1 className="font-display text-3xl md:text-4xl text-paper mb-12 max-w-xl">
        Notes from the field.
      </h1>

      <div className="space-y-0 border-t border-hairline">
        {posts.map((p) => (
          <a
            key={p.title}
            href="#"
            className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-7 border-b border-hairline hover:bg-surface/40 transition-colors -mx-4 px-4"
          >
            <span className="font-mono text-[11px] text-brassdim tracking-widish w-20 shrink-0">
              {p.date}
            </span>
            <div>
              <h2 className="font-display text-lg text-paper group-hover:text-brass transition-colors leading-snug">
                {p.title}
              </h2>
              <p className="font-body text-sm text-slate leading-relaxed mt-2 max-w-lg">{p.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
