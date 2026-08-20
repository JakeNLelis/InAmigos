"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

interface VolunteersProps {
  className?: string;
  images?: string[];
  title?: string[];
  subtitle?: string[];
  paragraphs?: string[][];
  footerText?: string;
}

const config = {
  marqueeScrollSpeed: 180,
  stripFollowEase: 0.05,
  stripEdgeInset: 140,
  contentRiseRate: 0.85,
  risenTopGap: 80,
  liftHeadStart: 120,
  wakeStrength: 2.2,
  wakeReach: 120,
  lineSettleEase: 0.09,
};

const VOLUNTEER_IMAGES = [
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738077310.png",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738077444.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738077677.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738077748.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738077915.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738078064.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738078173.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738078247.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738078410.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738078519.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738078606.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738078664.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738078733.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738078891.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079012.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079069.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079126.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079176.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079264.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079427.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079490.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079564.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079613.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079692.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079799.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738079917.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738080182.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738080378.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738080460.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738080526.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738080620.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738080678.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738127845.jpg",
  "https://inamigosfoundation.org.in/public/storage/volunteers/1738081237.jpg",
];

const DEFAULT_TITLE = ["CHANGEMAKERS"];
const DEFAULT_SUBTITLE = ["DRIVEN BY COMPASSION", "POWERED BY YOUTH"];
const DEFAULT_PARAGRAPHS = [
  [
    "Over 30,000+ passionate volunteers & interns",
    "collaborating across ground-level education,",
    "hunger relief, animal care, and climate action.",
  ],
  [
    "From weekend Bachpanshala literacy camps to",
    "daily street animal feeding and 20,000+ tree",
    "plantations, our changemakers are the heartbeat",
    "of InAmigos Foundation across India.",
  ],
];

