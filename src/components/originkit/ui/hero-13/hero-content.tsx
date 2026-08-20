import React, { useState } from "react";
import { type Variants, motion } from "motion/react";
import { Button } from "./button";
import FocusReveal from "./focus-reveal";
import { Heart, Sparkles } from "lucide-react";

type HeroContentProps = {
  onExploreGallery: () => void;
  onBookShoot: () => void;
};

const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const FADE_UP_ITEM: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const HeroContent = ({
  onExploreGallery,
  onBookShoot,
}: HeroContentProps) => {
  const [headingComplete, setHeadingComplete] = useState(false);

  return (
    <div className="relative z-20 flex w-full items-center justify-center py-6 font-['Manrope']">
      <div className="relative z-10 flex w-full flex-col items-center gap-6 px-4 text-center">
        <div className="flex w-full flex-col items-center gap-4">
          {/* Animated FocusReveal Headline */}
          <FocusReveal
            as="h1"
            text="Serving Humanity with Compassion"
            className="w-full font-bold text-3xl sm:text-5xl lg:text-[56px] leading-[1.15] sm:leading-[64px] tracking-[-0.02em] text-[#191c1d] text-balance"
            staggerFrom="start"
            blur={20}
            transition={{
              type: "tween",
              duration: 0.4,
              staggerChildren: 0.035,
              ease: "easeOut",
            }}
            onComplete={() => setHeadingComplete(true)}
          />

          <motion.div
            className="flex w-full flex-col items-center gap-6"
            variants={STAGGER_CONTAINER}
            initial="hidden"
            animate={headingComplete ? "visible" : "hidden"}
          >
            {/* Subtitle */}
            <motion.p
              variants={FADE_UP_ITEM}
              className="w-full max-w-[540px] text-sm sm:text-base leading-[26px] text-[#3c4a42]"
            >
              Our InAmigos Foundation is dedicated to community welfare,
              healthcare and education, creating compassionate positive change
              across society.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={FADE_UP_ITEM}
              className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
            >
              <a href="#donate">
                <Button
                  variant="primary"
                  aria-label="Donate Now"
                  onClick={onBookShoot}
                  className="gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Donate Now</span>
                </Button>
              </a>

              <a href="#causes">
                <Button
                  variant="secondary"
                  aria-label="Explore Causes"
                  onClick={onExploreGallery}
                  className="w-fit"
                >
                  Explore Causes
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
