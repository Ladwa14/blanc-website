"use client";

export default function CraftSection() {
  return (
    <section
      className="color-section w-full min-h-screen flex items-center justify-center bg-[#f1f1f1]"
      data-bg="#f1f1f1"
    >
      {/* INNER CONTENT WITH SIDE WHITESPACE */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-20 text-center">

        {/* Small Heading */}
        <p className="tracking-[0.25em] text-xs text-gray-400 mb-6 font-manrope">
          THE CRAFT
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl leading-tight font-playfair text-[#2b2b2b]">
          Defining synthesis of{" "}
          <span className="italic">artisanal</span> skill and{" "}
          <span className="italic">aesthetic</span> imagination.{" "}
          <span className="ml-2">→</span>
        </h2>

      </div>
    </section>
  );
}