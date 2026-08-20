import React from "react";
import GalleryTunnel from "./gallery-tunnel";
import { HeroContent } from "./hero-content";

const FOUNDATION_IMAGES = [
  "/gallery/1743051485.jpg",
  "/gallery/1743051466.jpg",
  "/gallery/1743051449.jpg",
  "/gallery/1743051438.jpg",
  "/gallery/1743051382.jpg",
  "/gallery/1738299164.jpg",
  "/gallery/1738238755.JPG",
  "/gallery/1738238744.jpg",
  "/gallery/1738238725.jpg",
  "/gallery/1738238698.jpg",
  "/gallery/1738054473.jpg",
  "/gallery/1738054458.jpg",
  "/gallery/1738054440.jpg",
  "/gallery/1738048982.jpg",
  "/gallery/1690908498.jpg",
  "/gallery/1690908483.jpg",
  "/gallery/1690908403.jpg",
  "/gallery/1690908391.jpg",
  "/gallery/1690908380.jpg",
  "/gallery/1690908369.jpg",
  "/gallery/1690908359.jpg",
  "/gallery/1690908350.jpg",
  "/gallery/1690908247.jpeg",
];

const LIGHT_SLAB_COLORS = [
  "#f8f9fa",
  "#ffffff",
  "#edeeef",
  "#adedd3",
  "#f3f4f5",
];

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
