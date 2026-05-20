import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Kiln: Automate Sales Flows & Save time",
  description:
    "The Kiln is a team of GTM experts, data scientists, and former Clay employees that help the world's leading RevOps and growth teams scale their most creative ideas.",
  icons: {
    icon: [
      {
        url: "https://framerusercontent.com/images/Ma4RwWAO5Gj6fLvOfbK6U9tqByw.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://framerusercontent.com/images/mZmNP4PRdYLh2g99ose9XRVJrQ8.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: "The Kiln: Automate Sales Flows & Save time",
    description:
      "The Kiln is a team of GTM experts, data scientists, and former Clay employees that help the world's leading RevOps and growth teams scale their most creative ideas.",
    images: ["https://framerusercontent.com/assets/ES073pFzz44VC8VfONGMcfxJVIM.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kiln: Automate Sales Flows & Save time",
    description:
      "The Kiln is a team of GTM experts, data scientists, and former Clay employees that help the world's leading RevOps and growth teams scale their most creative ideas.",
    images: ["https://framerusercontent.com/assets/ES073pFzz44VC8VfONGMcfxJVIM.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
