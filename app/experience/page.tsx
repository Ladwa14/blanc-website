"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const images = [
  "/Blanc_website_2.webp",
  "/Smile.webp",
  "/Above_the_fold_3.webp",
  "/Above_the_fold_4.webp",
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeIndexRef = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleWheel = (e: WheelEvent) => {
      if (menuOpen) return;

      const section = containerRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();

      const inView =
        rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!inView) return;

      if (
        (e.deltaY > 0 &&
          activeIndexRef.current === images.length - 1) ||
        (e.deltaY < 0 &&
          activeIndexRef.current === 0)
      ) {
        return;
      }

      e.preventDefault();

      if (isScrolling.current) return;

      isScrolling.current = true;

      updateIndex(e.deltaY > 0 ? 1 : -1);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (menuOpen) return;

      touchEndX = e.changedTouches[0].clientX;

      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) < 50) return;

      if (
        (diff > 0 &&
          activeIndexRef.current === images.length - 1) ||
        (diff < 0 &&
          activeIndexRef.current === 0)
      ) {
        return;
      }

      if (isScrolling.current) return;

      isScrolling.current = true;

      updateIndex(diff > 0 ? 1 : -1);
    };

    const updateIndex = (direction: number) => {
      setActiveIndex((prev) => {
        const next =
          direction > 0
            ? Math.min(prev + 1, images.length - 1)
            : Math.max(prev - 1, 0);

        activeIndexRef.current = next;

        return next;
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener(
      "touchstart",
      handleTouchStart
    );

    window.addEventListener(
      "touchend",
      handleTouchEnd
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );

      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= EXPERIENCE SECTION ================= */}
      <section
        ref={containerRef}
        className="relative min-h-screen"
      >
        {/* MENU HEADER */}
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* MAIN LAYOUT */}
        <div className="min-h-screen flex flex-col md:flex-row relative">

          {/* LOGO */}
          <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <img
              src="/path2.png"
              className="w-20 md:w-28 opacity-90"
            />
          </div>

          {/* LEFT IMAGE SECTION */}
          <div className="w-full md:w-1/2 relative overflow-hidden h-[60vh] md:h-screen">
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>

            {/* DOT INDICATORS */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full ${
                    activeIndex === i
                      ? "w-6 bg-white"
                      : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 bg-[#f5f5f5] flex items-center px-6 md:px-16 py-10 md:py-0 relative overflow-hidden">

            {/* WATERMARK */}
            <h1 className="absolute inset-0 flex items-center justify-center text-center text-[70px] md:text-[90px] font-playfair text-black/5 pointer-events-none select-none leading-none -translate-y-5 md:-translate-y-5">
              THE <br /> EXPERIENCE
            </h1>

            {/* CONTENT */}
            <div className="max-w-lg relative z-10 text-center px-0 md:px-0">

              {/* SMALL LABEL */}
              <p className="text-xs tracking-[0.25em] text-center text-gray-500 mb-4 font-playfair">
                THE EXPERIENCE
              </p>

              {/* PARAGRAPH */}
              <p className="text-sm text-gray-600 leading-relaxed font-manrope text-left font-semibold">
                Individual consultation   </p>
<p className="text-sm text-gray-600 mb-6 leading-relaxed font-manrope text-left">
                A one-to-one conversation focused on understanding vision, priorities, and expectations. 
                  </p>
               <p className="text-sm text-gray-600 leading-relaxed font-manrope text-left font-semibold">
                Clear guidance   </p>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed font-manrope text-left">
                Clinical options and treatment pathways explained with clarity and discretion </p>
              

              {/* MAIN HEADING */}
              <h2 className="text-3xl md:text-5xl font-playfair text-center leading-tight mb-6 md:mb-8 text-[#2b2b2b] max-w-[900px] mx-auto">
Personal. 
                <span className="italic"> Intentional. </span>

                
                  Calm. 
                 
                
              </h2>

              {/* CONTENT BLOCK */}
              <div className="mb-6">
               <p className="text-sm text-gray-600 leading-relaxed font-manrope text-left font-semibold">
                Design alignment   </p>
<p className="text-sm text-gray-600 mb-6 leading-relaxed font-manrope text-left">
                Visual planning and digital previews used to establish alignment before we begin.
                  </p>
               <p className="text-sm text-gray-600 leading-relaxed font-manrope text-left font-semibold">
                Functional longevity   </p>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed font-manrope text-left">
                Designed with long-term function in mind, with attention to comfort and balance. </p>
              
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}