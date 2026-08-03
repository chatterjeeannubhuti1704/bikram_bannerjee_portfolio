import SectionMarker from '../components/SectionMarker.jsx'

const roles = [
  {
    years: '2022 — Present',
    title: 'Advisory Chair, AI Risk & Governance',
    org: 'Meridian Capital Partners',
    detail:
      'Set enterprise AI policy across 40+ portfolio companies. Built the model-risk review process now used ahead of every production AI deployment.',
  },
  {
    years: '2018 — 2022',
    title: 'Chief Data & Analytics Officer',
    org: 'Northfield Mutual',
    detail:
      'Rebuilt the claims and underwriting data platform from the ground up. Cut model deployment time from 9 months to 6 weeks.',
  },
  {
    years: '2014 — 2018',
    title: 'VP, Enterprise Analytics',
    org: 'Continental Trust Bank',
    detail:
      'Led the fraud-detection modernization program across retail and commercial banking, reducing false positives by 61%.',
  },
  {
    years: '2009 — 2014',
    title: 'Senior Manager, Risk Analytics',
    org: 'Harrow & Vance Consulting',
    detail:
      'Advised six regional banks through Basel III model validation and stress-testing infrastructure builds.',
  },
]

export default function Experience() {
  return (
    <div>
      <SectionMarker index="e02" label="Experience" />
      <h1 className="font-display text-3xl md:text-4xl text-paper mb-12 max-w-xl">
        A career built at the intersection of risk, data, and regulated trust.
      </h1>

      <div className="space-y-10">
        {roles.map((r) => (
          <div key={r.title} className="grid md:grid-cols-[140px_1fr] gap-2 md:gap-8 border-t border-hairline pt-6">
            <p className="font-mono text-[11px] text-brassdim tracking-widish">{r.years}</p>
            <div>
              <h2 className="font-display text-xl text-paper">{r.title}</h2>
              <p className="font-mono text-[11px] text-slate tracking-widish uppercase mt-1 mb-3">{r.org}</p>
              <p className="font-body text-sm text-slate leading-relaxed max-w-lg">{r.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
