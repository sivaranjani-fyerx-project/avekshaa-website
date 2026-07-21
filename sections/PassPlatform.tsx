// components/PassPlatform.tsx
// Next.js (App Router or Pages) — requires Tailwind CSS.
// Drop into a page, e.g. app/page.tsx:  import PassPlatform from "@/components/PassPlatform";
// No client hooks are used, so this can render as a Server Component.

import React from "react";

/* ------------------------------- Icons ------------------------------- */

type IconProps = { className?: string };

function PatentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2.75l6.5 2.6v5.1c0 4.3-2.8 7.6-6.5 8.8-3.7-1.2-6.5-4.5-6.5-8.8v-5.1L12 2.75z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 11.6l1.9 1.9 3.5-3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RootCauseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 8.2v5.6M8.2 11h5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.6 15.6l3.4 3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PredictiveIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3.5 15.5l4.2-4.4 3 2.6 5-5.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.2 5.4h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18.6h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GovernanceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3.75" y="3.75" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.25" y="3.75" width="7" height="4.5" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.25" y="11.25" width="7" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3.75" y="13.75" width="7" height="6.5" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 12h13M12 5.5L18.5 12 12 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------- Data -------------------------------- */

const features = [
  {
    title: "2 US Patents",
    description: "Recognized innovation in AI-powered performance engineering and reliability assurance.",
    Icon: PatentIcon,
  },
  {
    title: "Intelligent Root Cause Analysis",
    description: "Reduce troubleshooting time and accelerate issue resolution through automated diagnostics.",
    Icon: RootCauseIcon,
  },
  {
    title: "Predictive Risk Intelligence",
    description: "Identify potential performance and availability risks before they impact operations.",
    Icon: PredictiveIcon,
  },
  {
    title: "Enterprise Reliability Governance",
    description:
      "Track service-level objectives, business impact, and operational performance through a unified executive dashboard.",
    Icon: GovernanceIcon,
  },
];

/* --------------------------- Mountain scene -------------------------- */

function MountainBackground() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 560"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7ece6" />
          <stop offset="0.55" stopColor="#dfe6df" />
          <stop offset="1" stopColor="#eef1ec" />
        </linearGradient>
        <linearGradient id="fog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3f5f1" stopOpacity="0" />
          <stop offset="1" stopColor="#f3f5f1" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="400" height="560" fill="url(#sky)" />
      <path d="M0 300 L70 210 L150 300 L230 200 L320 300 L400 235 L400 560 L0 560 Z" fill="#b9c6bd" opacity="0.55" />
      <path d="M0 350 L90 260 L180 350 L270 250 L360 350 L400 305 L400 560 L0 560 Z" fill="#a3b3a7" opacity="0.6" />
      <path d="M0 410 L110 320 L210 410 L300 330 L400 400 L400 560 L0 560 Z" fill="#8ca091" opacity="0.65" />
      <rect width="400" height="560" fill="url(#fog)" />
    </svg>
  );
}

/* ------------------------------ Gauge -------------------------------- */

function ReliabilityGauge({ value = 87 }: { value?: number }) {
  return (
    <div className="relative flex flex-col items-center">
      <svg viewBox="0 0 160 96" className="w-44">
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#14532d" />
            <stop offset="1" stopColor="#1f7a43" />
          </linearGradient>
        </defs>
        {/* track */}
        <path
          d="M14 86 A66 66 0 0 1 146 86"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="14"
          strokeLinecap="round"
          pathLength={100}
        />
        {/* progress */}
        <path
          d="M14 86 A66 66 0 0 1 146 86"
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={`${value} 100`}
        />
      </svg>
      <div className="-mt-12 flex flex-col items-center">
        <span className="text-[11px] font-medium text-white/70">Reliability Score</span>
        <span className="text-3xl font-bold leading-tight text-white">{value}%</span>
        <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-[#14532d]">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" aria-hidden>
            <path d="M6 18L18 6M18 6h-6M18 6v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          4+
        </span>
      </div>
    </div>
  );
}

/* ------------------------------ Section ------------------------------ */

export default function PassPlatform() {
  return (
    <section className="w-full bg-[#f4f4ef] px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header row */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
              The P-A-S-S™ Platform
            </div>
            <h2 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-tight text-[#1b1b1b] sm:text-[2.6rem]">
              AI-Powered Enterprise
              <br className="hidden sm:block" /> Reliability Engineering
            </h2>
          </div>

        
        </div>

        {/* Main grid */}
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1.25fr]">
          {/* Featured card */}
          <div className="relative flex min-h-[520px] flex-col overflow-hidden rounded-3xl">
            <MountainBackground />

            <div className="relative z-10 flex h-full flex-col p-7">
              <h3 className="text-2xl font-bold leading-snug text-[#1b1b1b]">
                Performance, Availability,
                <br /> Scalability &amp; Security
              </h3>

              {/* Dashboard mockup */}
              <div className="mt-6 rounded-[20px] border border-white/40 bg-[#16311f]/45 p-3 shadow-xl backdrop-blur-md">
                {/* Top stat card */}
                <div className="flex items-center justify-between rounded-2xl bg-white/90 px-3.5 py-3 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef2ec] text-[#14532d]">
                      <GovernanceIcon className="h-5 w-5" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[11px] font-medium text-neutral-500">Services Monitored</p>
                      <p className="text-xl font-bold text-[#1b1b1b]">42</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#eef2ec] px-2.5 py-1 text-[11px] font-semibold text-[#14532d]">
                    99.8% uptime
                  </span>
                </div>

                {/* Gauge */}
                <div className="mt-3 flex justify-center rounded-2xl bg-[#0f2417]/35 px-4 pb-5 pt-6 backdrop-blur">
                  <ReliabilityGauge value={87} />
                </div>
              </div>

              {/* Description */}
              <p className="mt-auto pt-7 text-sm leading-relaxed text-[#39443c]">
                Avekshaa&apos;s patented P-A-S-S™ platform assures the Performance, Availability, Scalability &amp;
                Security of your most critical enterprise systems — engineered with AI to keep operations resilient
                at scale.
              </p>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition hover:border-[#d8d8d8] hover:shadow-sm"
              >
                <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2f2ef] text-[#1b1b1b]">
                  <Icon className="h-5 w-5" />
                </span>
                <h4 className="text-lg font-semibold leading-snug text-[#1b1b1b]">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
