import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Smile Design Procedure: Complete Guide | Blanc",

  description:
    "Discover everything about the digital smile design procedure, how it works, its benefits, and its role in a smile makeover with veneers.",

  alternates: {
    canonical:
      "https://www.blancveneers.com/blog/digital-smile-design-procedure",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Digital Smile Design Procedure: Complete Guide | Blanc",

    description:
      "Discover everything about the digital smile design procedure, how it works, its benefits, and its role in a smile makeover with veneers.",

    url:
      "https://www.blancesthetics.com/blog/digital-smile-design-procedure",

    siteName: "Blanc Esthetics",

    type: "article",

    images: [
      {
        url:
          "https://www.blancesthetics.com/How_Do_Veneers_for_Gap_Teeth_Work.webp",
        width: 1200,
        height: 675,
        alt: "Digital Smile Design Procedure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Digital Smile Design Procedure: Complete Guide | Blanc",

    description:
      "Discover everything about the digital smile design procedure, how it works, its benefits, and its role in a smile makeover with veneers.",

    images: [
      "https://www.blancesthetics.com/How_Do_Veneers_for_Gap_Teeth_Work.webp",
    ],
  },
};

export default function DigitalSmileDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}