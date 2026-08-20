import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Mail,
  Smartphone,
  CheckCircle,
  Send,
  AlertCircle,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    // Simulate async submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ fullName: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#ffffff] font-['Manrope'] text-[#191c1d]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information (5 of 12 columns) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#191c1d] leading-tight mb-4">
                Get in touch
              </h1>
              <p className="text-sm sm:text-base text-[#3c4a42] leading-[26px]">
                Have a question, proposal, or want to collaborate? Fill out the
                form or reach out to us directly through any of our official
                channels.
              </p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[8px] bg-[#006c49]/10 flex items-center justify-center text-[#006c49] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-[#191c1d]">
                    Address
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3c4a42] leading-[22px]">
                    Ward No. 5, Gram Post, Sipat Ujwal Nagar, Bilaspur,
                    Chhattisgarh Pin-Code: 495555
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[8px] bg-[#006c49]/10 flex items-center justify-center text-[#006c49] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-[#191c1d]">Email</h3>
                  <a
                    href="mailto:support@inamigosfoundation.org.in"
                    className="text-xs sm:text-sm text-[#006c49] font-medium hover:underline block"
                  >
                    support@inamigosfoundation.org.in
                  </a>
                  <a
                    href="mailto:inamigosfoundation@gmail.com"
                    className="text-xs sm:text-sm text-[#3c4a42] hover:text-[#006c49] transition-colors block"
                  >
                    inamigosfoundation@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[8px] bg-[#006c49]/10 flex items-center justify-center text-[#006c49] shrink-0 mt-0.5">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-[#191c1d]">Phone</h3>
                  <a
                    href="tel:+916267309902"
                    className="text-xs sm:text-sm text-[#191c1d] font-semibold hover:text-[#006c49] transition-colors block"
                  >
                    +91 626 730 9902
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 of 12 columns) */}
          <div className="lg:col-span-7 bg-[#f8f9fa] p-6 sm:p-10 rounded-[20px] border border-[#e1e3e4] shadow-[0px_4px_20px_rgba(0,0,0,0.03)]">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#006c49]/10 text-[#006c49] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#191c1d]">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-[#3c4a42] max-w-md mx-auto leading-relaxed">
                    Your message has been successfully submitted to InAmigos
                    Foundation. Our team will review your inquiry and get back
                    to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2.5 rounded-[8px] bg-[#006c49] text-white text-xs font-bold uppercase tracking-[0.05em] hover:bg-[#005a3c] transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-[#191c1d]"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full bg-white px-4 py-3.5 rounded-[8px] border border-[#e1e3e4] text-[#191c1d] placeholder-[#8c948e] text-sm focus:outline-none focus:border-[#006c49] focus:ring-2 focus:ring-[#006c49]/15 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#191c1d]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full bg-white px-4 py-3.5 rounded-[8px] border border-[#e1e3e4] text-[#191c1d] placeholder-[#8c948e] text-sm focus:outline-none focus:border-[#006c49] focus:ring-2 focus:ring-[#006c49]/15 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Your Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#191c1d]"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      required
                      className="w-full bg-white px-4 py-3.5 rounded-[8px] border border-[#e1e3e4] text-[#191c1d] placeholder-[#8c948e] text-sm focus:outline-none focus:border-[#006c49] focus:ring-2 focus:ring-[#006c49]/15 transition-all shadow-2xs resize-y"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="p-3 rounded-[8px] bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3.5 rounded-[8px] bg-[#00a86b] hover:bg-[#008f5b] text-white font-bold text-xs sm:text-sm tracking-[0.05em] uppercase shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
