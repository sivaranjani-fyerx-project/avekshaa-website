// components/Recognition.tsx
// Next.js (App Router or Pages) — requires Tailwind CSS.
// import Recognition from "@/components/Recognition";
// No client hooks are used, so this can render as a Server Component.

import React, { useState } from 'react';
/* ------------------------------- Icons ------------------------------- */

type IconProps = { className?: string };

function TrophyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7 4h10v4a5 5 0 01-10 0V4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M7 6H4.5v1A3.5 3.5 0 007 10.4M17 6h2.5v1a3.5 3.5 0 01-2.5 3.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 13v3M9 20h6M10 16h4l.5 4h-5l.5-4z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MedalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M8.5 3l3.5 6 3.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 3l-2 4M16 3l2 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="15.5" r="5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 13.3l.8 1.6 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.2.8-1.6z" fill="currentColor" />
    </svg>
  );
}

function GrowthIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M5 15l4-4 3 3 6-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 4h4v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BulbIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M9 17.5a5.5 5.5 0 116 0v1.5H9v-1.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9.5 21h5M10 19h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3l7 2.5v5c0 4.3-3 7.6-7 8.8-4-1.2-7-4.5-7-8.8v-5L12 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 11.7l2 2 3.6-3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarBadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3.2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 8.9l5.4-.8L12 3.2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7 17L17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------- Data -------------------------------- */

type Award = { title: string; Icon: (p: IconProps) => React.JSX.Element; color: string };

const leftAwards: Award[] = [
  { title: "Red Herring Top 100 Winner", Icon: TrophyIcon, color: "text-[#e11d48]" },
  { title: "Express IT Award", Icon: MedalIcon, color: "text-[#2563eb]" },
  { title: "Deloitte Fast 50", Icon: GrowthIcon, color: "text-[#16a34a]" },
];

const rightAwards: Award[] = [
  { title: "Technology Innovator Award", Icon: BulbIcon, color: "text-[#f59e0b]" },
  { title: "CIO Choice Recognition", Icon: ShieldCheckIcon, color: "text-[#4f46e5]" },
  { title: "Tech500 Award", Icon: StarBadgeIcon, color: "text-[#9333ea]" },
];

/* ------------------------------ Badge -------------------------------- */

function Badge({ award, align = "center" }: { award: Award; align?: "left" | "right" | "center" }) {
  const { Icon, color, title } = award;
  return (
    <div className={`flex w-[150px] flex-col items-center ${align === "center" ? "text-center" : ""}`}>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(60,50,120,0.14)]">
        <Icon className={`h-7 w-7 ${color}`} />
      </div>
      <span className="mt-3 text-center text-[12px] font-medium leading-tight text-[#5b5872]">{title}</span>
    </div>
  );
}

/* ------------------------------ Center ------------------------------- */

function CenterCard() {
  return (
    <div className="w-full max-w-[640px] rounded-[28px] border border-white bg-white/95 px-8 py-12 text-center shadow-[0_30px_80px_rgba(80,60,160,0.14)] backdrop-blur sm:px-12">
      <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-[#9a95c4]">
        Industry Recognition
      </span>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1b1a38] sm:text-[2.6rem] sm:leading-[1.1]">
        Recognized for Innovation,
        <br className="hidden sm:block" /> Performance &amp; Enterprise Impact
      </h2>
      <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#6f6c86]">
        Honored by the industry&apos;s most respected awards for our innovation, engineering performance, and
        measurable enterprise impact.
      </p>
      <a
        href="#awards"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff8a5b] to-[#ff5f8f] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,110,120,0.35)] transition hover:opacity-95"
      >
        Explore All
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}

/* --------------------------- Connector lines ------------------------- */

function Connectors() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1338 640"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="c1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ec4899" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="c2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="c3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="c4" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#f97316" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="c5" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#ec4899" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="c6" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#06b6d4" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {/* left side */}
      <path d="M200 150 C 300 150 275 205 345 212" stroke="url(#c1)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M200 305 C 285 305 300 305 345 305" stroke="url(#c2)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M200 465 C 300 465 275 400 345 393" stroke="url(#c3)" strokeWidth="2.5" strokeLinecap="round" />

      {/* right side */}
      <path d="M1138 150 C 1038 150 1063 205 993 212" stroke="url(#c4)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M1138 305 C 1053 305 1038 305 993 305" stroke="url(#c5)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M1138 465 C 1038 465 1063 400 993 393" stroke="url(#c6)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------ Section ------------------------------ */

export default function Recognition() {
  const leftPos = ["23%", "47.5%", "72%"];
  const rightPos = ["23%", "47.5%", "72%"];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f5f2ff] via-white to-[#fdf1f8] px-6 py-20 sm:py-28 lg:px-10">
      {/* soft glows */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-[#e9defb] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-[#fbe0ef] blur-3xl" />

      {/* ---------- Desktop scene (lg and up) ---------- */}
      <div className="relative mx-auto hidden aspect-[1338/640] w-full max-w-[1338px] lg:block">
        <Connectors />

        {leftAwards.map((award, i) => (
          <div
            key={award.title}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: "13%", top: leftPos[i] }}
          >
            <Badge award={award} />
          </div>
        ))}

        {rightAwards.map((award, i) => (
          <div
            key={award.title}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: "87%", top: rightPos[i] }}
          >
            <Badge award={award} />
          </div>
        ))}

        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center px-4">
          <CenterCard />
        </div>
      </div>

      {/* ---------- Mobile / tablet layout (below lg) ---------- */}
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-10 lg:hidden">
        <CenterCard />
        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          {[...leftAwards, ...rightAwards].map((award) => (
            <div key={award.title} className="flex justify-center">
              <Badge award={award} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
