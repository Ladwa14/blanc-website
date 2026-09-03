import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veneers for Crooked Teeth: Can Veneers Straighten Your Smile",

  description:
    "Wondering if veneers can fix crooked or uneven teeth? Learn how dental veneers improve smile alignment and create a straighter, natural-looking smile.",

  alternates: {
    canonical:
      "https://www.blancveneers.com/blog/veneers-for-crooked-teeth",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Veneers for Crooked Teeth: Can Veneers Straighten Your Smile",

    description:
      "Wondering if veneers can fix crooked or uneven teeth? Learn how dental veneers improve smile alignment and create a straighter, natural-looking smile.",

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
      "Veneers for Crooked Teeth: Can Veneers Straighten Your Smile",

    description:
      "Wondering if veneers can fix crooked or uneven teeth? Learn how dental veneers improve smile alignment and create a straighter, natural-looking smile.",

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