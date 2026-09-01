import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Smile Design Procedure | Blanc Esthetics",
  description:
    "Discover how the digital smile design procedure works, from facial analysis and digital planning to smile simulation, mock-ups and personalised treatment planning at Blanc Esthetics.",
  alternates: {
    canonical: "https://www.blancesthetics.com/blog/digital-smile-design-procedure",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Digital Smile Design Procedure | Blanc Esthetics",
    description:
      "Discover how digital smile design helps plan refined, proportionate and naturally harmonious smiles at Blanc Esthetics.",
    url: "https://www.blancesthetics.com/blog/digital-smile-design-procedure",
    siteName: "Blanc Esthetics",
    type: "article",
    images: [
      {
        url: "https://www.blancesthetics.com/How_Do_Veneers_for_Gap_Teeth_Work.webp",
        width: 1200,
        height: 675,
        alt: "Digital Smile Design Procedure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Smile Design Procedure | Blanc Esthetics",
    description:
      "Discover how digital smile design helps plan refined and naturally harmonious smiles.",
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