import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ | Blanc",
  description:
    "Frequently asked questions about veneers, smile design, cosmetic dentistry, consultations, and the Blanc process.",
    alternates: {
    canonical: "https://www.blancesthetics.com/faq",
  },
};

export default function Page() {
  return <FaqClient />;
}