import React from "react";
import advice from "../assests/advice.jpeg";
import advice2 from "../assests/advice2.jpeg";
import {
  UsersRound,
  Mic,
  MessageSquare,
  CircleCheck,
  Clock3,
  Lightbulb,
  CalendarDays, ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const engagementData = [
  {
    title: "Advisory Engagement",
    description:
      "Strategic guidance for product leaders, executive teams, and boards navigating complex transformation programmes.",
    items: [
      "Executive advisory sessions",
      "Strategy review and validation",
      "Operating model design",
      "Transformation programme guidance",
    ],
    availability: "Limited availability",
    icon: UsersRound,
    iconClass: "bg-[#123f4b] text-white",
  },
  {
    title: "Speaking Engagements",
    description:
      "Keynotes, panels, and workshops on AI transformation, payments innovation, and product leadership.",
    items: [
      "Conference keynotes (30-45 min)",
      "Panel discussions",
      "Executive workshops (half-day)",
      "Fireside chats",
    ],
    availability: "Select events",
    icon: Mic,
    iconClass: "bg-[#4b351f] text-white",
  },
  {
    title: "Mentoring",
    description:
      "One-on-one guidance for senior product managers and directors building careers in financial services.",
    items: [
      "Career development sessions",
      "Leadership coaching",
      "Product strategy guidance",
      "Transition support",
    ],
    availability: "Limited slots",
    icon: MessageSquare,
    iconClass: "bg-[#45265b] text-white",
  },
];
const topics = [
  {
    title: "AI Transformation in Regulated Operations",
    description:
      "Building AI-enabled products with governance, controls, and responsible adoption frameworks.",
    format: "45 min keynote / 2hr workshop",
  },
  {
    title: "Payments Ecosystem Strategy",
    description:
      "A2A, open banking, and pay-by-bank propositions—what works and why.",
    format: "30 min keynote / panel",
  },
  {
    title: "Product Leadership at Scale",
    description:
      "Building and leading product teams in complex enterprise environments.",
    format: "45 min keynote / 3hr workshop",
  },
  {
    title: "Operating Models for Transformation",
    description:
      "Governance, OKRs, and cross-functional alignment that deliver outcomes.",
    format: "30 min keynote / half-day workshop",
  },
  {
    title: "From Strategy to Execution",
    description:
      "Practical frameworks for turning ambitious plans into measurable outcomes.",
    format: "45 min keynote / 2hr workshop",
  },
];
const steps = [
  {
    number: "01",
    title: "Initial Contact",
    description: "Reach out via the contact form with your requirements.",
  },
  {
    number: "02",
    title: "Discovery Call",
    description: "Brief call to understand context, goals, and fit.",
  },
  {
    number: "03",
    title: "Proposal",
    description: "Tailored engagement plan with scope and timeline.",
  },
  {
    number: "04",
    title: "Engagement",
    description: "Delivery with clear milestones and outcomes.",
  },
];

export default function Advisory() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#07111d]">
      <section
        className="relative min-h-[90vh] overflow-hidden bg-[#07111d] px-6"
        style={{
          backgroundImage:
            `url(${advice})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#07111d]/80" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

          <div className="max-w-3xl">

            {/* Section Label */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
                Advisory & Speaking
              </span>
            </div>

            {/* Name */}
            <h1 className="text-6xl font-bold text-white lg:text-7xl">
              How to Engage
            </h1>

            {/* Companies */}
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              Available for select advisory engagements, speaking opportunities, and mentoring in payments, AI transformation, and product leadership.
            </p>

          </div>

        </div>
      </section>
      {/* ================= ENGAGEMENT CARDS ================= */}
      <section className="border-b border-[#2a3443]">
        {/* ================= BANNER ================= */}
        <div className="max-w-[85%] mx-auto group relative mx-auto min-h-[245px] overflow-hidden rounded-b-[20px] transition-all duration-700 ">

          {/* Background image */}
          <div
            className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${advice2})`,
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#050b14]/70 transition-all duration-700 group-hover:bg-[#050b14]/60" />

          {/* Banner Content */}
          <div className="relative z-10 flex min-h-[245px] items-center px-8 sm:px-10 lg:px-11">
            <div className="max-w-[650px]">

              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />

                <span className="text-[12px] font-semibold uppercase tracking-[0.5px] text-cyan-300">
                  Available for select engagements
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-[650px] text-[25px] font-bold leading-[1.45] text-white sm:text-[28px]">
                Strategic advisory, speaking, and senior
                <br className="hidden sm:block" />
                product mentoring
              </h1>

            </div>
          </div>

        </div>
        {/* ================= CARDS ================= */}
        <div className="max-w-[85%] mx-auto py-12 lg:px-0 lg:py-14">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {engagementData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex min-h-[438px] flex-col rounded-[17px] border border-[#2a3443] bg-[#121923] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3c4a5d]"
                >

                  {/* Icon */}
                  <div
                    className={`mb-6 flex h-[52px] w-[54px] items-center justify-center rounded-[13px] border border-white/10 ${item.iconClass}`}
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 text-[21px] font-bold leading-tight text-white">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="min-h-[72px] text-[15px] leading-[1.55] text-[#8ca8ca]">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mt-5 space-y-3">

                    {item.items.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2.5"
                      >
                        <CircleCheck
                          size={17}
                          strokeWidth={2}
                          className="mt-[1px] shrink-0 text-cyan-400"
                        />

                        <span className="text-[14px] leading-5 text-[#d7e2ef]">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* Divider */}
                  <div className="mt-auto mb-4 pt-5">
                    <div className="h-px w-full bg-[#2c3542]" />
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-2 text-[#738aa8]">
                    <Clock3
                      size={18}
                      strokeWidth={1.8}
                    />

                    <span className="text-[14px]">
                      {item.availability}
                    </span>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>
      {/* =================SPEAKING TOPICS ================= */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 max-w-[85%] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-9 max-w-7xl text-center">

          <h2 className="text-[18px] font-bold text-white sm:text-[20px]">
            Speaking Topics
          </h2>

          <p className="mt-3 text-[12px] text-[#8ca8ca] sm:text-[13px]">
            Topics available for keynotes, panels, and workshops.
          </p>

        </div>

        {/* ================= TOPICS ================= */}
        <div className="mx-auto max-w-[1170px] space-y-3">

          {topics.map((topic, index) => (
            <div
              key={index}
              className="group relative rounded-[9px] border border-[#2a3443] bg-[#121923] px-4 py-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#151e2a] sm:px-5 sm:py-4"
            >
              <div className="flex items-start gap-4">

                {/* Lightbulb */}
                <div className="mt-[1px] shrink-0">
                  <Lightbulb
                    size={16}
                    strokeWidth={1.8}
                    className="text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">

                  <h3 className="text-[14px] font-semibold leading-5 text-white sm:text-[15px]">
                    {topic.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#8ca8ca] sm:text-[12px]">
                    {topic.description}
                  </p>

                </div>

                {/* Format */}
                <div className="hidden shrink-0 pt-[1px] text-right text-[9px] text-[#7890ae] sm:block sm:text-[10px]">
                  {topic.format}
                </div>

              </div>

              {/* Mobile format */}
              <div className="ml-8 mt-2 text-[9px] text-[#7890ae] sm:hidden">
                {topic.format}
              </div>

            </div>
          ))}

        </div>

      </section>
      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-[#080f1a] px-6 py-20 lg:py-24 border-t border-b border-[#1e3945]">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-7xl text-center">

          {/* Process label */}
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-px w-7 bg-cyan-400" />

            <span className="text-[12px] font-semibold uppercase tracking-[2px] text-cyan-400">
              Process
            </span>
          </div>

          <h2 className="text-[30px] font-bold leading-tight text-white sm:text-[32px]">
            How It Works
          </h2>

        </div>

        {/* ================= STEPS ================= */}
        <div className="relative mx-auto mt-16 max-w-[90%]">

          {/* Connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[36px] hidden h-px bg-[#1e3945] md:block" />

          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-4">

            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative rounded-[17px] border border-[#d8dce1] bg-[#111822] px-6 pb-7 pt-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
              >

                {/* Number */}
                <div className="relative z-10 mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-[#12404a] to-[#172b3d]">
                  <span className="text-[13px] font-semibold text-cyan-400">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-[16px] font-bold text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-[210px] text-[14px] leading-6 text-[#7189a8]">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>
      {/* ================= READY TO DISCUSS ================= */}
      <section className="bg-[#080f1a] px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-[75%]">

        <div className="rounded-[17px] border border-cyan-400/20 bg-[#0b1d29] px-6 py-14 text-center sm:px-10 lg:py-14">

          {/* Calendar Icon */}
          <div className="mb-7 flex justify-center">
            <CalendarDays
              size={50}
              strokeWidth={1.8}
              className="text-cyan-400"
            />
          </div>

          {/* Heading */}
          <h2 className="text-[30px] font-bold leading-tight text-white sm:text-[34px]">
            Ready to discuss?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[650px] text-[16px] leading-6 text-[#8ca8ca]">
            Whether you're exploring advisory support, planning an event, or
            seeking mentorship, I'd be happy to explore how I can help.
          </p>

          {/* CTA */}
          <div className="mt-9 flex justify-center">
            <button
            onClick={() => {navigate("/contact")}}
              className="group flex items-center gap-4 rounded-[12px] bg-[#10b5a8] px-9 py-4 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(16,181,168,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#13c2b4] hover:shadow-[0_14px_35px_rgba(16,181,168,0.3)]"
            >
              <span>Start a conversation</span>

              <ArrowRight
                size={21}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

        </div>

      </div>
    </section>      
    </div>
  )
}
