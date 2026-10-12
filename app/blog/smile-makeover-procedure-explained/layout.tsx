
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smile Makeover Procedure Explained | Blanc Esthetics",

  description:
    "Explore every step of a smile makeover procedure, from digital smile design to dental veneers. Get a natural, confident smile at Blanc.",

  alternates: {
    canonical:
      "https://www.blancveneers.com/blog/smile-makeover-procedure-explained",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Smile Makeover Procedure Explained | Blanc Esthetics",

    description:
      "Explore every step of a smile makeover procedure, from digital smile design to dental veneers. Get a natural, confident smile at Blanc.",

    url: "https://www.blancveneers.com/blog/smile-makeover-procedure-explained",

    siteName: "Blanc Esthetics",

    type: "article",

    images: [
      {
        url: "https://www.blancveneers.com/Smile_Makeover_Procedures.webp",
        width: 1200,
        height: 675,
        alt: "Smile Makeover Procedures",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Smile Makeover Procedure Explained | Blanc Esthetics",

    description:
      "Explore every step of a smile makeover procedure, from digital smile design to dental veneers. Get a natural, confident smile at Blanc.",

    images: [
      "https://www.blancveneers.com/Smile_Makeover_Procedures.webp",
    ],
  },
};

export default function SmileMakeoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
