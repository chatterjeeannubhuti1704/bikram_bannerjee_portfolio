import { Brain, CheckCircle2 } from "lucide-react";

export default function ImpactCard() {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#141A25]">

      {/* ================= Banner ================= */}

      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.45)), url('/images/impact-ai.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#141A25] via-transparent to-transparent" />

        <div className="absolute bottom-8 left-8 right-8 flex items-end gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
            <Brain size={30} className="text-white" />
          </div>

          <div>

            <span className="text-sm uppercase tracking-widest text-[#CBB38A]">
              AI Transformation
            </span>

            <h2 className="mt-2 text-4xl font-bold text-white">
              AI-enabled Document Operations Transformation
            </h2>

          </div>

        </div>
      </div>

      {/* ================= Content ================= */}

      <div className="p-10">

        <p className="text-xl leading-9 text-slate-200">
          Large-scale document processing operations with high manual effort,
          inconsistent quality outcomes, and growing operational risk in a
          regulated financial services environment.
        </p>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10" />

        {/* Challenge + Approach */}

        <div className="grid gap-14 md:grid-cols-2">

          {/* Left */}

          <div>

            <p className="mb-6 uppercase tracking-widest text-sm text-slate-400">
              Challenge
            </p>

            <ul className="space-y-5">

              <li className="flex gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
                <span className="text-lg text-slate-300">
                  High volume of manual document review and processing
                </span>
              </li>

              <li className="flex gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
                <span className="text-lg text-slate-300">
                  Inconsistent quality and compliance outcomes
                </span>
              </li>

              <li className="flex gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
                <span className="text-lg text-slate-300">
                  Limited scalability and rising operational costs
                </span>
              </li>

              <li className="flex gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
                <span className="text-lg text-slate-300">
                  Risk exposure from human error
                </span>
              </li>

            </ul>

          </div>

          {/* Right */}

          <div>

            <p className="mb-6 uppercase tracking-widest text-sm text-slate-400">
              Approach
            </p>

            <ul className="space-y-5">

              <li className="flex gap-4">
                <CheckCircle2 className="mt-1 text-[#35E3D1]" size={20} />
                <span className="text-lg text-slate-300">
                  Designed AI-enabled workflow with human-in-the-loop controls
                </span>
              </li>

              <li className="flex gap-4">
                <CheckCircle2 className="mt-1 text-[#35E3D1]" size={20} />
                <span className="text-lg text-slate-300">
                  Built governance framework for responsible AI adoption
                </span>
              </li>

              <li className="flex gap-4">
                <CheckCircle2 className="mt-1 text-[#35E3D1]" size={20} />
                <span className="text-lg text-slate-300">
                  Aligned with policy and compliance requirements
                </span>
              </li>

              <li className="flex gap-4">
                <CheckCircle2 className="mt-1 text-[#35E3D1]" size={20} />
                <span className="text-lg text-slate-300">
                  Established rollout governance and change management
                </span>
              </li>

            </ul>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10" />

        {/* Outcomes */}

        <p className="mb-6 uppercase tracking-widest text-sm text-slate-400">
          Outcomes
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white/5 py-8 text-center">
            <h3 className="text-4xl font-bold text-white">~28%</h3>
            <p className="mt-3 text-slate-400">
              Productivity improvement
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 py-8 text-center">
            <h3 className="text-4xl font-bold text-white">
              Improved
            </h3>
            <p className="mt-3 text-slate-400">
              Throughput & quality
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 py-8 text-center">
            <h3 className="text-4xl font-bold text-white">
              Stronger
            </h3>
            <p className="mt-3 text-slate-400">
              Auditability
            </p>
          </div>

        </div>

      </div>

    </article>
  );
}