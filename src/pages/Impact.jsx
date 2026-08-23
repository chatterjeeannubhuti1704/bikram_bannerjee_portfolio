import ImpactCard from "../components/ImpactCard.jsx";
import banner from "../assests/cs.jpeg";
import React from "react";
import card1 from "../assests/focus1.jpeg";
import card2 from "../assests/focus3.jpeg";
import card3 from "../assests/global-strategy-case-study.jpeg";
import card4 from "../assests/im4.jpeg";
import card5 from "../assests/focus5.jpeg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const impactCases = [
  {
    category: "AI TRANSFORMATION",
    title: "AI-enabled Document Operations Transformation",
    image: card1,

    description:
      "Large-scale document processing operations with high manual effort, inconsistent quality outcomes, and growing operational risk in a regulated financial services environment.",

    challenge: [
      "High volume of manual document review and processing",
      "Inconsistent quality and compliance outcomes",
      "Limited scalability and rising operational costs",
      "Risk exposure from human error and processing delays",
    ],

    approach: [
      "Designed AI-enabled workflow with human-in-the-loop controls",
      "Built governance framework for responsible AI adoption",
      "Aligned with policy and compliance requirements",
      "Established rollout governance and change management",
    ],

    outcomes: [
      {
        value: "~28%",
        label: "Productivity improvement",
      },
      {
        value: "Improved",
        label: "Throughput & quality",
      },
      {
        value: "Stronger",
        label: "Auditability",
      },
    ],
  },

  {
    category: "PAYMENTS INNOVATION",
    title: "Pay-by-Bank / A2A Proposition Leadership",
    image: card2,

    description:
      "Developing and scaling A2A payment propositions in a competitive ecosystem with multiple stakeholders and adoption barriers.",

    challenge: [
      "Fragmented ecosystem with multiple partner dependencies",
      "Adoption barriers across merchants and consumers",
      "Complex regulatory and scheme requirements",
      "Need for clear value exchange across all parties",
    ],

    approach: [
      "Led proposition design with clear value articulation",
      "Built stakeholder alignment across partners and internal teams",
      "Developed phased delivery roadmap with clear milestones",
      "Designed GTM enablement and adoption programmes",
    ],

    outcomes: [
      {
        value: "Scale",
        label: "Ecosystem delivery",
      },
      {
        value: "Improved",
        label: "Partner adoption",
      },
      {
        value: "Clearer",
        label: "Value exchange",
      },
    ],
  },
  

  {
    category: "GLOBAL EXPANSION",
    title: "Global Payments Product Expansion",
    image: card3,

    description:
      "Expanding payments product capabilities across multiple regions with varying regulatory requirements and market dynamics.",

    challenge: [
      "Fragmented product requirements across regions",
      "Varying compliance and regulatory landscapes",
      "Partner ecosystem complexity in each market",
      "Need for consistent product posture with local flexibility",
    ],

    approach: [
      "Developed global roadmap with regional adaptation framework",
      "Built compliance alignment processes across jurisdictions",
      "Created partner strategy tailored to each market",
      "Established release governance and quality gates",
    ],

    outcomes: [
      {
        value: "Faster",
        label: "Regional rollout",
      },
      {
        value: "Consistent",
        label: "Product posture",
      },
      {
        value: "Improved",
        label: "Commercial scale",
      },
    ],
  },
  
  {
    category: "PROGRAMME DELIVERY",
    title: "Large-Scale Transformation Programme",
    image: card5,

    description:
      "Leading multi-year transformation programmes requiring coordination across technology, operations, risk, and commercial functions.",

    challenge: [
      "Complex stakeholder landscape with competing priorities",
      "Large cross-functional teams requiring coordination",
      "Significant investment requiring strong governance",
      "Need for measurable outcomes and business case validation",
    ],

    approach: [
      "Established programme governance and steering structures",
      "Built cross-functional delivery teams with clear accountability",
      "Created OKR frameworks and progress tracking",
      "Maintained stakeholder alignment through regular communication",
    ],

    outcomes: [
      {
        value: "£20M+",
        label: "Programme delivery",
      },
      {
        value: "20+",
        label: "Cross-functional teams",
      },
      {
        value: "On-track",
        label: "Delivery milestone",
      },
    ],
  },

  {
    category: "GROWTH STRATEGY",
    title: "Revenue Opportunity Case Development",
    image: card4,

    description:
      "Building strategic business cases for new market opportunities and product expansions in payments and financial services.",

    challenge: [
      "Need for rigorous market sizing and opportunity validation",
      "Complex stakeholder alignment for investment decisions",
      "Balancing growth ambition with realistic execution",
      "Building conviction across executive stakeholders",
    ],

    approach: [
      "Developed comprehensive market analysis and sizing",
      "Built financial models with clear assumptions",
      "Created phased investment and delivery plans",
      "Aligned stakeholders through structured governance",
    ],

    outcomes: [
      {
        value: "$800M+",
        label: "Opportunity case",
      },
      {
        value: "Multi-year",
        label: "Investment approval",
      },
      {
        value: "Clear",
        label: "Executive roadmap",
      },
    ],
  },

  
];

export default function Impact() {
  return (
    <div className="bg-[#07111d]">

    <section className="relative overflow-hidden bg-[#07111d]">
     {/* ================= BANNER ================= */}
      <div
        className="relative min-h-[90vh]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#07111d]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111d] via-[#07111d]/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl">

            {/* Section Label */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
                Impact Portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl font-bold text-white lg:text-7xl">
             Selected Outcomes
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
             Case studies demonstrating measurable impact across AI transformation, payments innovation, and enterprise delivery
            </p>

      
            {/* Metrics */}
            <div className="mt-14 flex flex-wrap gap-10">
              {[
                ["~28%", "Efficiency uplift"],
                ["£20M+", "Programme delivery"],
                ["$800M+", "Opportunity case"],
              ].map(([value, label]) => (
                <div key={value}>
                  <h2 className="text-2xl font-bold text-cyan-400">
                    {value}
                  </h2>

                  <p className="mt-2 text-[16px] text-gray-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
        </section>  

      {/* ================= IMPACT CARDS ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <div className="space-y-8">
          {impactCases.map((item, index) => (
            <ImpactCard
              key={index}
              {...item}
            />
          ))}
        </div>

      </section>

            {/* ================= DISCLOSURE NOTE ================= */}

      <section className="relative border-t border-slate-800 bg-[#080e19] py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative rounded-xl border border-slate-700 bg-[#151b27] px-8 py-6 text-center">
            <p className="text-sm leading-relaxed text-slate-400 max-w-3xl mx-auto">
              <span className="text-[#35E3D1]">Note:</span>{" "}
              Metrics are selectively shared for public profile. Detailed case
              studies with full context, methodology, and validation are
              available under NDA or in interview context.
            </p>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 w-1 h-10 bg-red-500 rotate-[12deg] origin-bottom-right" />
      </section>

      
          {/* CTA */}

          <div className="mt-24 border-t border-white/10 pt-20 text-center">

            <h2 className="text-4xl font-bold text-white">
              Interested in discussing opportunities?
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400"
              >
                Get in touch
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/experience"
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-cyan-400"
              >
                View experience
              </Link>

            </div>

          </div>

    </div>
  );
}