"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Highlights() {

  const items = [
    {
      label: "THE CRAFT",
      text: "Defining synthesis of artisanal skill and aesthetic imagination.",
      link: "/craft",
    },
    {
      label: "THE EXPERIENCE",
      text: "Personal. Intentional. Calm.",
      link: "/experience",
    },
    {
      label: "THE PROCESS",
      text: "A disciplined approach to aesthetic dentistry.",
      link: "/process",
    },
    {
      label: "THE RESULTS",
      text: "Natural. Balanced. Authentic.",
      link: "/results",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray(".highlight-item");

    items.forEach((item: any) => {

      gsap.set(item, {
        opacity: 1,
        y: 0,
      });

      gsap.from(item, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

    });

    ScrollTrigger.refresh();

  }, []);

  return (
    <section>
      {items.map((item, index) => (
        <Link key={index} href={item.link}>
          <div
            className={`highlight-item py-24 px-6 cursor-pointer transition-colors duration-300 ${
              index % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"
            } hover:bg-[#efefef]`}
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
        </Link>
      ))}
    </section>
  );
}