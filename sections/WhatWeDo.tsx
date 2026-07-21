"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ShieldCheck, Cloud, Gauge, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IconTile from "@/components/ui/IconTile";

const accentStyles: Record<string, string> = {
  teal: "bg-gradient-to-br from-teal-50 to-teal-100/70",
  amber: "bg-gradient-to-br from-amber-50 to-amber-100/70",
  blue: "bg-gradient-to-br from-blue-50 to-indigo-100/60",
};

const pillars = [
  {
    icon: ShieldCheck,
    accent: "teal",
    title: "Revenue Protection & Business Continuity",
    description:
      "Prevent outages, transaction failures, settlement issues, reconciliation breaks, and application slowdowns before they impact customers or revenue.",
    detail:
      "Our proactive reliability engineering approach helps organizations identify risks early and reduce the cost of downtime.",
    linkLabel: "Learn How We Protect Revenue",
  },
  {
    icon: Cloud,
    accent: "amber",
    title: "Digital Transformation Assurance",
    description:
      "Accelerate cloud adoption, platform modernization, and large-scale migration initiatives with confidence.",
    detail:
      "We help enterprises achieve seamless transitions while maintaining application stability, performance, and business continuity throughout transformation programs.",
    linkLabel: "Explore Our Transformation Expertise",
  },
  {
    icon: Gauge,
    accent: "blue",
    title: "Customer Experience Reliability",
    description:
      "Ensure digital channels consistently deliver fast, reliable, and frictionless user experiences.",
    detail:
      "Using real-user monitoring, observability, performance engineering, and reliability governance, we help organizations maintain customer trust at scale.",
    linkLabel: "See Our Reliability Framework",
  },
];

export default function WhatWeDo() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let minDistance = Infinity;
    Array.from(track.children).forEach((child, index) => {
      const distance = Math.abs((child as HTMLElement).offsetLeft - track.scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });
    setActive(closest);
  };

  return (
    <section id="what-we-do" className="bg-white pt-4 pb-20 sm:pt-6 sm:pb-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="What We Do"
          title="Engineering Reliability Into Every Digital Experience"
          description="Modern enterprises depend on digital platforms to generate revenue, serve customers, and support business operations. Avekshaa helps organizations build resilient systems that perform reliably under any condition."
          align="center"
          className="mx-auto"
        />

        <div className="relative">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth px-[5%] pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {pillars.map((pillar) => (
              <div key={pillar.title} className="w-[90%] shrink-0 snap-center sm:w-[80%] lg:w-[820px]">
                <div className="grid h-full gap-8 rounded-3xl border border-black/[0.06] bg-white p-6 shadow-[0_30px_80px_-40px_rgba(10,20,32,0.25)] sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12">
                  <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                    <IconTile icon={pillar.icon} />
                    <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-slate-600">{pillar.description}</p>
                    <p className="text-[15px] leading-relaxed text-slate-600">{pillar.detail}</p>
                    <a
                      href="#contact"
                      className="group inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-semibold text-teal-700 hover:text-teal-600"
                    >
                      {pillar.linkLabel}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                  <div
                    className={`flex items-center justify-center rounded-2xl p-5 sm:p-6 ${accentStyles[pillar.accent]}`}
                  >
                    <Image
                      src="/heroright.avif"
                      alt="Avekshaa platform overview"
                      width={2048}
                      height={1420}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous"
            disabled={active === 0}
            onClick={() => scrollToIndex(active - 1)}
            className="absolute top-1/2 left-1 -translate-y-1/2 flex size-10 items-center justify-center rounded-full border border-black/[0.06] bg-white text-ink shadow-[0_12px_30px_-10px_rgba(10,20,32,0.35)] transition-opacity hover:bg-teal-50 hover:text-teal-700 disabled:pointer-events-none disabled:opacity-30 sm:left-2"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={active === pillars.length - 1}
            onClick={() => scrollToIndex(active + 1)}
            className="absolute top-1/2 right-1 -translate-y-1/2 flex size-10 items-center justify-center rounded-full border border-black/[0.06] bg-white text-ink shadow-[0_12px_30px_-10px_rgba(10,20,32,0.35)] transition-opacity hover:bg-teal-50 hover:text-teal-700 disabled:pointer-events-none disabled:opacity-30 sm:right-2"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          {pillars.map((pillar, index) => (
            <button
              key={pillar.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index ? "w-6 bg-teal-600" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
