import type { Metadata } from "next";
import CraftClient from "./CraftClient";

export const metadata: Metadata = {
  title: "The Craft | Blanc",
  description:
    "Explore Blanc's philosophy of craftsmanship, combining clinical precision, design, and innovation to create natural, beautiful smiles.",
};

export default function Page() {
  return <CraftClient />;
}