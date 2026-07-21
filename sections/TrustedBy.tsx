import Image from "next/image";
import Container from "@/components/ui/Container";

const logos = [
  { name: "JIO", src: "/logos/jio.png" },
  { name: "Axis Bank", src: "/logos/axis.webp" },
  { name: "HDFC Bank", src: "/logos/hdfc.svg" },
  { name: "ICICI Bank", src: "/logos/icicbank.webp" },
  { name: "NSE", src: "/logos/nselogo.jpg" },
  // { name: "IndusInd Bank", src: "/logos/induslandbank.png" },
  // { name: "Tata Capital", src: "/logos/tatacapital.png" },
];

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
                key={`${logo.name}-${i}`}
                className="flex h-8 w-[130px] shrink-0 items-center justify-center grayscale opacity-60 transition hover:opacity-100 hover:grayscale-0 sm:h-9"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
