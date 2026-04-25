"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".intro-text", {
      scrollTrigger: {
        trigger: ".intro-text",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      className="color-section py-20 px-6 text-center"
      data-bg="#ffffff"
    >
      <div className="intro-text">
        
        {/* LOGO IMAGE */}
        <img
          src="/path2.png"
          alt="Blanc"
          className="mx-auto mb-6 w-[300px] md:w-[180px] object-contain"
        />

        {/* DESCRIPTION */}
        <p className="max-w-xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed font-manrope">
          At Blanc, aesthetic dentistry is approached as a balance of clinical
          accuracy, creativity, and design sensibility.
        </p>

      </div>
    </section>
  );
}