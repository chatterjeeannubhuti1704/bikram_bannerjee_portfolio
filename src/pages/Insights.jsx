import React, { useState } from "react";
import {
  ArrowRight,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Clock3,
  FileText,
  Settings,
  Tag,
  Brain,
  CreditCard,
  Code2,
  SlidersHorizontal,
} from "lucide-react";

import { Link } from "react-router-dom";
import banner from "../assests/inst.jpeg";

// Card images
// Change these filenames if your actual asset names are different.
import aiGovernanceImage from "../assests/ai-governance.jpeg";
import paymentsImage from "../assests/focus3.jpeg";
import operatingModelsImage from "../assests/focus5.jpeg";

const tags = [
  "AI Governance",
  "Payments",
  "Operating Models",
  "Frameworks",
];

const tabs = [
  "All",
  "AI Governance",
  "Payments",
  "Operating Models",
];

const articles = [
  {
    id: "operating-models",
    category: "Operating Models",
    title: "Building Operating Models That Deliver",
    subtitle:
      "How governance, incentives, and clarity drive outcomes",
    shortDescription:
      "Practical frameworks for designing operating models that enable execution in complex transformation programmes. Lessons from leading multi-million pound programmes across global institutions.",
    fullDescription:
      "Successful transformation requires more than strategy. This article explores how governance structures, incentives, accountability, and delivery discipline work together to create operating models that consistently turn strategic intent into measurable outcomes across complex organisations.",
    readTime: "12 min read",
    image: operatingModelsImage,
    icon: Settings,
    iconStyle: "bg-purple-500/30 text-white",
    tags: [
      "Governance",
      "OKRs",
      "Cross-functional alignment",
      "Delivery discipline",
    ],
  },
  {
    id: "payments",
    category: "Payments",
    title: "Open Banking & Pay-by-Bank Ecosystems",
    subtitle:
      "Where A2A wins, how adoption happens, and what product leaders must get right",
    shortDescription:
      "Analysing the dynamics of A2A payments adoption, ecosystem partnerships, and the strategic decisions that determine success in pay-by-bank propositions.",
    fullDescription:
      "Account-to-account payments are reshaping the payments landscape. This article examines adoption drivers, ecosystem dynamics, customer behaviour, commercial models, and the strategic choices product leaders need to make when building successful pay-by-bank propositions.",
    readTime: "10 min read",
    image: paymentsImage,
    icon: CreditCard,
    iconStyle: "bg-indigo-500/40 text-white",
    tags: [
      "A2A payments",
      "Ecosystem dynamics",
      "Adoption strategies",
      "Value exchange",
    ],
  },
  {
    id: "ai-governance",
    category: "AI Governance",
    title: "AI Governance in Regulated Operations",
    subtitle:
      "How to scale AI with controls, auditability, and responsible adoption",
    shortDescription:
      "Exploring frameworks for deploying AI in high-stakes environments where compliance, transparency, and human oversight are non-negotiable. Drawing from experience leading AI transformation in financial services.",
    fullDescription:
      "Regulated environments demand more than capability — they demand trust. This piece explores how to build AI adoption frameworks that satisfy risk, legal, and compliance stakeholders while still delivering operational value. Key areas include defining the governance charter, structuring human-in-the-loop workflows, establishing auditability trails, and creating escalation paths when AI output requires review. Drawing directly from experience leading AI transformation across document operations and KYC workflows.",
    readTime: "8 min read",
    image: aiGovernanceImage,
    icon: Brain,
    iconStyle: "bg-cyan-500/30 text-white",
    tags: [
      "Control frameworks",
      "Human-in-the-loop",
      "Auditability",
      "Policy alignment",
    ],
    defaultExpanded: true,
  },
];

const frameworkTags = ["All", "AI", "Payments", "Governance"];

const frameworks = [
  {
    id: "ai-adoption-maturity",
    title: "AI Adoption Maturity Model",
    description:
      "A framework for assessing and planning responsible AI adoption in regulated environments.",
    category: "AI",
    icon: Code2,
  },
  {
    id: "ecosystem-partnership",
    title: "Ecosystem Partnership Canvas",
    description:
      "Tool for mapping value exchange and alignment in multi-stakeholder ecosystems.",
    category: "Payments",
    icon: CreditCard,
  },
  {
    id: "transformation-governance",
    title: "Transformation Governance Template",
    description:
      "Governance structure and cadence for complex enterprise programmes.",
    category: "Governance",
    icon: Settings,
  },
];


