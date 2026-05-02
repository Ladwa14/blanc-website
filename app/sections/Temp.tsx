


"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const imageList = [
    "/Blanc_website_2.webp",
    "/Smile.webp",
    "/Above_the_fold_3.webp",
    "/Above_the_fold_4.webp",
    "/Above_the_fold_5.webp"
  ];

  const isScrolling = useRef(false);

useEffect(() => {


let startY = 0;

const handleTouchStart = (e: TouchEvent) => {
  startY = e.touches[0].clientY;
};

const handleTouchEnd = (e: TouchEvent) => {
  const endY = e.changedTouches[0].clientY;
  const diff = startY - endY;

  const section = containerRef.current;
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const inView =
    rect.top <= 0 && rect.bottom >= window.innerHeight;

  if (!inView) return;
  e.preventDefault();
  if (isScrolling.current) return;

  const isLast = activeIndex === imageList.length - 1;
  const isFirst = activeIndex === 0;

  if ((isLast && diff > 0) || (isFirst && diff < 0)) return;

  if (Math.abs(diff) > 30) {
    isScrolling.current = true;

    setActiveIndex((prev) =>
      diff > 0
        ? Math.min(prev + 1, imageList.length - 1)
        : Math.max(prev - 1, 0)
    );

    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  }
};


const handleTouchMove = (e: TouchEvent) => {
  const section = containerRef.current;
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const inView =
    rect.top <= 0 && rect.bottom >= window.innerHeight;

  if (!inView) return;

  const isLast = activeIndex === imageList.length - 1;
  const isFirst = activeIndex === 0;

  const currentY = e.touches[0].clientY;
  const diff = startY - currentY;

  // 👉 Allow normal scroll at edges
  if ((isLast && diff > 0) || (isFirst && diff < 0)) {
    return; // 🔥 DO NOT prevent scroll
  }

  // 👉 Otherwise lock scroll
  e.preventDefault();
};

  const handleWheel = (e: WheelEvent) => {
    const section = containerRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const inView =
      rect.top <= 0 && rect.bottom >= window.innerHeight;

    if (!inView) return;

    const isLast = activeIndex === imageList.length - 1;
    const isFirst = activeIndex === 0;

    // allow normal scroll at edges
    if ((isLast && e.deltaY > 0) || (isFirst && e.deltaY < 0)) {
      document.body.style.overflow = "auto";
      return;
    }

    e.preventDefault();

    // 🔥 HARD LOCK (no multiple triggers)
    if (isScrolling.current) return;

    isScrolling.current = true;
    document.body.style.overflow = "hidden";

    setActiveIndex((prev) => {
      return e.deltaY > 0
        ? Math.min(prev + 1, imageList.length - 1)
        : Math.max(prev - 1, 0);
    });

    // 🔥 match animation duration (IMPORTANT)
    setTimeout(() => {
      isScrolling.current = false;
    }, 600); // slightly more than 600ms animation
  };

  window.addEventListener("wheel", handleWheel, {
    passive: false,
  });

window.addEventListener("touchstart", handleTouchStart, { passive: false });
window.addEventListener("touchend", handleTouchEnd, { passive: false });
window.addEventListener("touchmove", handleTouchMove, { passive: false }); // 🔥 ADD THIS

return () => {
  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchend", handleTouchEnd);
  window.removeEventListener("touchmove", handleTouchMove); // 🔥 ADD THIS
  document.body.style.overflow = "auto";
};
}, [activeIndex]);

  return (
    <section
      ref={containerRef}
      className="h-screen relative overflow-hidden"
    >
      {/* 🔥 SLIDE IMAGES */}
      {imageList.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute w-full h-full object-cover object-[center_45%] will-change-transform
          transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          
          ${
            i === activeIndex
              ? "translate-y-0 z-10"
              : i < activeIndex
              ? "-translate-y-full z-10"
              : "translate-y-full z-10"
          }
          `}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none"></div>

      {/* TEXT */}
      {/* 🔥 LOGO (TOP CENTER LIKE REFERENCE) */}
<div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 z-30">
  <img
    src="/path1.png"
    alt="Blanc Logo"
    className="h-[12vh] md:h-28 object-contain scale-170 md:scale-70"
  />
</div>

      {/* 🔥 RIGHT INDICATOR */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-40">
        {imageList.map((_, i) => (
          <div key={i}>
            {activeIndex === i ? (
              <div className="w-[2px] h-16 bg-white rounded-full"></div>
            ) : (
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}