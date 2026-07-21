import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap";

const variants: Record<string, string> = {
  primary:
    "bg-ink text-white shadow-[0_8px_24px_-8px_rgba(10,20,32,0.55)] hover:bg-navy-800 hover:shadow-[0_10px_28px_-6px_rgba(10,20,32,0.6)] active:bg-navy-800",
  secondary:
    "bg-white text-navy-900 border border-black/10 hover:border-teal-500/60 hover:text-teal-700 shadow-sm",
  ghost: "text-white/90 hover:text-white border border-white/20 hover:border-white/40",
};

const sizes: Record<string, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export default function Button({
  href = "#contact",
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="size-4" strokeWidth={2.5} />}
    </a>
  );
}
