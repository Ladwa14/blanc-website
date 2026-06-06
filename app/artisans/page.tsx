import type { Metadata } from "next";
import ArtisansClient from "./ArtisansClient";

export const metadata: Metadata = {
  title: "Artisans of Blanc | Blanc",
  description:
    "Meet the artisans behind Blanc, where craftsmanship, precision, and aesthetic expertise come together to create timeless smiles.",
};

export default function Page() {
  return <ArtisansClient />;
}