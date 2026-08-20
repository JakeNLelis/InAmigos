import React from "react";
import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

const RECENT_EVENTS = [
  {
    id: "e1",
    tag: "Project Udaan / Vikas",
    title: "International Day of Women and Girls in Science",
    date: "February 11, 2025",
    description:
      "Digital workshops and community talks highlighting the importance of STEM education, digital literacy, and skill-building for young girls.",
    image: "/gallery/649873313_1250692197194908_5533923742098471725_n.jpg",
  },
  {
    id: "e2",
    tag: "Project Seva & Bachpanshala",
    title: "International Day of Happiness Community Outreach",
    date: "March 20, 2025",
    description:
      "Community interaction drive distributing sweets, nutritious meals, and hosting creative storytelling and interactive game sessions for children in slum clusters.",
    image: "/gallery/597408282_1179495034314625_2498788752597277326_n.jpg",
  },
  {
    id: "e3",
    tag: "Project Prakriti",
    title: "World Water Day & Green Action Campaign",
    date: "March 22, 2025",
    description:
      'Clean water awareness sessions, local cleanliness drives, and community discussions on water conservation under the national "LiFE" framework.',
    image: "/gallery/537364223_1094416166155846_7689778449830767761_n.jpg",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="py-16 sm:py-24 bg-[#f8f9fa] border-t border-[#edeeef] font-['Manrope']"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1d] tracking-tight leading-tight">
            Our Recent Events & Campaigns
          </h2>

          <p className="text-sm sm:text-base text-[#3c4a42] leading-[26px]">
            Join our upcoming awareness workshops, food drives, and
            environmental sustainability campaigns.
          </p>
        </div>

        {/* 3 Featured Recent Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RECENT_EVENTS.map((event, idx) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#ffffff] rounded-[16px] overflow-hidden border border-[#e1e3e4] shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:border-[#006c49] transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badge */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#f3f4f5] relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-[6px] bg-[#006c49] text-white text-[11px] font-bold uppercase tracking-[0.05em] shadow-xs">
                  {event.tag}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006c49] tracking-[0.05em] uppercase">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#191c1d] group-hover:text-[#006c49] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-sm text-[#3c4a42] leading-[24px]">
                    {event.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#edeeef]">
                  <a
                    href="/events"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#006c49] hover:text-[#005a3c] transition-colors uppercase tracking-[0.05em]"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Events CTA Button */}
        <div className="text-center mt-12 sm:mt-16">
          <motion.a
            href="/events"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[8px] bg-[#006c49] hover:bg-[#005a3c] text-white font-bold text-xs sm:text-sm tracking-[0.05em] uppercase shadow-xs transition-all duration-200"
          >
            <span>View All Events & Campaigns</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
