import type { Metadata } from "next";

import Hero from "./sections/Temp";
import Intro from "./sections/Intro";
import Highlights from "./sections/Highlights";
import Footer from "./sections/Footer";
import Craft from "./sections/Craft";


export const metadata: Metadata = {
  title: "Blanc | Cosmetic Dentistry & Smile Design in Mumbai",
  description:
    "Blanc offers personalized cosmetic dentistry, smile design, veneers, and aesthetic dental treatments in Mumbai.",
     alternates: {
    canonical: "https://www.blancesthetics.com/",
  },

};


export default function Home() {
  return (
    <>
   
      <Hero />
      <Intro />
      <Highlights />
      <Footer />
    </>
  );
}