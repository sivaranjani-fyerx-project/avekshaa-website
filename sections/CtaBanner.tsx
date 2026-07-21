import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(14,131,148,0.35)_0%,rgba(5,18,32,0)_70%)]"
      />
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-balance max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          The Best Outage Is the One Your Customers Never Experience
        </h2>
        <p className="text-balance max-w-xl text-lg leading-relaxed text-white/70">
          Talk to our reliability engineering experts and see how the P-A-S-S™
          Platform can protect your revenue, accelerate transformation, and keep
          every digital experience flawless—at any scale.
        </p>
        <Button href="#contact" size="lg" showArrow className="mt-2">
          Talk to an Expert
        </Button>
      </Container>
    </section>
  );
}
