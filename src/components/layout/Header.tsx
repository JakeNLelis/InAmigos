import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "OUR CAUSE", href: "/#causes" },
    { label: "VOLUNTEER", href: "/#volunteers" },
    { label: "EVENTS", href: "/events" },
    { label: "CONTACT", href: "/contact" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.includes("/about")) setActiveNav("ABOUT");
      else if (path.includes("/events")) setActiveNav("EVENTS");
      else if (path.includes("/contact")) setActiveNav("CONTACT");
      else if (window.location.hash === "#causes") setActiveNav("OUR CAUSE");
      else if (window.location.hash === "#volunteers") setActiveNav("VOLUNTEER");
      else if (path === "/" || path === "") setActiveNav("HOME");
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-[10px] border-b border-[#e1e3e4] transition-all duration-200 font-['Manrope']">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Foundation Logo (Only photo from /logo.png, no extra text) */}
          <a
            href="/"
            className="flex items-center group py-2"
            aria-label="InAmigos Foundation Home"
          >
            <img
              src="/logo.png"
              alt="InAmigos Foundation Logo"
              className="h-14 sm:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-xs font-bold text-[#191c1d] tracking-[0.05em]">
            {navItems.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`py-2 transition-colors relative ${
                    isActive ? "text-[#006c49]" : "hover:text-[#006c49]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#006c49] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Donate Button (0.5rem / 8px radius) */}
          <div className="flex items-center gap-4">
            <motion.a
              href="/#donate"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-[8px] bg-[#006c49] hover:bg-[#005a3c] text-white font-bold text-xs tracking-[0.05em] uppercase shadow-xs transition-all duration-200"
            >
              DONATE
            </motion.a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-[8px] text-[#191c1d] hover:bg-[#f3f4f5]"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-[#e1e3e4] px-6 py-4 space-y-2.5"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.label);
                  setMobileOpen(false);
                }}
                className="block py-2 text-sm font-bold text-[#191c1d] hover:text-[#006c49] tracking-[0.05em]"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
