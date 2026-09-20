import type { Metadata } from "next";

export const metadata: Metadata = {
title: "Blanc Veneers Blog | Tips, Care & Insights | Blanc Veneers",
description:
"Read expert insights, helpful tips and the latest information on dental and oral health from Blanc Veneers in Juhu, Mumbai.",
alternates: {
canonical: "https://www.blancveneers.com/blog",
},
};

export default function BlogLayout({
children,
}: {
children: React.ReactNode;
}) {
return children;
}
