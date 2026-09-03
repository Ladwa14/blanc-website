import type { Metadata } from "next";
import ExperienceClient from "./ExperienceClient";

export const metadata: Metadata = {
  title: "The Experience | Blanc",
  description:
    "Experience personalized consultations, thoughtful care, and a seamless journey designed around comfort, confidence, and aesthetics.",
    alternates: {
    canonical: "https://www.blancveneers.com/experience",
  },
};

export default function Page() {
  return <ExperienceClient />;
}