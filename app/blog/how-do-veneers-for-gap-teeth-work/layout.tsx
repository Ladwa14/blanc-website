import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Do Veneers for Gap Teeth Work? A Complete Guide | Blanc",

  description:
    "Understand how veneers can close gaps between teeth, how tooth proportions are planned, and what to expect during the veneer treatment process.",

  alternates: {
    canonical:
      "https://www.blancveneers.com/blog/how-do-veneers-for-gap-teeth-work",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "How Do Veneers for Gap Teeth Work? A Complete Guide | Blanc",

    description:
      "Understand how veneers can close gaps between teeth, how tooth proportions are planned, and what to expect during the veneer treatment process.",

    url:
      "https://www.blancveneers.com/blog/how-do-veneers-for-gap-teeth-work",

    siteName: "Blanc Esthetics",

    type: "article",

    images: [
      {
        url:
          "https://www.blancveneers.com/How_Do_Veneers_for_Gap_Teeth_Work.webp",
        width: 1200,
        height: 675,
        alt: "Veneers for Gap Teeth",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "How Do Veneers for Gap Teeth Work? A Complete Guide | Blanc",

    description:
      "Understand how veneers can close gaps between teeth, how tooth proportions are planned, and what to expect during the veneer treatment process.",

    images: [
      "https://www.blancveneers.com/How_Do_Veneers_for_Gap_Teeth_Work.webp",
    ],
  },
};

export default function HowDoVeneersForGapTeethLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}