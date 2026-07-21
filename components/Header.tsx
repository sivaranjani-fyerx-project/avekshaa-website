"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  type LucideIcon,
  Activity,
  Eye,
  ArrowRightLeft,
  Sparkles,
  Wrench,
  ShieldCheck,
  Cloud,
  Bot,
  CircleCheckBig,
  Gauge,
  Layers,
  BadgeCheck,
  ChartLine,
  MonitorSmartphone,
  Landmark,
  Banknote,
  Umbrella,
  ShoppingCart,
  Building2,
  Users,
  Target,
  Award,
  Briefcase,
  MessageSquareQuote,
  Handshake,
  HeartHandshake,
  Globe,
  Newspaper,
  Rss,
  FileText,
  Calculator,
  Video,
  CirclePlay,
  CalendarDays,
} from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

type SubLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
  children?: { label: string; href: string }[];
};

type NavColumn = {
  heading: string;
  headingHref?: string;
  items: SubLink[];
};

type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "dropdown"; label: string; items: SubLink[]; columns?: 2 }
  | { type: "mega"; label: string; columns: NavColumn[] };

const solutionsColumns: NavColumn[] = [
  {
    heading: "Why Avekshaa?",
    headingHref: "#why-avekshaa",
    items: [
      { label: "Application Performance Engineering", href: "#", icon: Activity },
      { label: "Observability", href: "#", icon: Eye },
      { label: "Application Migration Assurance – Hassle Free Migration", href: "#", icon: ArrowRightLeft },
      { label: "Digital Transformation with Superior Customer Experience", href: "#", icon: Sparkles },
      { label: "Production Performance Troubleshooting / Tuning", href: "#", icon: Wrench },
      { label: "Site Reliability Engineering", href: "#", icon: ShieldCheck },
      { label: "Cloud Engineering", href: "#", icon: Cloud },
    ],
  },
  {
    heading: "Independent Testing & QA",
    items: [
      { label: "Automation Testing", href: "#", icon: Bot },
      { label: "Functional Testing", href: "#", icon: CircleCheckBig },
      { label: "Performance Testing and Engineering", href: "#", icon: Gauge },
      { label: "Performance Testing and Engineering COE", href: "#", icon: Layers },
      { label: "Quality - Digital Assurance COE", href: "#", icon: BadgeCheck },
    ],
  },
  {
    heading: "Application Performance Management",
    items: [
      { label: "Application Performance Monitoring", href: "#", icon: ChartLine },
      {
        label: "Digital Experience Monitoring",
        href: "#",
        icon: MonitorSmartphone,
        children: [
          { label: "Mobile Real User Monitoring – RUM", href: "#" },
          { label: "Website Monitoring", href: "#" },
          { label: "Synthetic Monitoring", href: "#" },
        ],
      },
    ],
  },
];

const navItems: NavItem[] = [
  { type: "mega", label: "Solutions", columns: solutionsColumns },
  {
    type: "dropdown",
    label: "Industry",
    items: [
      { label: "Banks", href: "#industries", icon: Landmark },
      { label: "NBFCs", href: "#industries", icon: Banknote },
      { label: "Insurance", href: "#industries", icon: Umbrella },
      { label: "Retail", href: "#industries", icon: ShoppingCart },
    ],
  },
  { type: "link", label: "IPs & Platform", href: "#pass-platform" },
  {
    type: "dropdown",
    label: "About Us",
    columns: 2,
    items: [
      { label: "Overview", href: "#", icon: Building2 },
      { label: "Leadership", href: "#", icon: Users },
      { label: "Mission & Vision", href: "#", icon: Target },
      { label: "Recognition", href: "#", icon: Award },
      { label: "What We Do?", href: "#what-we-do", icon: Briefcase },
      { label: "Testimonials", href: "#", icon: MessageSquareQuote },
      { label: "Our Partners", href: "#", icon: Handshake },
      { label: "CSR", href: "#", icon: HeartHandshake },
      {
        label: "Global Operations",
        href: "#",
        icon: Globe,
        children: [
          { label: "United Kingdom", href: "#" },
          { label: "United States", href: "#" },
        ],
      },
    ],
  },
  { type: "link", label: "Careers", href: "#" },
  {
    type: "dropdown",
    label: "Resources",
    items: [
      { label: "Blog", href: "#", icon: Newspaper },
      { label: "News", href: "#", icon: Rss },
      { label: "Case Studies", href: "#", icon: FileText },
      { label: "IT Downtime Calculator", href: "#", icon: Calculator },
      { label: "Webinars", href: "#", icon: Video },
      { label: "Insight Videos", href: "#", icon: CirclePlay },
      { label: "Events", href: "#", icon: CalendarDays },
    ],
  },
  { type: "link", label: "Contact", href: "#contact" },
];

function Underline({ children }: { children: ReactNode }) {
  return (
    <span className="relative">
      {children}
      <span className="pointer-events-none absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-0 rounded-full bg-teal-600 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100" />
    </span>
  );
}

