import React from "react";
import focusareas from "../assests/focus.jpeg";
import focus1 from "../assests/focus1.jpeg";
import focus2 from "../assests/focus2.jpeg";
import focus3 from "../assests/focus3.jpeg";
import focus4 from "../assests/focus4.jpeg";
import focus5 from "../assests/focus5.jpeg";
import   {ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";
const tags = ["AI", "KYC", "Payments", "Fraud", "Operating"];

const focusAreas = [
  {
    title: "AI Transformation & Controls",
    subtitle: "Scaling AI responsibly in regulated environments",
    description:
      "Leading AI-enabled transformation with strong governance, auditability, and human-in-the-loop operating models. Building systems that deliver efficiency while maintaining the controls that complex regulatory environments demand.",
    image: focus1,
    icon: "brain",
    iconColor: "bg-cyan-500",
    capabilities: [
      "AI-enabled document operations and workflow automation",
      "Reinforcement learning with human feedback (RLHF) implementation",
      "Control frameworks and governance structures",
      "Operational resilience and auditability",
      "Policy alignment and compliance integration",
      "Change management and adoption programmes",
    ],
    deliver: [
      "Productivity improvements through intelligent automation",
      "Reduced operational risk and improved quality",
      "Scalable governance frameworks",
      "Measurable ROI and business case validation",
    ],
  },

  {
    title: "KYC / AML & Regulatory Platforms",
    subtitle: "Product strategy for compliance transformation",
    description:
      "Building onboarding and compliance platforms that balance risk controls with customer experience and operational throughput. Transforming legacy operations into modern, scalable platforms.",
    image: focus2,
    icon: "shield",
    iconColor: "bg-indigo-500",
    capabilities: [
      "KYC transformation and digitisation programmes",
      "AML screening and monitoring platforms",
      "Onboarding journey optimisation",
      "Policy and procedure alignment",
      "Operating model design for compliance functions",
      "Vendor evaluation and integration",
    ],
    deliver: [
      "Reduced onboarding time and improved conversion",
      "Lower false positive rates with maintained coverage",
      "Compliance-by-design architecture",
      "Scalable operations with clear cost models",
    ],
  },

  {
    title: "Payments Strategy & Ecosystems",
    subtitle: "Card, A2A, and open banking propositions",
    description:
      "Developing payments propositions across rails—card, A2A, pay-by-bank, request-to-pay—with strong ecosystem partnerships and adoption-led go-to-market strategies.",
    image: focus3,
    icon: "card",
    iconColor: "bg-fuchsia-500",
    capabilities: [
      "Payments product strategy and roadmap development",
      "A2A and open banking proposition design",
      "Scheme rail optimisation (Visa, Mastercard, local schemes)",
      "Partner ecosystem development",
      "Go-to-market strategy and execution",
      "Commercial model design",
    ],
    deliver: [
      "New revenue streams and market expansion",
      "Improved partner adoption and ecosystem growth",
      "Reduced payment costs and improved margins",
      "Faster time-to-market for new propositions",
    ],
  },

  {
    title: "Fraud / Trust / Compliance-by-Design",
    subtitle: "Embedding controls from the start",
    description:
      "Building trust and compliance into products from inception—not as afterthoughts. Creating platforms with embedded data quality, policy alignment, and resilience.",
    image: focus4,
    icon: "lock",
    iconColor: "bg-orange-500",
    capabilities: [
      "Fraud prevention strategy and tooling",
      "Trust architecture and authentication frameworks",
      "Data quality programmes and governance",
      "Policy-aligned product development",
      "Risk assessment and mitigation",
      "Incident response and recovery planning",
    ],
    deliver: [
      "Reduced fraud losses and improved detection",
      "Higher customer trust and satisfaction",
      "Regulatory confidence and reduced remediation",
      "Resilient platforms that scale safely",
    ],
  },

  {
    title: "Operating Models & Portfolio Delivery",
    subtitle: "Governance, OKRs, and cross-functional alignment",
    description:
      "Designing operating models and portfolio governance that enable complex organisations to execute at scale. Building clarity, accountability, and delivery discipline.",
    image: focus5,
    icon: "settings",
    iconColor: "bg-emerald-500",
    capabilities: [
      "Operating model design and transformation",
      "Portfolio governance and prioritisation",
      "OKR frameworks and performance management",
      "Cross-functional team design and leadership",
      "Stakeholder alignment and communication",
      "Delivery methodology and tooling",
    ],
    deliver: [
      "Faster decision-making and reduced friction",
      "Clear accountability and outcome ownership",
      "Improved delivery velocity and predictability",
      "Scalable structures for growth",
    ],
  },
];

function Icon({ type }) {
  const common =
    "h-6 w-6 text-white";

  if (type === "brain") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 4.5a3 3 0 0 0-5 2.2A3.5 3.5 0 0 0 5 13a3.5 3.5 0 0 0 4 5.5V4.5Z" />
        <path d="M15 4.5a3 3 0 0 1 5 2.2A3.5 3.5 0 0 1 19 13a3.5 3.5 0 0 1-4 5.5V4.5Z" />
        <path d="M9 8h2m4 0h-2m-4 4h2m4 0h-2m-4 4h2m4 0h-2" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 20 6v5c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-3Z" />
      </svg>
    );
  }

  if (type === "card") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 14h5" />
      </svg>
    );
  }

  if (type === "lock") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

