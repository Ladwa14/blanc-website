"use client";

import Link from "next/link";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  showBackButton?: boolean;
}

export default function Header({
  menuOpen,
  setMenuOpen,
  showBackButton = true,
}: HeaderProps) {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 md:px-12 py-4 pointer-events-none">

        {/* MENU BUTTON */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-3 cursor-pointer pointer-events-auto touch-manipulation"
        >
          <div className="flex flex-col gap-1">
            <span className="w-5 h-[1px] bg-black block"></span>
            <span className="w-5 h-[1px] bg-black block"></span>
          </div>

          <span className="text-sm tracking-widest font-manrope text-black">
            MENU
          </span>
        </div>

         {/* CENTER LOGO */}
    <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
      <img
        src="/path2.png"
        alt="Blanc Logo"
        className="w-20 md:w-28 opacity-90"
      />
    </div>

        {/* BACK BUTTON */}
       {/* BACK BUTTON */}
{showBackButton && (
  <Link
    href="/"
    className="pointer-events-auto"
  >
    <div className="flex items-center gap-2 cursor-pointer">
      <span className="text-xl text-black">←</span>

      <span className="text-sm tracking-widest font-manrope text-black">
        BACK
      </span>
    </div>
  </Link>
)}

      </header>

      {/* FULLSCREEN MENU */}
      <div
        data-menu
        className={`fixed inset-0 z-[200] flex flex-col justify-center text-white transition-all duration-500 ease-in-out
        ${
          menuOpen
            ? "opacity-100 translate-y-0 bg-black"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 left-5 text-xs tracking-widest font-manrope"
        >
          CLOSE
        </button>

        {/* MENU ITEMS */}
        <nav className="flex flex-col items-center gap-8 px-8">

          <Link
            href="/craft"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-3xl md:text-5xl font-playfair block py-2">
              The Craft
            </span>
          </Link>

          <Link
            href="/artisans"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-3xl md:text-5xl font-playfair block py-2">
              The Artisans
            </span>
          </Link>

          <Link
            href="/esthetician"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-3xl md:text-5xl font-playfair block py-2">
              The Esthetician
            </span>
          </Link>

          <Link
            href="/experience"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-3xl md:text-5xl font-playfair block py-2">
              The Experience
            </span>
          </Link>

          <Link
            href="/process"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-3xl md:text-5xl font-playfair block py-2">
              The Process
            </span>
          </Link>

          <Link
  href="/faq"
  onClick={() => setMenuOpen(false)}
>
  <span className="text-3xl md:text-5xl font-playfair block py-2">
    FAQ
  </span>
</Link>

        </nav>
      </div>
    </>
  );
}