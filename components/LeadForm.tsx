"use client";

import { User, Mail, Phone, ChevronDown } from "lucide-react";

function IndiaFlag() {
  return (
    <svg viewBox="0 0 18 12" className="h-3 w-[18px] shrink-0 rounded-[2px]" aria-hidden>
      <rect width="18" height="4" fill="#FF9933" />
      <rect y="4" width="18" height="4" fill="#fff" />
      <rect y="8" width="18" height="4" fill="#138808" />
      <circle cx="9" cy="6" r="1.1" fill="none" stroke="#000080" strokeWidth="0.4" />
    </svg>
  );
}

export default function LeadForm() {
  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#529aec] focus:ring-2 focus:ring-[#529aec]/20";
  const iconClass =
    "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-400";
  const labelClass =
    "mb-1 block text-[10px] font-semibold uppercase tracking-[0.07em] text-slate-500";

  return (
    <div className="relative mx-auto w-full max-w-[380px] rounded-2xl border border-[#529aec]/20 bg-[#529aec21] p-5 shadow-[0_20px_50px_-25px_rgba(45,90,150,0.35)]">
      <div className="mb-4">
        <h2 className="font-heading text-[19px] font-bold leading-tight tracking-[-0.4px] text-slate-900">
          Start the Reliability Conversation
        </h2>
        <p className="mt-0.5 text-[12px] leading-snug text-slate-500">
          An expert will reach out to map your path.
        </p>
      </div>

      <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
        {/* Full name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Full Name"
              className={inputBase}
            />
            <User className={iconClass} strokeWidth={1.75} />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email Address"
              className={inputBase}
            />
            <Mail className={iconClass} strokeWidth={1.75} />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 flex -translate-y-1/2 items-center gap-1.5 text-[13px] text-slate-600">
              <IndiaFlag />
              <span>+91</span>
              <span className="mx-0.5 h-4 w-px bg-slate-200" />
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              className={`${inputBase} pl-[88px]`}
            />
            <Phone className={iconClass} strokeWidth={1.75} />
          </div>
        </div>

        {/* Select a program */}
        <div>
          <label htmlFor="interest" className={labelClass}>
            Select a Program
          </label>
          <div className="relative">
            <select
              id="interest"
              name="interest"
              defaultValue=""
              required
              className={`${inputBase} appearance-none pr-9 [&:invalid]:text-slate-400`}
            >
              <option value="" disabled>
                Select a program
              </option>
              <option value="apm">Application Performance (APM)</option>
              <option value="observability">Observability &amp; Monitoring</option>
              <option value="reliability">Site Reliability Engineering</option>
              <option value="assessment">Performance Assessment</option>
              <option value="other">Something else</option>
            </select>
            <ChevronDown className={iconClass} strokeWidth={1.75} />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-[14px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(15,23,42,0.55)] transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-[#529aec]/30"
        >
          Talk to Us
          <span aria-hidden>›</span>
        </button>
      </form>
    </div>
  );
}