import { useState } from 'react';
import { send } from '@emailjs/browser'
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
import contactus from '../assests/contactus.jpeg'
import { Link } from "react-router-dom";
import SectionMarker from '../components/SectionMarker.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

 function handleSubmit(e) {
    e.preventDefault()
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      to_email: 'chatterjeeannubhuti1704@gmail.com', // destination
      subject: `New contact from ${form.name}`,
      message: form.message,
    }
    send('SERVICE_ID','TEMPLATE_ID', templateParams, 'PUBLIC_KEY')
      .then(() => setSent(true))
      .catch(err => {
        console.error('EmailJS error', err)
        alert('Failed to send — check console')
      })
  }


  return (


    <div>
      
      <section
        className="relative min-h-[90vh] overflow-hidden bg-[#07111d] px-6"
        style={{
          backgroundImage:
          `url(${contactus})`,
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
                Contact
              </span>
            </div>

            {/* Name */}
            <h1 className="text-6xl font-bold text-white lg:text-7xl">
              Let's Connect
            </h1>

            {/* Companies */}
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              For executive roles, advisory engagements, speaking opportunities, or partnership discussions.
            </p>

          </div>

        </div>
      </section>
      
      <section className='flex mx-auto w-3/4 items-top justify-between'>
      {sent ? (
        <div className="border border-brass/40 bg-surface p-8 max-w-md">
          <p className="font-mono text-[11px] text-brass tracking-widish uppercase mb-2">Sent</p>
          <p className="font-body text-sm text-slate leading-relaxed">
            Thank you — this reaches Margit directly. Expect a reply within two business days.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-6 w-1/2 border border-white/10 rounded-2xl p-6 md:p-8">
          <div>
            <label htmlFor="name" className="font-mono text-[11px] text-slate tracking-widish uppercase block mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full bg-surface border border-hairline text-paper text-sm px-4 py-3 focus:border-brass outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-[11px] text-slate tracking-widish uppercase block mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full bg-surface border border-hairline text-paper text-sm px-4 py-3 focus:border-brass outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-[11px] text-slate tracking-widish uppercase block mb-2">
              What's the problem?
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full bg-surface border border-hairline text-paper text-sm px-4 py-3 focus:border-brass outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="font-mono text-xs tracking-widish uppercase bg-brass text-ink px-6 py-3 hover:bg-paper transition-colors"
          >
            Send
          </button>
        </form>
      )}
      </section>
    </div>
  )
}
