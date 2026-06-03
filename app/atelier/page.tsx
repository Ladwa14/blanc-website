"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const images = [
  "/Blanc_website_2.webp",
  "/Smile.webp",
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
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!inView) return;

      if (
        (e.deltaY > 0 && activeIndexRef.current === images.length - 1) ||
        (e.deltaY < 0 && activeIndexRef.current === 0)
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
        (diff > 0 && activeIndexRef.current === images.length - 1) ||
        (diff < 0 && activeIndexRef.current === 0)
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

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [menuOpen]);

  return (
    <>
      <section ref={containerRef} className="relative min-h-screen">
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <div className="min-h-screen flex flex-col md:flex-row relative">
          {/* LEFT IMAGE SECTION */}
          <div className="w-full md:w-1/2 relative overflow-hidden h-[75vh] md:h-screen">
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
                  alt={`Atelier ${i + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>

            {/* DOTS */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-6 bg-white"
                      : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 bg-[#f5f5f5] flex items-center px-6 md:px-16 py-12 md:py-0 relative overflow-hidden">
            {/* WATERMARK */}
            <h1 className="absolute inset-0 flex items-center justify-center text-center text-[70px] md:text-[90px] font-playfair text-black/[0.04] pointer-events-none select-none leading-none">
              THE
              <br />
              ATELIER
            </h1>

            <div className="max-w-xl relative z-10 text-center md:text-left">
              <p className="text-xs tracking-[0.25em] text-center text-gray-500 mb-4 font-playfair">
                THE ATELIER
              </p>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed font-manrope">
                The Atelier is where design, material, and execution remain
                connected within a single creative environment.
              </p>

              <h2 className="text-3xl md:text-5xl font-playfair text-center leading-tight mb-8 text-[#2b2b2b]">
                Where digital precision meets{" "}
                <span className="italic">handcrafted</span> artistry.
              </h2>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed font-manrope">
                Every smile begins with digital design, where facial
                proportions, contours, and balance are carefully studied and
                refined before fabrication begins.
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-8 font-manrope">
                <p className="text-sm text-gray-600 mb-2 leading-relaxed font-manrope">
                  The process integrates:
                </p>

                <li>• Digital Smile Design</li>
                <li>• CAD-Based Planning</li>
                <li>• Ceramic Fabrication</li>
                <li>• Hand Finishing</li>
                <li>• Shade & Contour Refinement</li>
                <li>• Collaborative Clinical Input</li>
              </ul>

              <p className="text-sm text-gray-600 leading-relaxed font-manrope">
                Technology supports precision throughout, while hand-finishing
                softens edges, balances contours, and allows light to settle
                naturally across the final surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALITY OF LIGHT */}
      <section className="bg-white py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] text-gray-500 mb-4 font-playfair text-center">
            THE MATERIALITY OF LIGHT
          </p>

          <h2 className="font-playfair text-4xl md:text-4xl text-[#2b2b2b] leading-tight mb-10 text-center">
            Designed around how light moves through a smile.
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-gray-600 leading-relaxed font-manrope text-center">
            <p>
              At Blanc, material selection begins with how light interacts with
              the smile. We work primarily with high-translucency glass
              ceramics chosen for their ability to reflect depth, softness, and
              natural enamel characteristics.
            </p>

            <p>
              Unlike conventional ceramics, these materials allow light to pass
              through and diffuse gently, helping restorations blend seamlessly
              with surrounding teeth rather than appearing opaque or
              surface-bound.
            </p>

            <p>
              Each ceramic is processed through controlled heat and pressure to
              achieve strength without unnecessary bulk, allowing restorations
              to remain refined while maintaining durability over time.
            </p>
          </div>
        </div>
      </section>

      {/* PROVENANCE */}
      <section className="bg-[#f7f7f7] py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] text-gray-500 mb-4 font-playfair text-center">
            PROVENANCE
          </p>

          <h2 className="font-playfair text-4xl md:text-4xl text-[#2b2b2b] leading-tight mb-10 text-center">
            Quality begins at the source.
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-gray-600 leading-relaxed font-manrope text-center">
            <p>
              Our glass ceramics are derived from refined mineral sources
              selected for consistency, purity, and structural integrity.
            </p>

            <p>
              These raw materials form the foundation of every restoration,
              providing clarity and predictability throughout fabrication.
            </p>

            <p>
              By working with carefully sourced ceramic systems and maintaining
              strict material standards, Blanc ensures reliability at every
              stage—from digital design to final placement.
            </p>

            <p>
              For us, quality begins at the source and carries through the
              entire process.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}