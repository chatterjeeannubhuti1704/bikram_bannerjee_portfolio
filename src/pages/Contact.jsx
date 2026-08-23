import React, { useState } from "react";
import {
  Linkedin,
  MapPin,
  Download,
  MessageSquare,
  Send,
} from "lucide-react";

import { send } from "@emailjs/browser";
import contactus from "../assests/contactus.jpeg";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setForm((current) => ({
      ...current,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      company: form.company,
      subject: form.subject,
      to_email: "chatterjeeannubhuti1704@gmail.com",
      message: form.message,
    };

    send(
      "SERVICE_ID",
      "TEMPLATE_ID",
      templateParams,
      "PUBLIC_KEY"
    )
      .then(() => {
        setSent(true);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send. Please try again.");
      });
  }

  return (
    <div className="min-h-screen bg-[#070d18] text-white">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section
        className="relative min-h-[90vh] overflow-hidden bg-[#07111d] px-6"
        style={{
          backgroundImage: `url(${contactus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#07111d]/80" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-0 sm:px-6">
          <div className="max-w-3xl">

            {/* Section Label */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
                Contact
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s Connect
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              For executive roles, advisory engagements, speaking
              opportunities, or partnership discussions.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================== */}
      <section className="bg-[#070d18] px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row lg:items-start">

          {/* =====================================================
              FORM
          ====================================================== */}
          <div className="w-full rounded-2xl border border-slate-700/70 bg-[#111824] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.18)] sm:p-7 lg:w-1/2">

            {sent ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                  <Send size={20} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[2px] text-cyan-400">
                  Sent
                </p>

                <h2 className="mt-2 text-xl font-bold text-white">
                  Message received
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                  Thank you for reaching out. Your message has been
                  received and will be reviewed shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-lg border border-slate-700 px-5 py-2.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Send another message
                </button>

              </div>
            ) : (
              <>
                {/* Form Heading */}
                <h2 className="mb-7 text-base font-bold text-white">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit}>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-medium text-slate-400"
                      >
                        Name <span className="text-cyan-400">*</span>
                      </label>

                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full rounded-md border border-slate-700 bg-[#1a2230] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium text-slate-400"
                      >
                        Email <span className="text-cyan-400">*</span>
                      </label>

                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full rounded-md border border-slate-700 bg-[#1a2230] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400"
                      />
                    </div>

                  </div>

                  {/* Company + Subject */}
                  <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-xs font-medium text-slate-400"
                      >
                        Company / Organisation
                      </label>

                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full rounded-md border border-slate-700 bg-[#1a2230] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-xs font-medium text-slate-400"
                      >
                        Subject <span className="text-cyan-400">*</span>
                      </label>

                      <select
                        id="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-slate-700 bg-[#1a2230] px-3 py-2.5 text-sm text-slate-400 outline-none transition focus:border-cyan-400"
                      >
                        <option value="">Select a topic</option>
                        <option value="Executive Opportunity">
                          Executive Opportunity
                        </option>
                        <option value="Advisory Engagement">
                          Advisory Engagement
                        </option>
                        <option value="Speaking Opportunity">
                          Speaking Opportunity
                        </option>
                        <option value="Partnership">
                          Partnership
                        </option>
                        <option value="Other">
                          Other
                        </option>
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div className="mt-5">

                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium text-slate-400"
                    >
                      Message <span className="text-cyan-400">*</span>
                    </label>

                    <textarea
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your opportunity or how I can help..."
                      required
                      rows={5}
                      className="w-full resize-none rounded-md border border-slate-700 bg-[#1a2230] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400"
                    />

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-3 text-xs font-semibold text-white transition hover:opacity-90"
                  >
                    Send Message
                    <Send size={14} />
                  </button>

                </form>
              </>
            )}

          </div>

          {/* =====================================================
              RIGHT COLUMN
          ====================================================== */}
          <div className="flex w-full flex-col gap-5 lg:w-[290px]">

            {/* LinkedIn */}
            <div className="rounded-2xl border border-slate-700/70 bg-[#111824] p-5 transition hover:border-slate-600">

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Linkedin size={19} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    LinkedIn
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Connect professionally
                  </p>
                </div>

              </div>

              {/* Intentionally empty — link will be added later */}

            </div>

            {/* Location */}
            <div className="rounded-2xl border border-slate-700/70 bg-[#111824] p-5">

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                  <MapPin size={19} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Location
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    London, United Kingdom
                  </p>
                </div>

              </div>

            </div>

            {/* Download CV */}
            <div className="rounded-2xl border border-slate-700/70 bg-[#111824] p-5">

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                  <Download size={19} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Download CV
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Executive resume (PDF)
                  </p>
                </div>

              </div>

              {/* Intentionally no href/link yet */}
              <button
                type="button"
                disabled
                className="mt-4 w-full rounded-lg border border-slate-700 px-4 py-2.5 text-xs font-medium text-slate-500"
              >
                Download CV
              </button>

            </div>

            {/* Response Time */}
            <div className="rounded-2xl border border-amber-500/30 bg-[#211b17] p-5">

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <MessageSquare size={19} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Response Time
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Typically respond within 2-3 business days.
                    For urgent matters, please indicate in your
                    message.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}