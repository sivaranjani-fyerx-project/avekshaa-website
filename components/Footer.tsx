import Container from "./ui/Container";
import Logo from "./Logo";
import { LinkedInIcon, XIcon, YouTubeIcon } from "./ui/SocialIcons";

const columns = [
  {
    title: "Solutions",
    links: [
      "Revenue Protection & Business Continuity",
      "Digital Transformation Assurance",
      "Customer Experience Reliability",
      "P-A-S-S™ Platform",
    ],
  },
  {
    title: "Industries",
    links: ["Banking & Financial Services", "Insurance", "Telecommunications", "Retail & Digital Commerce"],
  },
  {
    title: "Company",
    links: ["About Avekshaa", "Industry Recognition", "Careers", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Case Studies", "Reliability Framework", "FAQ", "Talk to an Expert"],
  },
];

const socials = [
  { icon: LinkedInIcon, label: "LinkedIn" },
  { icon: XIcon, label: "Twitter" },
  { icon: YouTubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="-mb-[52px] bg-[#eef0f9] text-slate-600">
      <Container className="py-20 sm:py-28">
        {/* -------- Link columns -------- */}
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Enterprise digital reliability engineered for business outcomes —
              performance, availability, scalability & security, unified.
            </p>
            <div className="mt-2 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition-colors hover:text-slate-900 hover:ring-slate-300"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-[#15142b]">{col.title}</span>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm leading-snug text-slate-500 transition-colors hover:text-indigo-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* -------- Bottom bar -------- */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Avekshaa Technologies. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            P-A-S-S™ Platform — 2 US Patents · Privacy Policy · Terms of Service
          </p>
        </div>
      </Container>
    </footer>
  );
}
