import React from "react";
import {
  Target,
  Users,
  Compass,
  Lightbulb,
  Brain,
  Globe,
  TrendingUp,
  BadgeCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import profileImage from "../assests/b.png";

export default function Profile() {
  const tags = [
    "25+ Years",
    "Global Institutions",
    "AI & Payments",
    "Regulated Environments",
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-[90vh] overflow-hidden bg-[#07111d] px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#07111d]/90" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

          <div className="max-w-3xl">

            {/* Section Label */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
                Executive Profile
              </span>
            </div>

            {/* Name */}
            <h1 className="text-6xl font-bold text-white lg:text-7xl">
              Bikram Banerjee
            </h1>

            {/* Title */}
            <h2 className="mt-6 text-3xl font-light text-cyan-400">
              Global Product Strategy &amp; AI Transformation Leader
            </h2>

            {/* Companies */}
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              VP Product · JPMorgan Chase &nbsp;|&nbsp;
              Visa &nbsp;·&nbsp;
              Mastercard/Vocalink &nbsp;·&nbsp;
              FIS &nbsp;·&nbsp;
              Barclays
            </p>

            {/* Tags */}
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
      </section>

      {/* ABOUT */}
      <section className="relative bg-[#07111d] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT */}

            <div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10">

                <img
                  src={profileImage}
                  alt="Bikram Banerjee"
                  className="h-[640px] w-full object-cover"
                />

                {/* Glass Card */}

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6">

                  <h3 className="text-2xl font-bold text-white">
                    Bikram Banerjee
                  </h3>

                  <p className="mt-2 text-cyan-400">
                    VP Product · JPMorgan Chase
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
                      AI
                    </span>

                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
                      Payments
                    </span>

                    <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
                      KYC / AML
                    </span>

                  </div>

                </div>

              </div>

              {/* Bottom Image */}

              <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10">

                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  className="h-44 w-full object-cover"

                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-xl font-bold text-white text-center px-6">
                    25+ years leading global financial product teams
                  </p>
                </div>
                <div className="absolute"></div>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-cyan-400"></div>

                <span className="uppercase tracking-[3px] text-sm text-cyan-400 font-semibold">
                  About
                </span>
              </div>

              <div className="space-y-8 text-md leading-9 text-slate-300">

                <p>
                  I am a senior product leader with over <strong className="text-white">25 years</strong> of
                  experience building and scaling financial products across global
                  institutions. My career spans strategic roles at JPMorgan Chase,
                  Visa, Mastercard/Vocalink, FIS, and Barclays—working at the
                  intersection of payments innovation, AI transformation, and
                  regulatory operations.
                </p>

                <p>
                  Currently, I lead AI-enabled product strategy for document
                  operations and KYC/AML platforms at JPMorgan Chase, driving
                  measurable improvements in efficiency, throughput, and operational
                  resilience. My work focuses on responsible AI adoption—building
                  systems that deliver value while maintaining the auditability and
                  controls regulated environments demand.
                </p>

                <p>
                  Prior to my current role, I held leadership positions in payments
                  strategy and compliance platforms at Visa, where I owned global
                  product roadmaps for bill payments and sanction screening
                  capabilities. At Mastercard/Vocalink, I led cross-functional teams
                  delivering A2A payments innovations and pay-by-bank propositions
                  across the UK and international markets.
                </p>

                <p>
                  Throughout my career, I have consistently delivered multi-year
                  transformation programmes, built high-performing teams, and created
                  measurable commercial and operational outcomes. I operate with
                  clarity, governance discipline, and a relentless focus on
                  execution.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="relative bg-[#07111d] py-24 overflow-hidden">

        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-white">
              Leadership Philosophy
            </h2>

            <p className="mt-5 text-lg text-slate-400">
              Principles that guide how I lead teams, build products,
              and deliver outcomes.
            </p>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Target className="text-cyan-400" size={26} />
              </div>

              <h3 className="mt-7 text-3xl font-semibold text-white">
                Outcome-Oriented
              </h3>

              <p className="mt-5 text-md text-[#94a3b8]">
                Every initiative starts with a clear definition of
                success. I work backwards from measurable outcomes,
                ensuring alignment between strategy, execution, and
                value delivery.
              </p>

            </div>

            {/* Card 2 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Users className="text-cyan-400" size={26} />
              </div>

              <h3 className="mt-7 text-3xl font-semibold text-white">
                Stakeholder Alignment
              </h3>

              <p className="mt-5 text-md text-[#94a3b8]">
                Complex transformations require executive sponsorship,
                cross-functional collaboration, and clear governance.
                I build coalitions that can execute through ambiguity.
              </p>

            </div>

            {/* Card 3 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Compass className="text-cyan-400" size={26} />
              </div>

              <h3 className="mt-7 text-3xl font-semibold text-white">
                Disciplined Execution
              </h3>

              <p className="mt-5 text-md text-[#94a3b8]">
                Strategy without execution is noise. I establish
                governance, OKRs, and accountability frameworks that
                turn ambitious plans into measurable outcomes.
              </p>

            </div>

            {/* Card 4 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Lightbulb className="text-cyan-400" size={26} />
              </div>

              <h3 className="mt-7 text-3xl font-semibold text-white">
                Innovation with Guardrails
              </h3>

              <p className="mt-5 text-md text-[#94a3b8]">
                In regulated environments, innovation must be
                responsible. I balance speed with compliance, building
                platforms that scale safely while maintaining trust.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CORE DOMAINS */}
      <section className="relative bg-[#07111d] py-24 border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <h2 className="text-5xl font-bold text-white">
              Core Domains
            </h2>

            <p className="mt-5 text-lg text-slate-400">
              Deep expertise across these interconnected areas of financial services.
            </p>

          </div>

          {/* Domain Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {/* AI */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Brain size={26} className="text-cyan-400" />
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                AI & Machine Learning Operations
              </h3>

              <ul className="mt-8 space-y-4">

                {[
                  "Document automation",
                  "Workflow intelligence",
                  "Human-in-the-loop systems",
                  "Governance frameworks",
                ].map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-400"
                  >
                    <CheckCircle size={16} className="text-cyan-400" />
                    {item}
                  </li>

                ))}

              </ul>

            </div>

            {/* Payments */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Globe size={26} className="text-cyan-400" />
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                Payments & Financial Services
              </h3>

              <ul className="mt-8 space-y-4">

                {[
                  "Card & A2A payments",
                  "Open banking",
                  "Request-to-pay",
                  "Cross-border solutions",
                ].map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-400"
                  >
                    <CheckCircle size={16} className="text-cyan-400" />
                    {item}
                  </li>

                ))}

              </ul>

            </div>

            {/* Regulatory */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <TrendingUp size={26} className="text-cyan-400" />
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                Regulatory & Compliance
              </h3>

              <ul className="mt-8 space-y-4">

                {[
                  "KYC / AML transformation",
                  "Sanctions screening",
                  "Risk management",
                  "Compliance-by-design",
                ].map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-400"
                  >
                    <CheckCircle size={16} className="text-cyan-400" />
                    {item}
                  </li>

                ))}

              </ul>

            </div>

            {/* Enterprise */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                <BadgeCheck size={26} className="text-cyan-400" />
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                Enterprise Transformation
              </h3>

              <ul className="mt-8 space-y-4">

                {[
                  "Operating model design",
                  "Portfolio management",
                  "M&A integration",
                  "Digital modernisation",
                ].map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-400"
                  >
                    <CheckCircle size={16} className="text-cyan-400" />
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </div>

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

      </section>
    </div>
  );
}