export default function Footer() {
  return (

   

    <footer className="bg-[#ffffff] px-8 md:px-16 py-16 text-sm text-gray-600 max-w-5xl mx-auto mt-12 border-t border-gray-300">
     
      {/* TOP GRID */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LEFT */}
        <div>
          <p className="font-playfair text-black tracking-wide mb-3">
            BOOK A CONSULTATION →
          </p>
          <p className="font-manrope text-gray-500 leading-relaxed text-[13px]">
            All treatments are personalised. Individual results may vary.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <p className="font-playfair text-gray-500 mb-4 tracking-wide text-[13px]">
            QUICK LINKS
          </p>
          <ul className="font-manrope text-black space-y-2 text-[13px]">
            <li>THE ATELIER</li>
            <li>ARTISANS OF BLANC</li>
            <li>OUR WORK</li>
            <li>ESTHETICIANS AT BLANC</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">
          <div>
            <p className="font-playfair text-gray-500 text-[13px] tracking-wide">
              VISIT US AT
            </p>
            <p className="font-manrope text-black text-[13px] ">
              16th Road, Bandra West, Mumbai
            </p>
          </div>

          <div>
            <p className="font-playfair text-gray-500 text-[13px] tracking-wide">
              EMAIL US AT
            </p>
            <p className="font-manrope text-black text-[13px] ">
              info@blanc.com
            </p>
          </div>

          <div>
            <p className="font-playfair text-gray-500 text-[13px] tracking-wide">
              CALL US AT
            </p>
            <p className="font-manrope text-black text-[13px] ">
              +91 8976552346
            </p>
          </div>
        </div>

        {/* SOCIALS */}
        <div>
          <p className="font-playfair text-gray-500 mb-4 tracking-wide text-[13px]">
            SOCIALS
          </p>
          <ul className="font-manrope text-black space-y-2 text-[13px]">
            <li>FACEBOOK</li>
            <li>INSTAGRAM</li>
            <li>YOUTUBE</li>
            <li>X</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-300"></div>

      {/* BOTTOM */}
      <div className="font-manrope text-center mt-6 text-gray-500 text-[12px]">
        Copyright © 2026 Blanc | Site by WDK
      </div>

    </footer>
  );
}