import SectionMarker from '../components/SectionMarker.jsx'
import ImpactCard from '../components/ImpactCard.jsx'


export default function Impact() {
  return (
    <div>

      {/* Hero Banner */}
      <section
        className="relative overflow-hidden min-h-[560px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,13,24,.82), rgba(8,13,24,.88)), url('/images/impact-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

          <p className="uppercase tracking-[0.25em] text-[#35E3D1] text-sm mb-6 flex items-center gap-4">
            <span className="w-10 h-px bg-[#35E3D1]" />
            Impact Portfolio
          </p>

          <h1 className="text-white font-bold text-5xl lg:text-7xl leading-none max-w-3xl">
            Selected Outcomes
          </h1>

          <p className="mt-8 text-slate-300 text-xl leading-relaxed max-w-2xl">
            Case studies demonstrating measurable impact across AI
            transformation, payments innovation, and enterprise delivery.
          </p>

          <div className="flex flex-wrap gap-12 mt-12">

            <div>
              <h2 className="text-[#35E3D1] text-5xl font-bold">~28%</h2>
              <p className="text-slate-300 mt-2">
                Efficiency uplift
              </p>
            </div>

            <div>
              <h2 className="text-[#35E3D1] text-5xl font-bold">£20M+</h2>
              <p className="text-slate-300 mt-2">
                Programme delivery
              </p>
            </div>

            <div>
              <h2 className="text-[#35E3D1] text-5xl font-bold">$800M+</h2>
              <p className="text-slate-300 mt-2">
                Opportunity case
              </p>
            </div>

          </div>

        </div>
      </section>

  {/* ================= IMPACT CARDS ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-16">

        <ImpactCard />

        {/* Next Cards */}
        {/* <ImpactCard /> */}
        {/* <ImpactCard /> */}
        {/* <ImpactCard /> */}
        {/* <ImpactCard /> */}
        {/* <ImpactCard /> */}

      </section>


    </div>
  )
}