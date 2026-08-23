import React from "react";
import {
  Zap,
  TrendingUp,
  Layers3,
  CreditCard,
  Globe2,
  CheckCircle2,
} from "lucide-react";

const icons = {
  "AI TRANSFORMATION": Zap,
  "GROWTH STRATEGY": TrendingUp,
  "PROGRAMME DELIVERY": Layers3,
  "PAYMENTS INNOVATION": CreditCard,
  "GLOBAL EXPANSION": Globe2,
};

export default function ImpactCard({
  category,
  title,
  image,
  description,
  challenge = [],
  approach = [],
  outcomes = [],
}) {
  const Icon = icons[category] || Zap;

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-700/70 bg-[#111823] shadow-xl">

      {/* ================= IMAGE ================= */}

      <div className="relative h-[300px] overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            absolute inset-0
            h-full w-full
            object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111823] via-[#111823]/35 to-transparent" />

        {/* Header content */}
        <div className="absolute bottom-0 left-0 right-0 p-7">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 bg-slate-500/60 backdrop-blur-sm">
              <Icon
                size={21}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            <div>
              <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#35E3D1]">
                {category}
              </p>

              <h2 className="text-xl font-bold text-white">
                {title}
              </h2>
            </div>

          </div>

        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="px-7 py-7 lg:px-8">

        {/* Description */}

        <p className="max-w-5xl text-[15px] leading-7 text-slate-300">
          {description}
        </p>

        {/* Challenge / Approach */}

        <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Challenge */}

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
              Challenge
            </h3>

            <ul className="space-y-3">
              {challenge.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b78]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Approach */}

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
              Approach
            </h3>

            <ul className="space-y-3">
              {approach.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.8}
                    className="mt-[5px] shrink-0 text-[#35E3D1]"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}

        <div className="my-7 h-px bg-slate-700/70" />

        {/* ================= OUTCOMES ================= */}

        <div>

          <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
            Outcomes
          </h3>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="
                  rounded-xl
                  border border-slate-700/40
                  bg-[#1b222d]
                  px-5 py-5
                  text-center
                  transition-all duration-300
                  group-hover:border-slate-600
                "
              >

                <p className="text-xl font-bold text-white">
                  {outcome.value}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {outcome.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </article>
  );
}