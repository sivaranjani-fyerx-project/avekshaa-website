import { ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  return (
    <section
  id="top"
  style={{ marginTop: "-11px" }}
  className="relative overflow-hidden bg-white pt-8 pb-20 sm:pt-12 sm:pb-28"
>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,131,148,0.14)_0%,rgba(255,255,255,0)_70%)]"
      />

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start gap-7 text-left">
          <Eyebrow>
            <ShieldCheck className="size-3.5" />
            Invisible Uptime
          </Eyebrow>

          <h1 className="text-gradient-ink font-heading text-balance text-[34px] leading-[1.15] font-bold tracking-[-1.2px] sm:text-[40px] sm:tracking-[-1.6px] lg:text-[50px] lg:leading-[1.1] lg:tracking-[-2.1px]">
            Reliability isn't an{" "}
            <span className="bg-[linear-gradient(90deg,#16b48e,#9b5cff87)] bg-clip-text text-transparent">
              IT metric
            </span>
            . It's a business imperative.
          </h1>

          <p className="max-w-2xl text-balance text-[14px] leading-relaxed text-slate-600">
            Avekshaa keeps your critical applications performing flawlessly—at any scale.
          </p>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button href="#contact" size="lg" showArrow>
              Talk to an Expert
            </Button>
            <Button href="#pass-platform" variant="secondary" size="lg">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Right side: image carousel */}
        <div className="relative">
          <HeroCarousel />
        </div>
      </Container>
    </section>
  );
}