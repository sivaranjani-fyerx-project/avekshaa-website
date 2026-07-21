import Container from "@/components/ui/Container";

const logos = ["JIO", "AXIS BANK", "HDFC BANK", "ICICI BANK", "NSE", "INDUSIND BANK", "TATA CAPITAL"];

export default function TrustedBy() {
  return (
    <section className="bg-white py-10">
      <Container className="flex flex-col items-center gap-6">
        <span className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
          Trusted by Industry-Leading Enterprises
        </span>
        <div
          className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="animate-marquee flex w-max items-center gap-x-16 hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="shrink-0 text-lg font-bold tracking-tight text-slate-400 transition-colors hover:text-slate-600 sm:text-xl"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
