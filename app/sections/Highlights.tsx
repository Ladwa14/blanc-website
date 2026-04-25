"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Highlights() {

  const items = [
    { label: "THE CRAFT", text: "Defining synthesis of artisanal skill and aesthetic imagination." },
    { label: "THE EXPERIENCE", text: "Personal. Intentional. Calm." },
    { label: "THE PROCESS", text: "A disciplined approach to aesthetic dentistry." },
    { label: "THE RESULTS", text: "Natural. Balanced. Authentic." }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".highlight-item", {
      scrollTrigger: ".highlight-item",
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <section>

      {items.map((item, index) => (
        <div
          key={index}
          className={`highlight-item py-24 px-6 ${
            index % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"
          }`}
        >
          <div className="max-w-2xl mx-auto text-center">

            <p className="font-playfair text-sm tracking-[0.2em] text-black mb-3">
  {item.label}
</p>

<h3 className="font-manrope text-lg md:text-2xl font-light leading-relaxed">
  {item.text} →
</h3>

          </div>
        </div>
      ))}

    </section>
  );
}