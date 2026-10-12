import type { Metadata } from "next";

const title = "Porcelain Veneers: Complete Guide | Blanc Veneers";
const description =
  "Learn how porcelain veneers work, what the procedure involves and how long they last. A guide from Blanc in Juhu, Mumbai.";
const canonicalUrl =
  "https://www.blancveneers.com/blog/porcelain-veneers-guide";
const imageUrl = "https://www.blancveneers.com/porcelain_veneers.webp";
const imageAlt = "Porcelain Veneers";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title,
    description,
    siteName: "Blanc Veneers",
    images: [
      {
        url: imageUrl,
        alt: imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

export default function PorcelainVeneersGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
