import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from 'lucide-react';

export default function GetInTouch() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#ffffff] border-t border-[#edeeef] font-['Manrope']">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left Column (5 of 12 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full lg:w-5/12 space-y-5"
        >
          {/* Subtitle Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006c49]/10 text-[#006c49] text-xs font-bold tracking-[0.05em] uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONNECT</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1d] tracking-tight leading-tight">
            Get In Touch
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#3c4a42] leading-[28px] max-w-md">
            We'd love to hear from you. Reach out to collaborate, volunteer, or support our community initiatives across society.
          </p>

          {/* Contact Details Quick List */}
          <div className="space-y-3 pt-2 text-sm text-[#3c4a42]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[6px] bg-[#006c49]/10 flex items-center justify-center text-[#006c49]">
                <Mail className="w-4 h-4" />
              </div>
              <a href="mailto:inamigosfoundation@gmail.com" className="hover:text-[#006c49] transition-colors font-medium">
                inamigosfoundation@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[6px] bg-[#006c49]/10 flex items-center justify-center text-[#006c49]">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">+91 98765 43210</span>
            </div>
          </div>

          {/* Action Button (0.5rem / 8px radius) */}
          <div className="pt-3">
            <motion.a
              href="mailto:inamigosfoundation@gmail.com"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[8px] bg-[#006c49] hover:bg-[#005a3c] text-white text-sm font-bold tracking-[0.05em] uppercase shadow-xs transition-all duration-200"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column (7 of 12 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full lg:w-7/12"
        >
          <div className="w-full rounded-[16px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.06)] border border-[#e1e3e4] bg-[#f8f9fa] group">
            <img
              src="https://cdn.sceneai.art/Image%20for%20any%20section/922c17a8-8ca8-4fb8-8528-3f357e48a693.avif"
              alt="InAmigos Community Outreach & Support"
              onError={(e) => {
                // Fallback in case remote CDN fails
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80";
              }}
              className="w-full h-[340px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
