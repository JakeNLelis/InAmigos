import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  HeartHandshake,
} from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#edeeef] font-['Manrope']"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column (5 of 12 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full lg:w-5/12 space-y-5"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1d] tracking-tight leading-tight">
            Serving Humanity with Integrity & Purpose
          </h2>

          {/* Summarized Description */}
          <p className="text-base sm:text-lg text-[#3c4a42] leading-[28px]">
            Founded on September 23, 2020, by{" "}
            <span className="font-semibold text-[#191c1d]">
              Mr. Govind Shukla (Founder & CEO)
            </span>
            , InAmigos Foundation is a Central Government licensed Section 8
            non-profit headquartered in Chhattisgarh, dedicated to uplifting
            communities across India through collective action.
          </p>

          <p className="text-sm sm:text-base text-[#3c4a42] leading-[26px]">
            Through key initiatives spanning hunger relief, child education,
            animal rescue, women empowerment, ecological conservation, and youth
            employability, we create measurable, sustainable positive change.
          </p>

          {/* Trust & Certification Badges */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-[#191c1d]">
            <div className="flex items-center gap-2 p-2.5 rounded-[8px] bg-[#f8f9fa] border border-[#e1e3e4]">
              <ShieldCheck className="w-4 h-4 text-[#006c49] shrink-0" />
              <span>80G & 12A Tax-Exempt</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-[8px] bg-[#f8f9fa] border border-[#e1e3e4]">
              <Award className="w-4 h-4 text-[#006c49] shrink-0" />
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-[8px] bg-[#f8f9fa] border border-[#e1e3e4]">
              <HeartHandshake className="w-4 h-4 text-[#006c49] shrink-0" />
              <span>CSR-1 & Section 8</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-[8px] bg-[#f8f9fa] border border-[#e1e3e4]">
              <Users className="w-4 h-4 text-[#006c49] shrink-0" />
              <span>NITI Aayog Registered</span>
            </div>
          </div>

          {/* Action Button (0.5rem / 8px radius) */}
          <div className="pt-3">
            <motion.a
              href="/about"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[8px] bg-[#006c49] hover:bg-[#005a3c] text-white text-sm font-bold tracking-[0.05em] uppercase shadow-xs transition-all duration-200"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column (7 of 12 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="w-full lg:w-7/12"
        >
          <div className="w-full rounded-[16px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.06)] border border-[#e1e3e4] bg-[#f8f9fa] group">
            <img
              src="/gallery/592891085_1179481434315985_1180859562307713661_n.jpg"
              alt="InAmigos Foundation Pan-India Operations & Team"
              className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
