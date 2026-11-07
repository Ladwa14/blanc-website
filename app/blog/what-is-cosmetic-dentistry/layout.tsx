
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Cosmetic Dentistry? Complete Guide | Blanc Veneers",

  description:
    "Learn what cosmetic dentistry involves, explore popular treatments, understand costs and discover how Blanc Veneers approaches personalised smile design.",

  alternates: {
    canonical:
      "https://www.blancveneers.com/blog/what-is-cosmetic-dentistry",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "What Is Cosmetic Dentistry? Complete Guide | Blanc Veneers",

    description:
      "Learn what cosmetic dentistry involves, explore popular treatments, understand costs and discover how Blanc Veneers approaches personalised smile design.",

    url:
      "https://www.blancveneers.com/blog/what-is-cosmetic-dentistry",

    siteName: "Blanc Veneers",

    type: "article",

    images: [
      {
        url:
          "https://www.blancveneers.com/what-is-cosmetic-dentistry.webp",
        width: 1200,
        height: 675,
        alt: "Cosmetic Dentistry",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "What Is Cosmetic Dentistry? Complete Guide | Blanc Veneers",

    description:
      "Learn what cosmetic dentistry involves, explore popular treatments, understand costs and discover how Blanc Veneers approaches personalised smile design.",

    images: [
      "https://www.blancveneers.com/what-is-cosmetic-dentistry.webp",
    ],
  },
};

export default function CosmeticDentistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