function ArticleCard({ article, expanded, onToggle }) {
  const Icon = article.icon;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-700/70 bg-[#111824] shadow-[0_15px_50px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-cyan-400/40">
      {/* Image */}
      <div className="relative h-[145px] overflow-hidden sm:h-[170px]">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Image gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-[#111824]" />

        {/* Bookmark */}
        <button
          type="button"
          aria-label={`Bookmark ${article.title}`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-slate-300 backdrop-blur-md transition hover:bg-black/50 hover:text-white"
        >
          <Bookmark size={16} />
        </button>

        {/* Category icon */}
        <div
          className={`absolute bottom-3 left-5 flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur-md ${article.iconStyle}`}
        >
          <Icon size={19} />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-3 sm:px-7 sm:pb-6">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-medium text-cyan-400">
            {article.category}
          </span>

          <span className="text-slate-600">•</span>

          <span className="flex items-center gap-1">
            <Clock3 size={12} />
            {article.readTime}
          </span>

          <span className="text-slate-600">•</span>

          <span className="flex items-center gap-1">
            <FileText size={12} />
            Article
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-bold leading-tight text-white sm:text-xl">
          {article.title}
        </h3>

        {/* Subtitle */}
        <p className="mt-2 text-sm leading-6 text-cyan-400/80">
          {article.subtitle}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {article.shortDescription}
        </p>

        {/* Expanded content */}
        {expanded && (
          <div className="mt-3 border-l border-cyan-400/60 pl-3">
            <p className="text-xs leading-5 text-slate-300 sm:text-[13px]">
              {article.fullDescription}
            </p>
          </div>
        )}

        {/* Bottom row */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 bg-[#1a2230] px-3 py-1 text-[10px] text-slate-400 sm:text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Show more / less */}
          <button
            type="button"
            onClick={onToggle}
            className="flex shrink-0 items-center gap-1 self-end text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read more"}

            {expanded ? (
              <ChevronUp size={14} />
            ) : (
              <ChevronDown size={14} />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

function FrameworkCard({ framework }) {
  const Icon = framework.icon;

  return (
    <article className="group relative rounded-xl border border-slate-700/70 bg-[#111824] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_15px_45px_rgba(0,0,0,0.2)] sm:p-6">
      {/* Bookmark */}
      <button
        type="button"
        aria-label={`Bookmark ${framework.title}`}
        className="absolute right-4 top-4 text-slate-500 transition hover:text-slate-200"
      >
        <Bookmark size={16} strokeWidth={1.6} />
      </button>

      {/* Icon */}
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
        <Icon size={18} strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3 className="max-w-[85%] text-base font-bold leading-6 text-white sm:text-[15px]">
        {framework.title}
      </h3>

      {/* Description */}
      <p className="mt-2 max-w-sm text-xs leading-5 text-slate-400">
        {framework.description}
      </p>

      {/* Category */}
      <div className="mt-4">
        <span className="inline-flex rounded-full bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium text-cyan-400">
          {framework.category}
        </span>
      </div>
    </article>
  );
}

export default function Insights() {
  const [activeTab, setActiveTab] = useState("All");

  const [activeFrameworkTag, setActiveFrameworkTag] = useState("All");

  // AI Governance starts open, matching your reference screenshot.
  const [expandedCards, setExpandedCards] = useState(
    () =>
      articles.reduce((acc, article) => {
        acc[article.id] = Boolean(article.defaultExpanded);
        return acc;
      }, {})
  );

  const toggleCard = (id) => {
    setExpandedCards((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  const filteredArticles =
    activeTab === "All"
      ? articles
      : articles.filter((article) => article.category === activeTab);

  return (
    <div className="min-h-screen bg-[#070d18] text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section
        className="relative min-h-[90vh] overflow-hidden bg-[#07111d] px-6"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#07111d]/90" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-0 sm:px-6">
          <div className="max-w-3xl">
            {/* Section Label */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
                Thought Leadership
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Insights & Perspectives
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              Articles, frameworks, and perspectives on AI governance,
              payments ecosystems, and operating models for transformation.
            </p>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-slate-200 backdrop-blur sm:px-5 sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED ARTICLES
      ========================================================== */}
      <section className="bg-[#070d18] px-4 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Tag size={17} className="text-slate-500" />

              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Featured Articles
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {tabs.map((tab) => {
                const active = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`
                      rounded-full border px-4 py-2 text-xs font-medium
                      transition-all duration-200
                      ${active
                        ? "border-cyan-400 bg-cyan-400 text-[#07111d]"
                        : "border-slate-700 bg-[#111824] text-slate-400 hover:border-slate-500 hover:text-white"
                      }
                    `}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-5">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                expanded={expandedCards[article.id]}
                onToggle={() => toggleCard(article.id)}
              />
            ))}
          </div>

          {/* Empty fallback */}
          {filteredArticles.length === 0 && (
            <div className="rounded-2xl border border-slate-800 bg-[#111824] px-6 py-12 text-center">
              <p className="text-sm text-slate-400">
                No articles available in this category.
              </p>
            </div>
          )}
        </div>


      </section>

      {/* =========================================================
    FRAMEWORKS & TOOLS
========================================================= */}
      <section className="bg-[#070d18] px-4 pb-20 pt-4 sm:px-6 lg:pb-24">
        <div className="mx-auto max-w-6xl">

          {/* Section Header */}
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

            {/* Heading */}
            <div>
              <div className="flex items-center gap-3">
                <SlidersHorizontal
                  size={17}
                  className="text-slate-500"
                />

                <div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    Frameworks & Tools
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Practical tools developed from experience leading transformation programmes.
                  </p>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {frameworkTags.map((tag) => {
                const active = activeFrameworkTag === tag;

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveFrameworkTag(tag)}
                    className={`
                rounded-full border px-4 py-2 text-[11px] font-medium
                transition-all duration-200
                ${active
                        ? "border-cyan-400 bg-cyan-400 text-[#07111d]"
                        : "border-slate-700 bg-[#111824] text-slate-400 hover:border-slate-500 hover:text-white"
                      }
              `}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Framework Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {frameworks
              .filter(
                (framework) =>
                  activeFrameworkTag === "All" ||
                  framework.category === activeFrameworkTag
              )
              .map((framework) => (
                <FrameworkCard
                  key={framework.id}
                  framework={framework}
                />
              ))}
          </div>

          {/* Empty State */}
          {frameworks.filter(
            (framework) =>
              activeFrameworkTag === "All" ||
              framework.category === activeFrameworkTag
          ).length === 0 && (
              <div className="rounded-xl border border-slate-800 bg-[#111824] px-6 py-12 text-center">
                <p className="text-sm text-slate-400">
                  No frameworks available in this category.
                </p>
              </div>
            )}
        </div>
      </section>
    </div>
  );
}