import type { Metadata } from "next";
import ResultsClient from "./ResultsClient";

export const metadata: Metadata = {
  title: "Results | Blanc",
  description:
    "Explore real smile transformations by Blanc. Discover porcelain veneers, composite veneers, smile makeovers and more.",
     alternates: {
    canonical: "https://www.blancveneers.com/results",
  },
};

export default function Page() {
  return <ResultsClient />;
}