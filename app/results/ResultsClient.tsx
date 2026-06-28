"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const categories = [
  "All Results",
//   "Porcelain Veneers",
//   "Composite Veneers",
//   "Smile Makeover",
//   "Close Gaps",
//   "Whitening + Veneers",
];


const results = [
  { image: "/before_after_1.webp", category: "Porcelain Veneers" },
  { image: "/before_after_2.webp", category: "Composite Veneers" },
  { image: "/before_after_3.webp", category: "Smile Makeover" },
  { image: "/before_after_4.webp", category: "Close Gaps" },
  { image: "/before_after_5.webp", category: "Whitening + Veneers" },
  { image: "/before_after_6.webp", category: "Porcelain Veneers" },
  { image: "/before_after_7.webp", category: "Composite Veneers" },
  { image: "/before_after_8.webp", category: "Smile Makeover" },
  { image: "/before_after_9.webp", category: "Close Gaps" },
  { image: "/before_after_10.webp", category: "Whitening + Veneers" },
  { image: "/before_after_11.webp", category: "Porcelain Veneers" },
  { image: "/before_after_12.webp", category: "Composite Veneers" },
  { image: "/before_after_13.webp", category: "Smile Makeover" },
  { image: "/before_after_14.webp", category: "Close Gaps" },
  { image: "/before_after_15.webp", category: "Whitening + Veneers" },
  { image: "/before_after_16.webp", category: "Porcelain Veneers" },
  { image: "/before_after_17.webp", category: "Composite Veneers" },
  { image: "/before_after_18.webp", category: "Smile Makeover" },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState("All Results");

  const filteredResults =
    selectedCategory === "All Results"
      ? results
      : results.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="bg-white pt-32 pb-24">

        <div className="max-w-6xl mx-auto px-6">

          {/* Top Label */}
          <p className="text-center text-xs tracking-[0.3em] text-gray-500 font-playfair uppercase">
            REAL RESULTS. REAL CONFIDENCE.
          </p>

          {/* Heading */}
          <h1 className="mt-5 text-center font-playfair text-4xl md:text-6xl text-[#2b2b2b]">
            Real <span className="italic">Blanc</span> Results
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl mx-auto text-center text-gray-600 font-manrope leading-8">
            Discover real smile transformations crafted with precision,
            designed for confidence.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-14">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-manrope transition ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">

            {filteredResults.map((item, index) => (

           <div
  key={index}
  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition duration-300"
>
<img
  src={item.image}
  alt={`Result ${index + 1}`}
  className="w-full aspect-[4/5] object-cover transition duration-500 hover:scale-105"
/>
              </div>

            ))}

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}