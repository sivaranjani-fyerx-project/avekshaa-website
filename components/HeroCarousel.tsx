"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/hero/h1.avif", alt: "Avekshaa reliability engineering platform — view 1" },
  { src: "/hero/h2.avif", alt: "Avekshaa reliability engineering platform — view 2" },
  { src: "/hero/h3.avif", alt: "Avekshaa reliability engineering platform — view 3" },
];

const AUTOPLAY_MS = 4500;

export default function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (pausedRef.current) return;
      setActive((prev) => {
        const next = (prev + 1) % slides.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [scrollToIndex]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      className="group relative w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_-25px_rgba(45,90,150,0.35)]"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex aspect-[4/3] snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide) => (
          <div key={slide.src} className="relative w-full shrink-0 snap-center">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => scrollToIndex((active - 1 + slides.length) % slides.length)}
        className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-700 opacity-0 shadow-md backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-white"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => scrollToIndex((active + 1) % slides.length)}
        className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-700 opacity-0 shadow-md backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-white"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full shadow-sm transition-all duration-300 ${
              active === index ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
