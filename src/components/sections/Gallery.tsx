import React from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../../data/foundationData';

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 sm:py-20 bg-[#ffffff] border-t border-[#edeeef]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-[32px] font-semibold text-[#191c1d] tracking-tight uppercase leading-[42px]">
            OUR GALLERY
          </h2>
          <div className="w-12 h-1 bg-[#006c49] mx-auto mt-2 rounded-full" />
        </div>

        {/* Gallery Mosaic Grid (24px gutter, 16px radius) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-[16px] aspect-4/3 bg-[#f3f4f5] border border-[#e1e3e4] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#4edea3]">
                  {item.category}
                </span>
                <h4 className="text-sm sm:text-base font-semibold leading-snug">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