function SubLinkRow({ link, nowrap = false }: { link: SubLink; nowrap?: boolean }) {
  const Icon = link.icon;
  return (
    <div>
      <a
        href={link.href}
        className={`group flex items-center gap-2.5 rounded-lg px-2 py-2 text-[13px] leading-snug text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-700 ${
          nowrap ? "whitespace-nowrap" : ""
        }`}
      >
        {Icon && (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white text-slate-400 ring-1 ring-black/[0.06] shadow-sm transition-colors duration-200 group-hover:text-teal-700 group-hover:ring-teal-600/25">
            <Icon className="size-3.5" strokeWidth={1.8} />
          </span>
        )}
        <span>{link.label}</span>
      </a>
      {link.children && (
        <div className="ml-9 flex flex-col gap-0.5 border-l border-black/[0.06] pl-3">
          {link.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              className={`block rounded-lg px-2.5 py-1.5 text-xs text-slate-500 transition-colors hover:bg-teal-50 hover:text-teal-700 ${
                nowrap ? "whitespace-nowrap" : ""
              }`}
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileSubLink({
  link,
  onNavigate,
}: {
  link: SubLink;
  onNavigate: () => void;
}) {
  const Icon = link.icon;
  return (
    <div>
      <a
        href={link.href}
        onClick={onNavigate}
        className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-slate-600 hover:bg-teal-50 hover:text-teal-700"
      >
        {Icon && (
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-white text-slate-400 ring-1 ring-black/[0.06] transition-colors duration-200 group-hover:text-teal-700 group-hover:ring-teal-600/25">
            <Icon className="size-3.5" strokeWidth={1.8} />
          </span>
        )}
        <span>{link.label}</span>
      </a>
      {link.children && (
        <div className="ml-8 flex flex-col gap-0.5 border-l border-black/10 pl-3">
          {link.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              onClick={onNavigate}
              className="block rounded-lg px-2 py-1 text-[13px] text-slate-500 hover:bg-teal-50 hover:text-teal-700"
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/85 backdrop-blur-md">
      <Container className="relative flex h-18 items-center justify-between py-3.5">
        <a href="#top" className="shrink-0">
          <Image
            src="/avekshaalogo.svg"
            alt="Avekshaa"
            width={645}
            height={191}
            priority
            className="h-auto w-[150px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative text-sm font-medium text-slate-600 transition-colors hover:text-teal-700"
                >
                  <Underline>{item.label}</Underline>
                </a>
              );
            }

            const isMega = item.type === "mega";

            return (
              <div key={item.label} className={`group ${isMega ? "" : "relative"}`}>
                <button
                  type="button"
                  className="relative flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-teal-700"
                  aria-haspopup="true"
                >
                  <Underline>{item.label}</Underline>
                  <ChevronDown className="size-3.5 shrink-0 text-slate-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-teal-700 group-focus-within:rotate-180" />
                </button>

                <div
                  className={`invisible absolute top-full w-max pt-4 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${
                    isMega
                      ? "left-1/2 max-w-[calc(100%-2rem)] -translate-x-1/2"
                      : "left-0 max-w-[calc(100vw-3rem)]"
                  }`}
                >
                  <div
                    className={`overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_30px_80px_-24px_rgba(10,20,32,0.25)] ${
                      isMega ? "p-7" : item.type === "dropdown" && item.columns === 2 ? "w-[520px] p-4" : "w-64 p-3"
                    }`}
                  >
                    {isMega ? (
                      <div className="flex flex-wrap items-start gap-x-10 gap-y-6">
                        {item.columns.map((col) => (
                          <div key={col.heading} className="shrink-0">
                            {col.headingHref ? (
                              <a
                                href={col.headingHref}
                                className="mb-2 block whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-teal-700 hover:text-teal-800"
                              >
                                {col.heading}
                              </a>
                            ) : (
                              <p className="mb-2 whitespace-nowrap px-0.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                {col.heading}
                              </p>
                            )}
                            <div className="flex flex-col gap-0.5">
                              {col.items.map((sub) => (
                                <SubLinkRow key={sub.label} link={sub} nowrap />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : item.type === "dropdown" && item.columns === 2 ? (
                      <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                        {item.items.map((sub) => (
                          <SubLinkRow key={sub.label} link={sub} nowrap />
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-0.5">
                        {item.type === "dropdown" &&
                          item.items.map((sub) => <SubLinkRow key={sub.label} link={sub} />)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#contact" variant="primary" size="md" showArrow>
            Book a Meeting
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg text-ink lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-black/[0.06] bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item, idx) => {
              if (item.type === "link") {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
                  >
                    {item.label}
                  </a>
                );
              }

              const isExpanded = mobileOpenIndex === idx;

              return (
                <div key={item.label} className="border-b border-black/[0.04] last:border-none">
                  <button
                    type="button"
                    onClick={() => setMobileOpenIndex(isExpanded ? null : idx)}
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-[15px] font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 shrink-0 text-slate-400 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="flex flex-col gap-1 pb-3 pl-3">
                      {item.type === "mega"
                        ? item.columns.map((col) => (
                            <div key={col.heading} className="mb-1.5">
                              {col.headingHref ? (
                                <a
                                  href={col.headingHref}
                                  onClick={() => setOpen(false)}
                                  className="block px-2 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700"
                                >
                                  {col.heading}
                                </a>
                              ) : (
                                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                  {col.heading}
                                </p>
                              )}
                              {col.items.map((sub) => (
                                <MobileSubLink
                                  key={sub.label}
                                  link={sub}
                                  onNavigate={() => setOpen(false)}
                                />
                              ))}
                            </div>
                          ))
                        : item.items.map((sub) => (
                            <MobileSubLink
                              key={sub.label}
                              link={sub}
                              onNavigate={() => setOpen(false)}
                            />
                          ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Button href="#contact" variant="primary" size="md" className="mt-3 w-full" showArrow>
              Book a Meeting
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