export default function FocusAreas() {
  return (
    <section className="bg-[#07111d]">

      {/* ================= BANNER ================= */}
      <div
        className="relative min-h-[90vh]"
        style={{
          backgroundImage: `url(${focusareas})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111d] via-[#07111d]/80 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl">

            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
                Focus Areas
              </span>
            </div>

            <h1 className="text-6xl font-bold text-white lg:text-7xl">
              Strategic Domains
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              Deep expertise across interconnected areas where I deliver
              repeatable strategic value and measurable outcomes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-slate-200 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>


      {/* ================= FOCUS AREA CARDS ================= */}
      <div className="bg-[#080f1a]">

        <div className="mx-auto w-[80%] space-y-6">

          {focusAreas.map((area, index) => (
            <article
              key={area.title}
              className="overflow-hidden rounded-xl border border-slate-700/60 bg-[#111824] shadow-[0_15px_45px_rgba(0,0,0,0.25)]"
            >

              {/* ===== IMAGE HEADER ===== */}
              <div
                className="relative h-[125px] overflow-hidden sm:h-[135px]"
                style={{
                  backgroundImage: `url(${area.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >

                {/* Dark image overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#07111d]/90 via-[#07111d]/60 to-[#07111d]/30" />

                {/* Subtle bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111824] to-transparent" />

                <div className="relative z-10 flex h-full items-center gap-4 px-6 sm:px-8">

                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${area.iconColor} shadow-lg sm:h-14 sm:w-14`}
                  >
                    <Icon type={area.icon} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {area.title}
                    </h2>

                    <p className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
                      {area.subtitle}
                    </p>
                  </div>

                </div>
              </div>


              {/* ===== CARD CONTENT ===== */}
              <div className="px-6 py-8 sm:px-8 sm:py-9">

                {/* Description */}
                <p className="max-w-6xl text-sm leading-7 text-slate-300 sm:text-[15px]">
                  {area.description}
                </p>


                {/* Columns */}
                <div className="mt-7 grid gap-10 md:grid-cols-2 md:gap-14">

                  {/* CAPABILITIES */}
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="h-px w-3 bg-slate-500" />

                      <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-slate-500">
                        Capabilities
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {area.capabilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-xs leading-5 text-slate-400 sm:text-[13px]"
                        >
                          <span className="mt-[5px] flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-cyan-400">
                            <span className="h-1 w-1 rounded-full bg-cyan-400" />
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* WHAT I DELIVER */}
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="h-px w-3 bg-slate-500" />

                      <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-slate-500">
                        What I Deliver
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {area.deliver.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-xs font-medium leading-5 text-slate-300 sm:text-[13px]"
                        >
                          <span className="mt-[1px] text-base leading-none text-yellow-400">
                            ⚡
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

            </article>
          ))}

        </div>
      </div>
       {/* CTA */}

          <div className="mt-10 border-t border-white/10 pt-20 pb-20 text-center">

            <h2 className="text-4xl font-bold text-white">
              Need expertise in these areas?
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400"
              >
                Discuss your challenges
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/impact"
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-cyan-400"
              >
                See impact examples
              </Link>

            </div>

          </div>

    </section>
  );
}