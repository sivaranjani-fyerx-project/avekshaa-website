"use client";

// components/WhyChooseUs.tsx
// Next.js (App Router) — requires Tailwind CSS. Tabbed section with client state.
// import WhyChooseUs from "@/components/WhyChooseUs";

import { useState } from "react";
import Image from "next/image";

/* ------------------------------- Icons ------------------------------- */

function CheckSquare({ color }: { color: string }) {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px]"
      style={{ backgroundColor: color }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
        <path d="M5 12.5l4 4 10-10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7 17L17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------- Data -------------------------------- */

type Feature = {
  label: string;
  title: string;
  desc: string;
  checks: string[];
  accent: string;
};

const features: Feature[] = [
  {
    label: "AI-Powered Reliability Engineering",
    title: "AI-Powered Reliability Engineering",
    desc: "Harness AI-driven diagnostics and automation to detect, predict, and resolve reliability risks before they ever reach production.",
    checks: ["Automated root cause analysis", "Predictive risk detection", "Continuous optimization"],
    accent: "#6366f1",
  },
  {
    label: "Patented Performance Assurance Platform",
    title: "Patented Performance Assurance Platform",
    desc: "Our patented P-A-S-S™ platform assures performance, availability, scalability, and security across your most critical systems.",
    checks: ["2 US patents", "Unified assurance platform", "Enterprise-grade governance"],
    accent: "#7c3aed",
  },
  {
    label: "Proven Enterprise Delivery Frameworks",
    title: "Proven Enterprise Delivery Frameworks",
    desc: "Battle-tested delivery frameworks bring repeatable, low-risk execution to every reliability engagement, at any scale.",
    checks: ["Repeatable methodology", "Reduced delivery risk", "Faster time to value"],
    accent: "#10b981",
  },
  {
    label: "Deep BFSI, Telecom & Retail Expertise",
    title: "Deep BFSI, Telecom & Retail Expertise",
    desc: "Decades of domain expertise across banking, insurance, telecom, and retail power solutions tuned to your industry's demands.",
    checks: ["Regulated-industry experience", "High-volume workloads", "Domain-specialist teams"],
    accent: "#2563eb",
  },
  {
    label: "End-to-End Performance, Availability & Scalability Assurance",
    title: "End-to-End Performance, Availability & Scalability Assurance",
    desc: "From architecture to production, we assure performance, availability, and scalability across the entire application lifecycle.",
    checks: ["Full-lifecycle coverage", "Peak-load readiness", "Always-on availability"],
    accent: "#d946ef",
  },
  {
    label: "Measurable Business Outcomes & ROI",
    title: "Measurable Business Outcomes & ROI",
    desc: "Every engagement ties directly to measurable business outcomes—protected revenue, lower risk, and clear return on investment.",
    checks: ["Quantifiable ROI", "Revenue protection", "Executive-ready reporting"],
    accent: "#f59e0b",
  },
];

/* ------------------------------ Section ------------------------------ */

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const f = features[active];

  return (
    <section className="w-full bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-[#7c7a90]">
            Why Avekshaa
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#15142b] sm:text-[3rem] sm:leading-[1.05]">
            Why Enterprises Choose Avekshaa
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#6f6c86]">
            A patented platform, proven delivery frameworks, and deep industry expertise—built to make reliability a
            measurable business advantage, not an afterthought.
          </p>
        </div>

        {/* Tabs / labels */}
        <div className="mt-[29px] mb-[33px] flex flex-wrap justify-center gap-3">
          {features.map((feat, i) => {
            const isActive = i === active;
            return (
              <button
                key={feat.label}
                onClick={() => setActive(i)}
                className={`rounded-xl border px-5 py-2.5 text-sm transition ${
                  isActive
                    ? "border-[#e2e0ee] bg-white font-bold text-[#15142b] shadow-[0_8px_22px_rgba(30,20,70,0.08)]"
                    : "border-transparent bg-[#f4f4f6] font-medium text-[#6f6c86] hover:bg-[#eeedf3]"
                }`}
              >
                {feat.label}
              </button>
            );
          })}
        </div>

        {/* Body */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Left illustration (changes per tab) */}
          <div
            key={active}
            className="flex min-h-[440px] items-center justify-center rounded-[28px] p-10"
            style={{ backgroundColor: f.accent + "14" }}
          >
            <Image
              src="/heroright.avif"
              alt="Avekshaa platform overview"
              width={2048}
              height={1420}
              className="h-auto w-full max-w-[420px]"
            />
          </div>

          {/* Right content (changes per tab) */}
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight text-[#15142b] sm:text-[2.5rem] sm:leading-[1.1]">
              {f.title}
            </h3>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#6f6c86]">{f.desc}</p>

            <ul className="mt-8 space-y-4">
              {f.checks.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <CheckSquare color={f.accent} />
                  <span className="text-lg font-semibold text-[#15142b]">{c}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mb-10 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: "rgb(17, 60, 110)", marginTop: "21px" }}
            >
              Talk to an Expert
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
