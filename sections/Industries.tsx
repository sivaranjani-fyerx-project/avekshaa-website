// components/Industries.tsx
// Next.js (App Router or Pages) — requires Tailwind CSS.
// import Industries from "@/components/Industries";
// No client hooks are used, so this can render as a Server Component.

import React from "react";

/* ------------------------------- Icons ------------------------------- */

type IconProps = { className?: string };

function BankingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 9.5L12 4l8 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9.8h14v1.2H5z" fill="currentColor" opacity="0" />
      <path d="M6 11v6M10 11v6M14 11v6M18 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 19.5h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function InsuranceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3l7 2.4v5.3c0 4.5-3 8-7 9.3-4-1.3-7-4.8-7-9.3V5.4L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9.2 12l1.9 1.9 3.7-3.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TelecomIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 20v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="11" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.8 6.8a6 6 0 000 8.4M16.2 6.8a6 6 0 010 8.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5.2 4.2a9.5 9.5 0 000 13.6M18.8 4.2a9.5 9.5 0 010 13.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function RetailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 8h12l-.9 11.2a1 1 0 01-1 .8H7.9a1 1 0 01-1-.8L6 8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 9.5V7a3 3 0 016 0v2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 12h13M12 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------- Data -------------------------------- */

const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "Deliver secure, high-performing digital banking experiences while maintaining reliability across critical financial systems.",
    linkLabel: "View Banking Success Stories",
    href: "#contact",
    bg: "bg-[#fbebdd]",
    Icon: BankingIcon,
  },
  {
    title: "Insurance",
    description: "Ensure uninterrupted policy management, claims processing, and customer service operations.",
    linkLabel: "View Insurance Case Studies",
    href: "#contact",
    bg: "bg-[#f1f1f2]",
    Icon: InsuranceIcon,
  },
  {
    title: "Telecommunications",
    description:
      "Support millions of concurrent users while maintaining consistent service quality and platform performance.",
    linkLabel: "View Telecom Success Stories",
    href: "#contact",
    bg: "bg-[#f5e9fa]",
    Icon: TelecomIcon,
  },
  {
    title: "Retail & Digital Commerce",
    description:
      "Prevent revenue loss during peak traffic events and ensure seamless customer experiences across digital channels.",
    linkLabel: "View Retail Success Stories",
    href: "#contact",
    bg: "bg-[#e6f3ec]",
    Icon: RetailIcon,
  },
];

/* ------------------------------ Section ------------------------------ */

export default function Industries() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide text-[#8a86a8]">
            Proven Results
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-[#1b1a38] sm:text-[3.25rem] sm:leading-[1.08]">
            <span className="bg-[linear-gradient(90deg,#16b48e,#9b5cff87)] bg-clip-text text-transparent">
              Proven Results
            </span>{" "}
            Across Mission-Critical Industries
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#7c7a90]">
            Organizations operating in highly regulated and high-volume environments rely on Avekshaa to improve
            performance, reduce risk, and ensure business continuity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ title, description, linkLabel, href, bg, Icon }) => (
            <div key={title} className={`flex flex-col rounded-3xl ${bg} p-8`}>
              <span className="mb-8 inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-[#1b1a38] shadow-[0_6px_18px_rgba(27,26,56,0.08)]">
                <Icon className="h-6 w-6" />
              </span>

              <h3 className="text-xl font-semibold text-[#1b1a38]">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#6f6d82]">{description}</p>

              <a
                href={href}
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1b1a38] transition hover:gap-2.5"
              >
                {linkLabel}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
