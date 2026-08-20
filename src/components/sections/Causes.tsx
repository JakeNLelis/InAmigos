import React, { useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CAUSES_DATA = [
  {
    id: 1,
    title: "Project Bachpanshala (Child Welfare & Education)",
    description:
      "Providing free education, stationery, books, healthcare, and mentorship to rural and underprivileged children.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    href: "#donate",
  },
  {
    id: 2,
    title: "Project Udaan (Women & Girl Child Empowerment)",
    description:
      "Empowering girls and women through education, skill development, and financial literacy.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    href: "#donate",
  },
  {
    id: 3,
    title: "Project Prakriti (Environment & Sustainability)",
    description:
      "Environmental conservation, climate sustainability workshops, farmer support, and mass tree planting.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    href: "#donate",
  },
  {
    id: 4,
    title: "Project Seva (Hunger Relief & Essential Supplies)",
    description:
      "Distributing daily hot meals in slum areas, dry ration kits, and winter clothes/blankets to homeless and destitute families.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
    href: "#donate",
  },
  {
    id: 5,
    title: "Project Jeev (Animal Welfare & Rescue)",
    description:
      "Daily feeding rounds, emergency rescue, and veterinary healthcare support for stray and injured animals.",
    image:
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    href: "#donate",
  },
  {
    id: 6,
    title: "Project Vikas (Youth Training & Skill Development)",
    description:
      "Practical learning, creative problem solving, and career preparation workshops for youth and students.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    href: "#donate",
  },
];

export default function Causes() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const titleWords = "Our Causes".split(" ");

  const scrollLeft = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector<HTMLElement>("article");
      const step = card ? card.offsetWidth + 24 : 450;
      carouselRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector<HTMLElement>("article");
      const step = card ? card.offsetWidth + 24 : 450;
      carouselRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  return (
    <section
      id="causes"
      className="w-full bg-[#f3f4f4] py-16 sm:py-24 font-['Manrope'] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Main Title: "Our Causes" Animated word-by-word */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#1a1a1a] flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
            {titleWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.08,
                  ease: [0.5, 0, 0, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Carousel Container (CSS Snap, hidden scrollbar) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.5, 0, 0, 1] }}
          className="relative w-full"
        >
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {CAUSES_DATA.map((cause) => (
              <article
                key={cause.id}
                className="flex-none w-[85vw] sm:w-[400px] lg:w-[450px] snap-center sm:snap-start bg-white rounded-[2rem] p-4 sm:p-5 transition-colors duration-300 ease-out hover:bg-[#adedd3] cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Aspect 4/3 Image Container with 16px radius */}
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100 relative">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-medium text-[#1a1a1a] leading-snug line-clamp-2 mb-3">
                    {cause.title}
                  </h3>

                  {/* Brief Description */}
                  <p className="text-sm sm:text-base text-[#3c4a42] leading-[24px] line-clamp-3 mb-6">
                    {cause.description}
                  </p>
                </div>

                {/* Learn More Link with growing underline */}
                <div className="pt-2">
                  <a
                    href={cause.href}
                    className="inline-block text-sm font-bold uppercase tracking-wide text-[#1a1a1a] border-b border-black pb-0.5 group-hover:border-b-2 transition-all"
                  >
                    LEARN MORE
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        {/* Navigation Circular Buttons (Emerald Accent) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45, ease: [0.5, 0, 0, 1] }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            aria-label="Previous causes"
            onClick={scrollLeft}
            className="w-14 h-14 rounded-full bg-[#1c1c1c] text-[#4edea3] hover:bg-black flex items-center justify-center transition-colors duration-200 cursor-pointer active:scale-95 shadow-xs"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            aria-label="Next causes"
            onClick={scrollRight}
            className="w-14 h-14 rounded-full bg-[#1c1c1c] text-[#4edea3] hover:bg-black flex items-center justify-center transition-colors duration-200 cursor-pointer active:scale-95 shadow-xs"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
