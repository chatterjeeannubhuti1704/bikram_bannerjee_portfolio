import SectionMarker from '../components/SectionMarker.jsx'
import {
  Zap,
  ChevronDown,
} from "lucide-react";

const filters = [
  "All",
  "AI",
  "Compliance",
  "Open Banking",
  "Global Strategy",
  "Enterprise",
];

const caseStudies = [
  {
    id: 1,
    title: "Making Document Processing 28% Faster with AI",
    company: "JPMORGAN CHASE",
    category: "AI",
    tag: "AI Transformation",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",

    description:
      "Turning a slow, manual back-office into an AI-powered engine without compromising governance or regulatory controls.",

    metrics: [
      {
        value: "28%",
        title: "Productivity uplift",
        subtitle: "More documents processed per person",
      },
      {
        value: "$8M+",
        title: "Annual cost saving",
        subtitle: "Reduced manual effort",
      },
      {
        value: "↑ Accuracy",
        title: "Better quality",
        subtitle: "Fewer errors & stronger controls",
      },
      {
        value: "Full Audit",
        title: "Regulator ready",
        subtitle: "Every AI decision is traceable",
      },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="bg-[#07111d]">

      {/* ================= HERO ================= */}

      <section
        className="relative h-[540px] overflow-hidden flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#07111d]/80"></div>

        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111d]/95 via-[#07111d]/75 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6">

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-cyan-400"></div>

            <span className="uppercase tracking-[3px] text-sm font-semibold text-cyan-400">
              Case Studies
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
            Real Problems.
            <br />
            <span className="text-cyan-400">
              Measurable Results.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            Five high-stakes programmes across JPMorgan Chase, Visa,
            Mastercard/Vocalink, and Barclays — each demonstrating how
            strategic product leadership, AI transformation, and regulatory
            execution create measurable business outcomes.
          </p>

          {/* Metrics */}

          <div className="mt-14 flex flex-wrap gap-12">

            {[
              ["$8M+", "Cost savings delivered"],
              ["70%", "Payment revenue growth"],
              ["50%", "Market share gain"],
              ["£20M+", "Platform delivered"],
            ].map(([value, label]) => (
              <div key={value}>
                <h2 className="text-5xl font-bold text-cyan-400">
                  {value}
                </h2>

                <p className="mt-2 text-gray-400">
                  {label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}