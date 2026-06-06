import type { Metadata } from "next";
import EstheticianClient from "./EstheticianClient";

export const metadata: Metadata = {
  title: "The Esthetician | Blanc",
  description:
    "Learn about the expertise, vision, and patient-centered approach that guide every smile transformation at Blanc.",
};

export default function Page() {
  return <EstheticianClient />;
}