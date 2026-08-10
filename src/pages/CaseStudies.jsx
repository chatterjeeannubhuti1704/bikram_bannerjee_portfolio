import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  CreditCard,
  Globe2,
  Building2,
  CircleCheck,
} from "lucide-react";

import cs from "../assests/cs.jpeg";

// Replace these with your actual image imports if these images
// are stored in your project's assets folder.
import aiImage from "../assests/focus1.jpeg";
import complianceImage from "../assests/focus3.jpeg";
import openBankingImage from "../assests/open-banking-case-study.jpeg";
import globalStrategyImage from "../assests/global-strategy-case-study.jpeg";
import enterpriseImage from "../assests/ex.jpeg";

const caseStudies = [
  {
    category: "AI",
    categoryLabel: "AI Transformation",
    company: "JPMORGAN CHASE",
    title: "Making Document Processing 28% Faster with AI",
    subtitle:
      "Global leader in commercial & investment banking",
    description:
      "Turning a slow, manual back-office into an AI-powered engine — without losing compliance.",
    image: aiImage,
    color: "cyan",
    icon: Zap,

    metrics: [
      ["28%", "Productivity uplift", "More documents processed per person, per day"],
      ["$8M+", "Annual cost saving", "Projected by 2026 from reduced manual effort"],
      ["↑ Accuracy", "Better quality", "Fewer errors, stronger compliance posture"],
      ["Full", "Regulatory audit", "Every AI decision is logged and explainable"],
    ],

    problem:
      "JPMorgan's operations team was drowning in paperwork. Thousands of documents — KYC forms, client onboarding files, transaction records — were being reviewed manually. This was slow, expensive, error-prone, and couldn't scale.",

    problemPoints: [
      "Staff spending hours on tasks a machine could do in seconds",
      "Errors slipping through due to fatigue and inconsistency",
      "Regulators demanding better audit trails and accuracy",
      "Growing backlog with no clear path to scale",
    ],

    whatIDid: [
      "Led the design and delivery of an AI-powered document processing system — one smart enough to read, classify, and validate documents, but with humans kept in the loop for the decisions that matter most.",
      "Built AI models that automatically read and extract data from complex financial documents",
      "Designed a confidence scoring system — high-confidence cases flow straight through, edge cases go to a human reviewer",
      "Created automated audit trails so every AI decision is logged and explainable to regulators",
      "Trained the AI continuously using real feedback from expert reviewers (RLHF)",
    ],
  },

  {
    category: "Compliance",
    categoryLabel: "Compliance & Payments",
    company: "VISA",
    title: "Screening 70% More Cross-Border Payments for Sanctions Risk",
    subtitle: "Global payments network processing 215B+ transactions/year",
    description:
      "Building the compliance guardrail that lets Visa move money safely — at global scale.",
    image: complianceImage,
    color: "blue",
    icon: Shield,

    metrics: [
      ["70%", "Revenue uplift", "Increase in cross-border payment revenue in pilot markets"],
      ["4 markets", "Pilot launch", "Successful rollout across initial target markets"],
      ["Real-time", "Screening speed", "Compliance checks in milliseconds, zero payment delay"],
      ["Regulatory", "Risk removed", "Full AML/sanctions compliance for Visa Direct"],
    ],

    problem:
      "When money moves across borders, there's a legal obligation to check it isn't going to sanctioned individuals or countries. Visa's push payment network was growing fast, but the compliance screening couldn't keep up — creating regulatory risk across multiple markets.",

    problemPoints: [
      "Regulatory screening to cover every international push payment in real-time",
      "Existing tools not designed for the speed and volume of modern card payments",
      "Risk of massive fines and reputational damage if a sanctioned payment slipped through",
      "Banks and issuers demanding a solution they could plug into easily",
    ],

    whatIDid: [
      "I owned the product from concept to launch — building a real-time sanctions screening engine that sits inside Visa's payment flow, checking every transaction before it completes.",
      "Designed the product architecture to screen payments in milliseconds — fast enough not to slow down transactions",
      "Built flexible rules that could be configured per country and per regulatory regime",
      "Led GTM across 4 pilot markets with tailored rollout plans for each",
      "Created the commercial model and pricing for banks to adopt the feature",
    ],
  },

  {
    category: "Open Banking",
    categoryLabel: "Open Banking · Payments",
    company: "VOCALINK MASTERCARD",
    title: 'Launching "Pay by Bank" — A New Way to Pay for Millions',
    subtitle:
      "Powers UK's real-time payment infrastructure — 90% of UK salaries, 70% of household bills",
    description:
      "Building the payment rail that lets anyone pay directly from their bank account — at the tap of a button.",
    image: openBankingImage,
    color: "purple",
    icon: CreditCard,

    metrics: [
      ["$65M", "Programme delivered", "On time and within budget"],
      ["20+ people", "Team led", "Across 4 geographically distributed locations"],
      ["35%", "Efficiency gain", "Through agile process improvements"],
      ["UK-first", "Market launch", "Account on file product in the UK market"],
    ],

    problem:
      "Cards dominate payments, but they carry high fees, fraud risk, and aren't ideal for every use case. Open banking created a new opportunity — let customers pay directly from their bank account, without a card. The challenge: nobody had done it at scale in the UK.",

    problemPoints: [
      "Banks, merchants, and consumers all needed to agree on a single way to pay",
      "The technology had to work across 55,000+ ATMs and dozens of bank apps",
      "Consumer trust needed to be built from scratch for a brand-new payment method",
      "Regulatory and scheme rules had to be navigated across multiple jurisdictions",
    ],

    whatIDid: [
      "I led the product and business analysis team that built Vocalink's Pay By Bank Account proposition — coordinating 20+ people across 4 countries to deliver a product used by millions today.",
      "Led end-to-end product development from ideation and requirements through to launch",
      "Built a globally interoperable system supporting POSNCP, QR codes, e-commerce, and telephone",
      "Managed a cross-functional team of 20+ product managers and 100+ developers",
      "Delivered the programme on time and within a $65M budget",
    ],
  },

  {
    category: "Global Strategy",
    categoryLabel: "Global Payments Strategy",
    company: "VISA (GLOBAL)",
    title: "Growing Visa's Bill Pay Market Share by 50% Across 5 Continents",
    subtitle:
      "5 continents · Multiple markets including US, UK, Canada, Nordic, Kazakhstan",
    description:
      "Taking a payment product from UK-only to a global powerhouse — country by country.",
    image: globalStrategyImage,
    color: "amber",
    icon: Globe2,

    metrics: [
      ["50%", "Market share growth", "Across target markets after launch"],
      ["5 continents", "Global reach", "US, UK, Canada, Nordic, Ukraine, Kazakhstan"],
      ["$800M+", "Revenue opportunity", "AI-enabled automation prediction 2023"],
      ["5B+ ops", "New business identified", "New card payment strategies for Visa"],
    ],

    problem:
      "Visa had a bill payment and Request-to-Pay product that worked in one market. The opportunity was massive — but expanding globally meant navigating different regulations, currencies, banking systems, and consumer habits in every country.",

    problemPoints: [
      "No single product roadmap that could flex to local market needs",
      "Each country had different regulatory requirements and partnerships",
      "Merchants, banks, and consumers needed separate GTM approaches",
      "Visa's internal teams in each region needed training and enablement",
    ],

    whatIDid: [
      "I owned the global product strategy and GTM for Visa's bill payment and Request-to-Pay suite — building a flexible product that could be localised for any market, and a playbook that regional teams could execute.",
      "Created region-by-region GTM playbooks with local value propositions",
      "Led technical deep-dives, pilot launches, and General Availability rollouts per market",
      "Expanded into Canada, CEE/EMEA, and multiple Nordic countries",
      "Built the product for both B2C consumers and B2B small businesses",
    ],
  },

  {
    category: "Enterprise",
    categoryLabel: "Enterprise Transformation",
    company: "BARCLAYS CORPORATE BANKING",
    title: "Delivering a £20M+ Corporate Banking Platform in 14 Months",
    subtitle:
      "One of the UK's largest banks serving corporate and institutional clients",
    description:
      "A mission-critical digital transformation — under pressure, on time, and recognised as peak performance.",
    image: enterpriseImage,
    color: "green",
    icon: Building2,

    metrics: [
      ["£20M+", "Programme value", "Greenfield platform delivered on time"],
      ["14 months", "Delivery timeline", "Tight deadline met without compromise"],
      ["10+ analysts", "Team led", "Cross-functional delivery team"],
      ["Peak performer", "Recognition", "Formally recognised by Barclays leadership"],
    ],

    problem:
      "Barclays needed to modernise its corporate internet banking platform — a system used by thousands of businesses for everything from payroll to international transfers. The deadline was tight, the stakes were high, and the legacy systems were complex.",

    problemPoints: [
      "Legacy platform unable to meet modern security and UX standards",
      "Regulatory pressure to deliver account switching capabilities for corporate clients",
      "Multiple competing internal priorities and stakeholders",
      "Tight 14-month delivery window with no room for slippage",
    ],

    whatIDid: [
      "I led a team of 10+ analysts to deliver the Barclays iPortal (iPortal) — a unified digital channel for all corporate banking services, including registration, authentication, and mobile access.",
      "Led requirements, analysis, and documentation for the full platform build",
      "Coordinated cross-functional delivery across tech, risk, compliance, and operations",
      "Drove the Corporate Account Switching programme — a high-priority regulatory initiative",
      "Delivered within the 14-month deadline and was recognised as a peak performer",
    ],
  },
];

