import { useState } from 'react'
import SectionMarker from '../components/SectionMarker.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <SectionMarker index="e08" label="Contact" />
      <h1 className="font-display text-3xl md:text-4xl text-paper mb-6 max-w-xl">
        Bring one specific problem. That's usually enough to start.
      </h1>
      <p className="font-body text-sm text-slate leading-relaxed max-w-lg mb-12">
        For advisory inquiries, speaking requests, or press, use the form below or write
        directly to{' '}
        <a href="mailto:margit@example.com" className="text-brass hover:text-paper transition-colors">
          margit@example.com
        </a>
        .
      </p>

      {sent ? (
        <div className="border border-brass/40 bg-surface p-8 max-w-md">
          <p className="font-mono text-[11px] text-brass tracking-widish uppercase mb-2">Sent</p>
          <p className="font-body text-sm text-slate leading-relaxed">
            Thank you — this reaches Margit directly. Expect a reply within two business days.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md space-y-6">
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
    </div>
  )
}
