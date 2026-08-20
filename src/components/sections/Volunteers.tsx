import React from 'react';
import { motion } from 'motion/react';
import { VOLUNTEERS } from '../../data/foundationData';

export default function Volunteers() {
  return (
    <section id="volunteers" className="py-12 sm:py-20 bg-[#ffffff]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-[32px] font-semibold text-[#191c1d] tracking-tight uppercase leading-[42px]">
            OUR VOLUNTEERS
          </h2>
          <div className="w-12 h-1 bg-[#006c49] mx-auto mt-2 rounded-full" />
        </div>

        {/* 3 Circular Volunteer Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto text-center">
          {VOLUNTEERS.map((vol, idx) => (
            <motion.div
              key={vol.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Avatar Mask */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#f3f4f5] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group-hover:border-[#006c49] transition-all duration-300 relative mb-4">
                <img
                  src={vol.image}
                  alt={vol.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-bold text-[#191c1d] text-base sm:text-lg group-hover:text-[#006c49] transition-colors tracking-tight">
                {vol.name}
              </h3>
              <p className="text-xs text-[#3c4a42] font-semibold uppercase tracking-[0.05em] mt-1">
                {vol.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
