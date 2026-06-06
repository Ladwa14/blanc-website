import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "The Process | Blanc",
  description:
    "Understand Blanc's meticulous smile transformation process, from consultation and planning to final delivery and long-term care.",
};

export default function Page() {
  return <ProcessClient />;
}