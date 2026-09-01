import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veneers for Crooked Teeth: Can They Straighten Your Smile? | Blanc Esthetics",

  description:
    "Can veneers straighten crooked teeth? Learn how veneers can improve the appearance of mildly crooked teeth, when they may be suitable, and how the veneer process works at Blanc Esthetics.",

  alternates: {
    canonical:
      "https://www.blancesthetics.com/blog/veneers-for-crooked-teeth",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Veneers for Crooked Teeth: Can They Straighten Your Smile? | Blanc Esthetics",

    description:
      "Learn how veneers can improve the appearance of mildly crooked teeth, when they may be suitable, and what to expect during the veneer treatment process at Blanc Esthetics.",

    url: "https://www.blancesthetics.com/blog/veneers-for-crooked-teeth",

    siteName: "Blanc Esthetics",

    type: "article",

    images: [
      {
        url: "https://www.blancesthetics.com/Veneers_for_Crooked_Teeth_Can_Veneers_Straighten_Your_Smile_.webp",
        width: 1200,
        height: 675,
        alt: "Veneers for Crooked Teeth",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Veneers for Crooked Teeth: Can They Straighten Your Smile? | Blanc Esthetics",

    description:
      "Discover how veneers can improve the appearance of mildly crooked teeth and when they may be suitable for a straighter-looking smile.",

    images: [
      "https://www.blancesthetics.com/Veneers_for_Crooked_Teeth_Can_Veneers_Straighten_Your_Smile_.webp",
    ],
  },
};

export default function VeneersForCrookedTeethLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}