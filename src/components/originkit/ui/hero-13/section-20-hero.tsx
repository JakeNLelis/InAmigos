import React from "react";
import GalleryTunnel from "./gallery-tunnel";
import { HeroContent } from "./hero-content";

const FOUNDATION_IMAGES = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
  "/originkit/hero-13/potrait-1.png",
  "/originkit/hero-13/potrait-2.png",
  "/originkit/hero-13/potrait-3.png",
];

const LIGHT_SLAB_COLORS = ["#f8f9fa", "#ffffff", "#edeeef", "#adedd3", "#f3f4f5"];

export const Section20Hero = () => {
  const handleExploreGallery = () => {
    window.location.hash = "#causes";
  };

  const handleBookShoot = () => {
    window.location.hash = "#donate";
  };

  return (
    <section
      id="home"
      aria-label="InAmigos 3D Perspective Hero"
      className="relative isolate flex min-h-[640px] sm:min-h-[720px] lg:h-[85vh] max-h-[920px] w-full items-center justify-center overflow-hidden bg-white border-b border-[#edeeef]"
    >
      {/* 3D Foundation Community Gallery Tunnel (Clean white background, 0 grid lines) */}
      <div
        aria-hidden="true"
        className="pointer-events-auto absolute inset-0 z-0"
      >
        <GalleryTunnel
          images={FOUNDATION_IMAGES}
          colors={LIGHT_SLAB_COLORS}
          background="#ffffff"
          lineColor="#ffffff"
          lineOpacity={0}
          grid={6}
          speed={45}
          boost={90}
          fade={100}
          label={false}
          cellMode="square"
        />
      </div>

      {/* Smooth radial white veil behind text ensuring pristine contrast and readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 z-10 h-[80vh] w-[95vw] sm:w-[70vw] lg:w-[50vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.65)_45%,transparent_75%)]"
      />

      <div className="pointer-events-none relative z-20 flex w-full max-w-[760px] items-center justify-center py-12">
        <div className="pointer-events-auto relative flex w-full items-center justify-center">
          <HeroContent
            onExploreGallery={handleExploreGallery}
            onBookShoot={handleBookShoot}
          />
        </div>
      </div>
    </section>
  );
};
