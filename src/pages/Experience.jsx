import React from "react";
import experience from "../assests/ex.jpeg";

const experiences = [
  {
    title: "Vice President, Product – AI / KYC / AML / Document Operations",
    company: "JPMorgan Chase",
    location: "London, UK",
    period: "2021 – Present",
    color: "bg-purple-500",
    tags: ["AI-enabled ops", "Governance", "Controls", "Transformation"],
    points: [
      "Leading product strategy and portfolio execution for AI initiatives across regulated operational domains",
      "Driving operating model change: automation, quality, auditability, and throughput improvements",
      "Partnering across product, engineering, risk, compliance and operations to deliver measurable outcomes",
      "Building governance frameworks for responsible AI adoption with human-in-the-loop controls"
    ],
  },
  {
    title: "Senior Product Leader",
    company: "FIS",
    location: "London, UK",
    period: "2018 – 2021",
    color: "bg-indigo-500",
    tags: ["Payments", "Platform", "Integration", "Enterprise"],
    points: [
      "Product ownership for enterprise payments platform capabilities",
      "Delivered integration projects across banking and financial services clients",
      "Built product roadmaps aligned with market requirements and client needs",
      "Managed cross-functional delivery teams and vendor relationships"
    ],
  },
  {
    title: "Director, Product Management (Payments & Compliance Platforms)",
    company: "Visa",
    location: "London, UK",
    period: "2015 – 2018",
    color: "bg-orange-500",
    tags: ["Payments", "Sanctions", "Global GTM", "Ecosystems"],
    points: [
      "Owned global product strategy for bill payments and compliance-related payment capabilities",
      "Led multi-region expansion, stakeholder alignment, and adoption initiatives across partner ecosystems",
      "Built growth strategy cases and delivery roadmaps across multi-year programmes",
      "Managed complex stakeholder relationships across scheme, issuer, and merchant partners"
    ],
  },
  {
    title: "Head of Product & Business Analysis (Cards / Pay by Bank / A2A)",
    company: "Vocalink (Mastercard)",
    location: "London, UK",
    period: "2012 – 2015",
    color: "bg-red-500",
    tags: ["A2A", "Open Banking", "Delivery", "Partnerships"],
    points: [
      "Led cross-functional teams delivering A2A payments innovations and ecosystem expansion programmes",
      "Owned programme governance, delivery metrics, and stakeholder management across large initiatives",
      "Developed pay-by-bank propositions and request-to-pay capabilities",
      "Built partnership strategies and commercial models for ecosystem growth"
    ],
  },
  {
    title: "Product Manager",
    company: "Barclays",
    location: "London, UK",
    period: "2009 – 2012",
    color: "bg-cyan-500",
    tags: ["Banking", "Digital", "Transformation", "Customer"],
    points: [
      "Product management for digital banking and customer-facing platforms",
      "Delivered transformation initiatives improving customer experience",
      "Collaborated with technology, operations, and business teams",
      "Built foundations in financial services product management"
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-[#07111d]">

      {/* ================= BANNER ================= */}
      <div
        className="relative min-h-[90vh]"
        style={{
          backgroundImage: `url(${experience})`,
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
                Experience
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl font-bold text-white lg:text-7xl">
              Career Timeline
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              Leadership roles across global financial institutions,
              delivering payments innovation, AI transformation, and
              enterprise-scale programmes.
            </p>

          </div>
        </div>
      </div>

      {/* ================= CAREER TIMELINE ================= */}
      <div className="relative bg-[#07111d] px-6 py-16 lg:px-8">

        <div className="mx-auto max-w-[1100px]">

          <div className="relative">

            {/* Timeline line */}
            <div
              className="
          absolute
          left-[30px]
          top-[55px]
          bottom-[55px]
          hidden
          w-px
          bg-[#27394d]
          md:block
        "
            />

            <div className="space-y-5">

              {experiences.map((item, index) => {

                const companyInitial = item.company
                  .replace("(", "")
                  .charAt(0)
                  .toUpperCase();

                return (
                  <div
                    key={index}
                    className="relative flex gap-4 md:gap-8"
                  >

                    {/* ================= TIMELINE ICON ================= */}
                    <div className="relative z-10 hidden shrink-0 md:block">

                      <div
                        className={`
                    flex
                    h-[62px]
                    w-[62px]
                    items-center
                    justify-center
                    rounded-[15px]
                    ${item.color}
                    text-xl
                    font-semibold
                    text-white
                    shadow-lg
                    ring-4
                    ring-[#07111d]
                  `}
                      >
                        {companyInitial}
                      </div>

                    </div>

                    {/* ================= EXPERIENCE CARD ================= */}
                    <div
                      className="
                  w-full
                  rounded-[18px]
                  border
                  border-[#293849]
                  bg-[#111a27]
                  px-7
                  py-7
                  transition-all
                  duration-300
                  hover:border-[#405269]
                  hover:bg-[#141f2d]
                  hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]
                  md:px-7
                  md:py-7
                "
                    >

                      {/* ================= HEADER ================= */}
                      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                        {/* Title + Company */}
                        <div className="min-w-0">

                          <h3
                            className="
                        text-[19px]
                        font-bold
                        leading-[1.35]
                        tracking-[-0.2px]
                        text-white
                        md:text-[20px]
                      "
                          >
                            {item.title}
                          </h3>

                          {/* Company */}
                          <p
                            className="
                        mt-1.5
                        text-[16px]
                        font-medium
                        text-cyan-400
                      "
                          >
                            {item.company}
                          </p>

                        </div>

                        {/* ================= META ================= */}
                        <div
                          className="
                      flex
                      shrink-0
                      flex-col
                      gap-2
                      text-sm
                      text-slate-400
                      md:min-w-[145px]
                      md:items-start
                    "
                        >

                          {/* Period */}
                          <div className="flex items-center gap-2">

                            <svg
                              className="h-[17px] w-[17px] text-slate-400"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            >
                              <rect
                                x="3"
                                y="4"
                                width="18"
                                height="17"
                                rx="2"
                              />
                              <path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>

                            <span>
                              {index === 0 ? item.period : "Previous"}
                            </span>

                          </div>

                          {/* Location */}
                          <div className="flex items-center gap-2">

                            <svg
                              className="h-[17px] w-[17px] text-slate-400"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            >
                              <path
                                d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                              />
                              <circle cx="12" cy="10" r="2.5" />
                            </svg>

                            <span>{item.location}</span>

                          </div>

                        </div>

                      </div>


                      {/* ================= TAGS ================= */}
                      <div className="mt-6 flex flex-wrap gap-2.5">

                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                        rounded-full
                        border
                        border-[#2d3a4a]
                        bg-[#151f2d]
                        px-3.5
                        py-1.5
                        text-[12px]
                        font-medium
                        text-[#91a4ba]
                      "
                          >
                            {tag}
                          </span>
                        ))}

                      </div>


                      {/* ================= DESCRIPTION ================= */}
                      <ul className="mt-6 space-y-3">

                        {item.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="
                        flex
                        items-start
                        gap-3
                        text-[14px]
                        leading-6
                        text-[#91a4ba]
                      "
                          >

                            {/* Check circle */}
                            <span className="mt-[3px] shrink-0">

                              <svg
                                className="h-[17px] w-[17px] text-cyan-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                              >
                                <circle cx="12" cy="12" r="9" />
                                <path d="m8.5 12 2.2 2.2 4.8-5" />
                              </svg>

                            </span>

                            <span>{point}</span>

                          </li>
                        ))}

                      </ul>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}