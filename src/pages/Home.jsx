import React from "react";
import { Link } from "react-router-dom";

import {
  MapPin,
  TrendingUp,
  Building2,
  Target,
  Users,
  Briefcase,
  Globe,
  ArrowRight,
  Lightbulb,
  Compass,
  CheckCircle2,
  Zap,
  CreditCard,
  Shield,
  Cpu,
  ShieldCheck,
  Lock,
  Settings,
  Sparkles,
  BarChart3,
  //Linkedin,
} from "lucide-react";

import profileImage from "../assests/b.png";

import banner from "../assests/ex.jpeg";
export default function Home() {
  const tags = [
    "AI / Document Ops",
    "KYC / AML",
    "Payments Strategy",
    "Open Banking / A2A",
    "Fraud & Trust",
    "Global GTM",
  ];
  const highlights = [
    {
      icon: TrendingUp,
      value: "~28%",
      title: "Efficiency Uplift",
      subtitle: "AI-enabled productivity",
      color: "text-cyan-400",
      bg: "from-cyan-500/10 to-transparent",
    },
    {
      icon: Building2,
      value: "£20M+",
      title: "Programme Delivery",
      subtitle: "Transformation at scale",
      color: "text-blue-400",
      bg: "from-blue-500/10 to-transparent",
    },
    {
      icon: Target,
      value: "$800M+",
      title: "Opportunity Case",
      subtitle: "Strategic growth",
      color: "text-purple-400",
      bg: "from-purple-500/10 to-transparent",
    },
    {
      icon: Users,
      value: "20+",
      title: "Global Teams Led",
      subtitle: "Cross-functional delivery",
      color: "text-yellow-400",
      bg: "from-yellow-500/10 to-transparent",
    },
    {
      icon: Briefcase,
      value: "25+",
      title: "Years Experience",
      subtitle: "Senior leadership",
      color: "text-cyan-400",
      bg: "from-cyan-500/10 to-transparent",
    },
    {
      icon: Globe,
      value: "5+",
      title: "Global Institutions",
      subtitle: "Tier-1 financial firms",
      color: "text-emerald-400",
      bg: "from-emerald-500/10 to-transparent",
    },
  ];
  const focusAreas = [
    {
      icon: Cpu,
      image: "/assets/ai.jpg",
      title: "AI Transformation & Controls",
      description:
        "Scaling AI responsibly with governance, auditability and human-in-the-loop operating models in regulated environments.",
      tags: [
        "Control frameworks",
        "Human-in-the-loop",
        "Auditability",
      ],
      color: "text-cyan-400",
    },
    {
      icon: ShieldCheck,
      image: "/assets/kyc.jpg",
      title: "KYC / AML & Regulatory Platforms",
      description:
        "Product strategy for onboarding and compliance transformation balancing controls with customer experience.",
      tags: [
        "Policy alignment",
        "Compliance-by-design",
        "Operating models",
      ],
      color: "text-blue-400",
    },
    {
      icon: CreditCard,
      image: "/assets/payment.jpg",
      title: "Payments Strategy & Ecosystems",
      description:
        "Building propositions across rails, A2A, Open Banking and partner ecosystems.",
      tags: [
        "A2A",
        "Open Banking",
        "Scheme rails",
      ],
      color: "text-purple-400",
    },
    {
      icon: Lock,
      image: "/assets/fraud.jpg",
      title: "Fraud / Trust / Compliance-by-Design",
      description:
        "Embedding controls early with policy alignment and platform resilience.",
      tags: [
        "Risk controls",
        "Trust",
        "Platform resilience",
      ],
      color: "text-yellow-400",
    },
    {
      icon: Settings,
      image: "/assets/operations.jpg",
      title: "Operating Models & Portfolio Delivery",
      description:
        "Governance, OKRs and cross-functional alignment to deliver transformation outcomes.",
      tags: [
        "Governance",
        "OKRs",
        "Scale delivery",
      ],
      color: "text-emerald-400",
    },
  ];
  const impactCards = [
    {
      icon: Sparkles,
      image: "/assets/impact-ai.jpg",
      stat: "~28%",
      statLabel: "Efficiency Uplift",
      title: "AI-enabled Document Operations Transformation",
      challenge:
        "High manual effort, inconsistent quality, operational risk.",
      approach:
        "AI-enabled workflow design + controls + policy alignment + rollout governance.",
      outcome:
        "Measurable productivity uplift, improved throughput and stronger auditability.",
      color: "text-cyan-400",
    },
    {
      icon: Building2,
      image: "/assets/impact-payment.jpg",
      stat: "Scaled",
      statLabel: "Ecosystem Delivery",
      title: "Pay-by-Bank / A2A Proposition Leadership",
      challenge:
        "Adoption barriers across ecosystem partners.",
      approach:
        "Proposition design, stakeholder alignment, delivery roadmap and GTM enablement.",
      outcome:
        "Improved adoption, clearer value exchange and delivery at scale.",
      color: "text-blue-400",
    },
    {
      icon: BarChart3,
      image: "/assets/impact-global.jpg",
      stat: "$800M+",
      statLabel: "Opportunity Case",
      title: "Global Payments Product Expansion",
      challenge:
        "Fragmented requirements across regions.",
      approach:
        "Global roadmap, compliance alignment, partner strategy and release governance.",
      outcome:
        "Faster rollouts, stronger product posture and improved commercial traction.",
      color: "text-purple-400",
    },
  ];
  return (
    <div>
      <section
        className="relative min-h-screen overflow-hidden bg-[#07111d]"
        style={{
          backgroundImage:
            `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b17]/95 via-[#081726]/85 to-[#081726]/70"></div>

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-12 px-6 py-20 lg:flex-row flex-col">

          {/* LEFT CONTENT */}

          <div className="max-w-2xl">

            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              ● Global Product Strategy & AI Transformation Leader
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
              Where{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Payments,
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                AI
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Regulatory Trust
              </span>{" "}
              converge.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
              Senior product leader with{" "}
              <strong className="text-white">25+ years</strong> delivering
              transformation programmes, AI-enabled operational products,
              and payments innovation across global institutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-cyan-400" />
                London, United Kingdom
              </div>
              {/* 
            <div className="flex items-center gap-2 text-cyan-400">
              <Linkedin size={18} />
              LinkedIn
            </div> */}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:bg-cyan-300">
                Executive Contact
                <ArrowRight size={18} />
              </button>

              <button className="rounded-xl border border-gray-600 px-8 py-4 text-white hover:border-cyan-400">
                View Impact
              </button>

              <button className="rounded-xl border border-gray-600 px-8 py-4 text-white hover:border-cyan-400">
                Full Profile
              </button>

            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-700 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* RIGHT CARD */}

          <div className="w-full max-w-xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">

            <div className="flex gap-5 border-b border-white/20 p-6">

              <img
                src={profileImage}
                alt="Bikram Banerjee"
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div>

                <h3 className="text-3xl font-bold text-white">
                  Bikram Banerjee
                </h3>

                <p className="mt-1 text-cyan-300">
                  VP Product · JPMorgan Chase
                </p>

                <p className="mt-2 text-sm text-cyan-400">
                  ● Open to opportunities
                </p>

              </div>

            </div>

            <div className="space-y-8 p-6">

              <p className="leading-8 text-gray-300">
                Delivering measurable outcomes across JPMorgan Chase,
                Visa, Mastercard, Vocalink, FIS and Barclays —
                at the intersection of payments, AI and
                regulatory trust.
              </p>

              <div className="grid grid-cols-3 gap-4">

                {[
                  ["25+", "Years"],
                  ["Global", "Scale"],
                  ["AI-led", "Outcomes"],
                ].map(([title, sub]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/20 bg-white/5 py-6 text-center"
                  >
                    <div className="text-3xl font-bold text-white">
                      {title}
                    </div>

                    <div className="mt-2 text-gray-400">
                      {sub}
                    </div>
                  </div>
                ))}

              </div>

              <div className="flex gap-3">

                {[
                  "JP",
                  "V",
                  "MC",
                  "FIS",
                  "B",
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex h-11 w-11 items-center justify-center rounded-lg text-sm font-bold text-white
                  ${[
                        "bg-blue-600",
                        "bg-indigo-600",
                        "bg-orange-600",
                        "bg-gray-600",
                        "bg-blue-500",
                      ][i]
                      }`}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================= CAREER HIGHLIGHTS ======================= */}

      <section className="relative bg-[#07111d] py-24 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e933,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-10 h-px bg-cyan-500"></div>

            <span className="uppercase tracking-[3px] text-sm text-cyan-400 font-semibold">
              Career Highlights
            </span>

            <div className="w-10 h-px bg-cyan-500"></div>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`relative rounded-3xl border border-white/20 bg-gradient-to-br ${item.bg} bg-[#0f1b2b]/90 backdrop-blur-lg p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]`}
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className={item.color} size={24} />
                  </div>

                  <h2 className={`mt-6 text-4xl font-bold ${item.color}`}>
                    {item.value}
                  </h2>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= EXECUTIVE SNAPSHOT ======================= */}

      <section className="relative bg-[#07111d] py-28 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111d] via-[#0b1625] to-[#07111d]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-cyan-400"></div>

                <span className="uppercase tracking-[3px] text-cyan-400 text-sm font-semibold">
                  Executive Snapshot
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">

                Strategic Leadership at the{" "}

                <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  Intersection
                </span>

                {" "}of Growth, Operations & Compliance

              </h2>

              <p className="mt-10 text-xl leading-10 text-slate-300">
                I lead complex product portfolios that sit at the intersection of
                commercial growth, operational performance and regulatory trust.
                My work spans AI-enabled document operations, KYC/AML
                transformation, payments ecosystems and global go-to-market
                execution.
              </p>

              <p className="mt-8 text-lg leading-9 text-slate-400">
                I operate with clear governance, stakeholder alignment and delivery
                discipline—turning ambiguity into scalable platforms that endure.
              </p>

              {/* Images */}

              <div className="grid grid-cols-3 gap-4 mt-10">

                <img
                  src="assets/profile1.jpg"
                  alt=""
                  className="h-28 w-full rounded-2xl object-cover"
                />

                <img
                  src="assets/profile2.jpg"
                  alt=""
                  className="h-28 w-full rounded-2xl object-cover"
                />

                <img
                  src="assets/profile3.jpg"
                  alt=""
                  className="h-28 w-full rounded-2xl object-cover"
                />

              </div>

              <button className="mt-10 flex items-center gap-2 text-cyan-400 font-semibold hover:gap-4 transition-all">
                Read full executive profile
                <ArrowRight size={18} />
              </button>

            </div>

            {/* RIGHT */}

            <div className="space-y-6">

              {/* WHAT I DO */}

              <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg p-8">

                <div className="flex items-center gap-4 mb-7">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Lightbulb className="text-cyan-400" />
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    What I Do
                  </h3>

                </div>

                <div className="space-y-5">

                  {[
                    "Define product vision, strategy, and multi-year roadmaps",
                    "Build executive-level stakeholder alignment",
                    "Lead AI-enabled transformation programmes",
                    "Deliver measurable outcomes at scale",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">

                      <CheckCircle2
                        className="text-cyan-400 mt-1"
                        size={18}
                      />

                      <p className="text-slate-300">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

              {/* HOW I OPERATE */}

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8">

                <div className="flex items-center gap-4 mb-7">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                    <Compass className="text-blue-400" />
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    How I Operate
                  </h3>

                </div>

                <div className="space-y-5">

                  {[
                    "Work backwards from outcomes, not outputs",
                    "Establish governance frameworks that scale",
                    "Build high-performing cross-functional teams",
                    "Execute across technology, risk and commercial",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">

                      <CheckCircle2
                        className="text-blue-400 mt-1"
                        size={18}
                      />

                      <p className="text-slate-300">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

              {/* BOTTOM BOXES */}

              <div className="grid grid-cols-3 gap-5">

                <div className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center transition hover:border-cyan-400">

                  <Zap className="mx-auto mb-5 text-cyan-400" size={24} />

                  <p className="text-slate-300">
                    AI & Automation
                  </p>

                </div>

                <div className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center transition hover:border-blue-400">

                  <CreditCard className="mx-auto mb-5 text-blue-400" size={24} />

                  <p className="text-slate-300">
                    Payments
                  </p>

                </div>

                <div className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center transition hover:border-purple-400">

                  <Shield className="mx-auto mb-5 text-purple-400" size={24} />

                  <p className="text-slate-300">
                    KYC / AML
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================= FOCUS AREAS ======================= */}

      <section className="relative bg-[#07111d] py-28 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center">

            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="w-8 h-px bg-cyan-400"></div>

              <span className="uppercase tracking-[3px] text-sm text-cyan-400 font-semibold">
                Focus Areas
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white">

              Core Domains of{" "}

              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Strategic Value
              </span>

            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Areas where I bring repeatable strategic value and delivery capability
              across complex enterprise environments.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">

            {focusAreas.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="overflow-hidden rounded-3xl border border-white/20 bg-[#101827]/80 backdrop-blur-lg transition duration-300 hover:border-cyan-400 hover:-translate-y-2"
                >

                  <div className="relative">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-52 object-cover"
                    />

                    <div className="absolute left-5 bottom-5 h-12 w-12 rounded-xl bg-[#0f172a]/80 backdrop-blur flex items-center justify-center">

                      <Icon className={item.color} size={22} />

                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-slate-400 leading-7">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">

                      {item.tags.map((tag) => (

                        <span
                          key={tag}
                          className="rounded-full border border-gray-600 px-3 py-1 text-xs text-gray-300"
                        >
                          {tag}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

          <div className="flex justify-center mt-14">

            <Link
              to="/focus-areas"
              className="flex items-center gap-2 rounded-xl border border-gray-600 px-8 py-4 text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              Explore all focus areas
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* ======================= SELECTED IMPACT ======================= */}

      <section className="relative bg-[#07111d] py-28 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            <div>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-cyan-400"></div>

                <span className="uppercase tracking-[3px] text-cyan-400 text-sm font-semibold">
                  Selected Impact
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">

                Delivering{" "}

                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Measurable
                </span>

                <br />

                Outcomes

              </h2>

            </div>

            <p className="text-lg leading-8 text-slate-400">
              A high-level view of outcomes delivered across roles.
              Detailed context and validation available on request.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {impactCards.map((card) => {

              const Icon = card.icon;

              return (

                <div
                  key={card.title}
                  className="rounded-3xl overflow-hidden border border-white/10 bg-[#121b28] backdrop-blur-lg hover:border-cyan-400 transition duration-300"
                >

                  <div className="relative">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-52 w-full object-cover"
                    />

                    <div className="absolute left-5 bottom-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f172a]/80 backdrop-blur">

                      <Icon className={card.color} size={22} />

                    </div>

                    <div className="absolute right-5 bottom-5 text-right">

                      <h3 className={`text-4xl font-bold ${card.color}`}>
                        {card.stat}
                      </h3>

                      <p className="text-sm text-white">
                        {card.statLabel}
                      </p>

                    </div>

                  </div>

                  <div className="p-7">

                    <h3 className="text-2xl font-bold text-white">
                      {card.title}
                    </h3>

                    <div className="mt-7 space-y-5">

                      <div>

                        <h4 className="uppercase text-xs tracking-widest text-slate-500">
                          Challenge
                        </h4>

                        <p className="mt-2 text-slate-400">
                          {card.challenge}
                        </p>

                      </div>

                      <div>

                        <h4 className="uppercase text-xs tracking-widest text-slate-500">
                          Approach
                        </h4>

                        <p className="mt-2 text-slate-400">
                          {card.approach}
                        </p>

                      </div>

                      <div>

                        <h4 className="uppercase text-xs tracking-widest text-slate-500">
                          Outcome
                        </h4>

                        <p className={`${card.color} mt-2 font-medium`}>
                          {card.outcome}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* ======================= CTA ======================= */}

      <section
        className="relative overflow-hidden py-28"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}

        <div className="absolute inset-0 bg-[#07111d]/90"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready to discuss strategic opportunities?
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-300">
            Available for executive roles, advisory engagements, and
            speaking opportunities in payments, AI transformation,
            and regulatory operations.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400"
            >
              Executive Contact
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/advisory"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              Speaking & Advisory
            </Link>

          </div>

        </div>

      </section>

    
    </div>
    
  );

}
