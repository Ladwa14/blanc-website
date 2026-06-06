import type { Metadata } from "next";
import AtelierClient from "./AtelierClient";

export const metadata: Metadata = {
  title: "The Atelier | Blanc",
  description:
    "Discover the Blanc Atelier, a refined environment where advanced dentistry, artistry, and bespoke smile design meet.",
};

export default function Page() {
  return <AtelierClient />;
}