export default function Volunteers({
  className,
  images = VOLUNTEER_IMAGES,
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  paragraphs = DEFAULT_PARAGRAPHS,
  footerText = "Our volunteers embody empathy, grassroots action, and civic responsibility. Join our pan-India network to bring real, measurable change to underserved communities.",
}: VolunteersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeStripRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const [clonedImages, setClonedImages] = useState<string[]>(images);

  useEffect(() => {
    if (
      !marqueeTrackRef.current ||
      !marqueeStripRef.current ||
      !containerRef.current ||
      !contentWrapperRef.current
    )
      return;

    const marqueeTrack = marqueeTrackRef.current;

    // Setup infinite horizontal marquee with GSAP
    const isMobile = window.innerWidth < 768;
    const itemWidth = isMobile ? 140 : 180;
    const gap = 16;
    const oneSetWidth = images.length * (itemWidth + gap);
    const setsNeeded = Math.ceil(window.innerWidth / oneSetWidth) + 2;

    const newImages = [];
    for (let i = 0; i < setsNeeded; i++) {
      newImages.push(...images);
    }
    setClonedImages(newImages);

    // GSAP context for clean lifecycle cleanup
    const ctx = gsap.context(() => {
      setTimeout(() => {
        gsap.to(marqueeTrack, {
          x: `-${oneSetWidth}px`,
          duration: oneSetWidth / 180,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => `${gsap.utils.wrap(-oneSetWidth, 0, parseFloat(x))}px`,
          },
        });
      }, 100);
    }, marqueeTrack);

    return () => ctx.revert();
  }, [images]);

  // Magnetic spotlight & vertical wake physics
  useEffect(() => {
    if (
      !containerRef.current ||
      !marqueeStripRef.current ||
      !contentWrapperRef.current
    )
      return;

    const spotlightSection = containerRef.current;
    const marqueeStrip = marqueeStripRef.current;

    let stripBaseTop = 0;
    let stripHeight = 0;
    let sectionHeight = 0;
    let stripRestCenterY = 0;
    let contentTopAtRest = 0;

    let stripTargetY = 0;
    let stripCurrentY = 0;
    let stripPrevY = 0;
    let hasPointerMoved = false;

    let targets: { el: HTMLElement; restCenterY: number; currentY: number }[] =
      [];
    let rafId: number;

    const measureGeometry = () => {
      sectionHeight = spotlightSection.getBoundingClientRect().height;
      stripBaseTop = marqueeStrip.offsetTop;
      stripHeight = marqueeStrip.offsetHeight;

      stripRestCenterY = config.stripEdgeInset;

      const elements = Array.from(
        spotlightSection.querySelectorAll(".wake-target"),
      ) as HTMLElement[];

      let blockTop = Infinity;
      targets = elements.map((el) => {
        let y = 0;
        let node: HTMLElement | null = el;
        while (node && node !== spotlightSection) {
          y += node.offsetTop;
          node = node.offsetParent as HTMLElement;
        }
        const restCenterY = y + el.offsetHeight / 2;
        blockTop = Math.min(blockTop, restCenterY - el.offsetHeight / 2);

        return {
          el,
          restCenterY,
          currentY: 0,
        };
      });

      contentTopAtRest = isFinite(blockTop) ? blockTop : sectionHeight * 0.35;

      if (!hasPointerMoved) {
        const restY = config.stripEdgeInset - stripHeight / 2;
        stripTargetY = restY;
        stripCurrentY = restY;
        stripPrevY = restY;
        gsap.set(marqueeStrip, { y: stripCurrentY });
      }
    };

    setTimeout(measureGeometry, 100);
    window.addEventListener("resize", measureGeometry);

    const handlePointerMove = (e: MouseEvent) => {
      hasPointerMoved = true;
      const rect = spotlightSection.getBoundingClientRect();
      const pointerY = e.clientY - rect.top;
      stripTargetY = pointerY - stripHeight / 2;
    };

    const handlePointerLeave = () => {
      hasPointerMoved = false;
      stripTargetY = config.stripEdgeInset - stripHeight / 2;
    };

    spotlightSection.addEventListener("mousemove", handlePointerMove);
    spotlightSection.addEventListener("mouseleave", handlePointerLeave);

    const render = () => {
      stripCurrentY += (stripTargetY - stripCurrentY) * config.stripFollowEase;
      gsap.set(marqueeStrip, { y: stripCurrentY });

      const stripCenterY = stripBaseTop + stripCurrentY + stripHeight / 2;
      const stripVelocityY = stripCurrentY - stripPrevY;
      stripPrevY = stripCurrentY;

      const descentBelowRest = Math.max(0, stripCenterY - stripRestCenterY);
      const maxRise = Math.max(0, contentTopAtRest - config.risenTopGap);
      const contentRise = -Math.min(
        descentBelowRest * config.contentRiseRate,
        maxRise,
      );

      targets.forEach((line) => {
        const gapToStrip = line.restCenterY - stripCenterY;
        const reachedLine =
          stripCenterY + config.liftHeadStart >= line.restCenterY;

        const wakeInfluence = Math.exp(
          -(gapToStrip * gapToStrip) /
            (2 * config.wakeReach * config.wakeReach),
        );
        const wakeOffset = stripVelocityY * wakeInfluence * config.wakeStrength;

        const lineTarget = (reachedLine ? contentRise : 0) + wakeOffset;

        line.currentY += (lineTarget - line.currentY) * config.lineSettleEase;
        gsap.set(line.el, { y: line.currentY });
      });

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", measureGeometry);
      spotlightSection.removeEventListener("mousemove", handlePointerMove);
      spotlightSection.removeEventListener("mouseleave", handlePointerLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="volunteers"
      ref={containerRef}
      className={cn(
        "spotlight relative w-full overflow-hidden bg-[#191c1d] text-white font-['Manrope'] py-16 sm:py-20 border-t border-[#2e3132]",
        className,
      )}
    >
      {/* Marquee Strip following the pointer */}
      <div
        ref={marqueeStripRef}
        className="spotlight-marquee absolute left-0 w-full z-20 h-[140px] sm:h-[180px] pointer-events-none"
        style={{ top: 0 }}
      >
        <div
          ref={marqueeTrackRef}
          className="spotlight-marquee-track flex gap-4 h-full items-center absolute top-0 left-0"
        >
          {clonedImages.map((img, idx) => (
            <div
              key={idx}
              className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] shrink-0 rounded-[16px] overflow-hidden shadow-md bg-[#242728] border border-white/10"
            >
              <img
                src={img}
                alt="InAmigos Volunteer in Action"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Layout with Wake Physics */}
      <div
        ref={contentWrapperRef}
        className="spotlight-content-wrapper relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 z-30 pt-16 pb-6 pointer-events-none"
      >
        {/* Large Typography Title */}
        <h2 className="text-[12vw] sm:text-[8rem] lg:text-[10rem] font-extrabold leading-[0.85] tracking-tighter mb-8 sm:mb-12 text-center text-white/95 uppercase select-none drop-shadow-sm">
          {title.map((line, idx) => (
            <div key={idx} className="wake-target inline-block relative">
              {line}
              <span className="inline-block w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#006c49] ml-2 align-baseline animate-pulse" />
            </div>
          ))}
        </h2>

        {/* Subtitle & Paragraphs */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-4 sm:px-8 gap-6 md:gap-10">
          {/* Subtitle / Header (Left side) */}
          <div className="flex-1 md:max-w-[320px] text-left">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#4edea3] leading-snug">
              {subtitle.map((line, idx) => (
                <div key={idx} className="wake-target">
                  {line}
                </div>
              ))}
            </h3>
          </div>

          {/* Paragraphs (Right side) */}
          <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-8 text-xs sm:text-sm text-[#bbcabf] leading-[26px]">
            {paragraphs.map((para, pIdx) => (
              <div key={pIdx} className="flex-1 flex flex-col space-y-1">
                {para.map((line, lIdx) => (
                  <div key={lIdx} className="wake-target">
                    {line}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Join CTA (Clickable) */}
        <div className="mt-8 pointer-events-auto">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-[8px] bg-[#006c49] hover:bg-[#005a3c] text-white text-xs sm:text-sm font-bold uppercase tracking-[0.05em] shadow-lg transition-all duration-200 hover:scale-105"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Join As A Volunteer</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Footer Text directly underneath the CTA with natural spacing */}
        <p className="text-[11px] sm:text-xs text-[#bbcabf]/75 max-w-6xl text-center leading-relaxed mt-6">
          {footerText}
        </p>
      </div>
    </section>
  );
}
