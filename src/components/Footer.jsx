import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07111d] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-14 md:grid-cols-3">

          {/* LEFT */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Bikram Banerjee
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Global Product Strategy & AI Transformation Leader.
              Senior product leader with 25+ years across payments,
              AI, and regulatory operations.
            </p>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition"
            >
              Connect on LinkedIn

              <ArrowRight size={18} />
            </a>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-5">

              <Link
                to="/"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Profile
              </Link>

              <Link
                to="/experience"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Experience
              </Link>

              <Link
                to="/impact"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Impact
              </Link>

              <Link
                to="/contact"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* FOCUS AREAS */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Focus Areas
            </h3>

            <div className="mt-6 flex flex-col gap-5">

              <Link
                to="/focus-areas"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                AI Transformation
              </Link>

              <Link
                to="/focus-areas"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                KYC / AML Platforms
              </Link>

              <Link
                to="/focus-areas"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Payments Strategy
              </Link>

              <Link
                to="/focus-areas"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Operating Models
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8">

          <p className="text-sm text-slate-500">
            © 2026 Bikram Banerjee. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0 text-sm text-slate-500">
            www.bikrambanerjee.com — Executive Profile
          </p>

        </div>

      </div>

    </footer>
  );
}