const colorClasses = {
  cyan: {
    border: "border-cyan-500/40",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    icon: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  blue: {
    border: "border-blue-500/40",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    icon: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  purple: {
    border: "border-purple-500/40",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    icon: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  amber: {
    border: "border-amber-500/40",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    icon: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  green: {
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    icon: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
};

function CaseStudyCard({ study }) {
  const [open, setOpen] = useState(false);

  const colors = colorClasses[study.color];
  const Icon = study.icon;

  return (
    <article
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#101722]/95 shadow-2xl`}
    >
      {/* Image */}
      <div className="relative h-[190px] overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101722] via-black/10 to-black/5" />

        {/* Category */}
        <div
          className={`absolute left-4 top-4 rounded-full border px-4 py-1 text-[11px] font-medium ${colors.border} ${colors.bg} ${colors.text}`}
        >
          {study.categoryLabel}
        </div>

        {/* Company / title */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="mb-2 flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-lg border ${colors.icon}`}
            >
              <Icon size={16} />
            </div>

            <span className="text-[10px] font-bold tracking-wide text-slate-300">
              {study.company}
            </span>
          </div>

          <h2 className="text-lg font-bold leading-tight text-white">
            {study.title}
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-[10px] uppercase tracking-wide text-slate-500">
          {study.subtitle}
        </p>

        <p className={`mt-3 text-sm leading-6 ${colors.text}`}>
          {study.description}
        </p>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {study.metrics.map(([value, label, detail]) => (
            <div
              key={label}
              className={`rounded-lg border ${colors.border} ${colors.bg} px-3 py-3 text-center`}
            >
              <div className={`text-lg font-bold ${colors.text}`}>
                {value}
              </div>

              <div className="mt-0.5 text-[10px] font-bold text-white">
                {label}
              </div>

              <div className="mt-1 text-[8px] leading-3 text-slate-500">
                {detail}
              </div>
            </div>
          ))}
        </div>

        {/* Toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="mt-5 flex w-full items-center gap-2 border-b border-white/10 pb-3 text-left text-xs text-slate-400 transition hover:text-white"
        >
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {open ? "Hide details" : "Show details"}
        </button>

        {/* Details */}
        {open && (
          <div className="grid gap-8 pt-5 md:grid-cols-2">
            {/* Problem */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />

                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  The Problem
                </h3>
              </div>

              <p className="text-xs leading-5 text-slate-300">
                {study.problem}
              </p>

              <ul className="mt-3 space-y-2">
                {study.problemPoints.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 text-xs leading-5 text-slate-400"
                  >
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-red-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* What I did */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <CircleCheck
                  size={13}
                  className="text-cyan-400"
                />

                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  What I Did
                </h3>
              </div>

              <ul className="space-y-3">
                {study.whatIDid.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-xs leading-5 text-slate-300"
                  >
                    <CircleCheck
                      size={12}
                      className="mt-1 shrink-0 text-cyan-400"
                    />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "AI",
    "Compliance",
    "Open Banking",
    "Global Strategy",
    "Enterprise",
  ];

  const filteredStudies =
    activeTab === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeTab);

  return (
    <>
      {/* ================= HERO / YOUR EXISTING BANNER ================= */}
      <section
        className="relative min-h-[90vh] overflow-hidden bg-[#07111d] px-6"
        style={{
          backgroundImage: `url(${cs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#07111d]/70" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            {/* Section Label */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
                Case Studies
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl font-bold text-white lg:text-6xl">
              Real Problems.
              <br />
              <span className="text-cyan-400">
                Measurable Results.
              </span>
            </h1>

            {/* Companies */}
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              Five high-stakes programmes across JPMorgan Chase, Visa,
              Mastercard/Vocalink, and Barclays — each one transforming how
              global finance operates.
            </p>

            {/* Metrics */}
            <div className="mt-14 flex flex-wrap gap-10">
              {[
                ["$8M+", "Cost savings delivered"],
                ["70%", "Payment revenue growth"],
                ["50%", "Market share gain"],
                ["£20M+", "Platform delivered"],
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
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="relative bg-[#080d16] mx-auto max-w-[85%] px-5 py-16 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const active = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`
                    rounded-full border px-5 py-2.5
                    text-sm font-medium
                    transition-all duration-200
                    ${
                      active
                        ? "border-cyan-400 bg-cyan-400 text-[#07111d] shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                    }
                  `}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <div className="space-y-7">
            {filteredStudies.map((study) => (
              <CaseStudyCard
                key={study.title}
                study={study}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}