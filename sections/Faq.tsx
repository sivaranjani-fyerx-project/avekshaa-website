"use client";

// components/Faq.tsx
// Next.js (App Router) — requires Tailwind CSS. Uses client state for the accordion.
// import Faq from "@/components/Faq";

import React, { useState } from "react";

/* ------------------------------- Icons ------------------------------- */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 shrink-0 text-[#1b1a38] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------- Data -------------------------------- */

const faqs = [
  {
    q: "How can enterprises reduce the risk of application outages?",
    a: "A proactive reliability engineering strategy helps organizations identify performance bottlenecks, infrastructure risks, and application vulnerabilities before they impact business operations.",
  },
  {
    q: "What is Enterprise Digital Reliability?",
    a: "Enterprise Digital Reliability is the ability of applications, infrastructure, and digital services to consistently deliver expected business outcomes while maintaining performance, availability, scalability, and security.",
  },
  {
    q: "How is Performance Engineering different from Performance Testing?",
    a: "Performance testing identifies issues. Performance engineering proactively designs, optimizes, and governs systems to prevent those issues from occurring in production environments.",
  },
  {
    q: "Why is digital reliability critical for business growth?",
    a: "Reliable digital platforms improve customer experience, reduce operational disruptions, protect revenue, support innovation initiatives, and strengthen organizational resilience.",
  },
];

/* ------------------------------ Accordion ---------------------------- */

function FaqItem({
  faq,
  open,
  onToggle,
  isLast,
}: {
  faq: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <div className={isLast ? "" : "border-b border-[#e2e0ee]"}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className={`min-w-0 flex-1 truncate whitespace-nowrap text-base text-[#1b1a38] sm:text-lg ${
            open ? "font-bold" : "font-semibold"
          }`}
        >
          {faq.q}
        </span>
        <Chevron open={open} />
      </button>

      {/* animated collapse */}
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-8 text-[15px] leading-relaxed text-[#6f6c86]">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Section ------------------------------ */

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative w-full overflow-hidden px-6 pt-10 pb-20 sm:pt-14 sm:pb-28 lg:px-10">
      {/* decorative side arcs */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full border border-white/60" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full border border-white/60" />

      <div className="relative mx-auto max-w-2xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-[#b9b4e0] bg-white/40 px-5 py-2 text-sm font-medium text-[#4a4770]">
            Frequently Asked Questions
          </span>
          <h2 className="mt-7 text-3xl font-extrabold tracking-tight text-[#15142b] sm:text-[2.75rem] sm:leading-[1.08]">
            Got Questions? We&apos;ve Got Answers
          </h2>
        </div>

        {/* Contained, centered accordion */}
        <div className="px-1 sm:px-2">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              open={openIndex === i}
              isFirst={i === 0}
              isLast={i === faqs.length - 1}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
