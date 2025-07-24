import type { Metadata } from "next";

import localFont from "next/font/local";
import { Inter } from "next/font/google";

import "./globals.css";

const sfPro = localFont({
  src: [
    {
      path: "../public/fonts/sfpro/SFProDisplay-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/sfpro/SFProDisplay-Semibold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/fonts/sfpro/SFProDisplay-Medium.woff2",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--font-sfpro",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FastGrab",
  description: "FastGrab - just order",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfPro.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
