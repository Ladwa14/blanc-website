
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Composite Veneers vs Ceramic Veneers: Which Is Right for You? | Blanc",

  description:
    "Understand the difference between composite veneers and ceramic veneers, including aesthetics, durability, treatment process, maintenance, and suitability.",

  alternates: {
    canonical:
      "https://www.blancveneers.com/blog/composite-veneers-vs-ceramic-veneers",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Composite Veneers vs Ceramic Veneers: Which Is Right for You? | Blanc",

    description:
      "Understand the difference between composite veneers and ceramic veneers, including aesthetics, durability, treatment process, maintenance, and suitability.",

    url:
      "https://www.blancveneers.com/blog/composite-veneers-vs-ceramic-veneers",

    siteName: "Blanc Veneers",

    type: "article",

    images: [
      {
        url:
          "https://www.blancveneers.com/composite-veneers-vs-ceramic-veneers.webp",
        width: 1200,
        height: 675,
        alt: "Composite Veneers vs Ceramic Veneers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Composite Veneers vs Ceramic Veneers: Which Is Right for You? | Blanc",

    description:
      "Understand the difference between composite veneers and ceramic veneers, including aesthetics, durability, treatment process, maintenance, and suitability.",

    images: [
      "https://www.blancveneers.com/composite-veneers-vs-ceramic-veneers.webp",
    ],
  },
};

export default function CompositeCeramicVeneersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
