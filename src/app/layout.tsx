import type { Metadata } from "next";
import localFont from "next/font/local";
import { Shrikhand } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
});

export const metadata: Metadata = {
  title: "Motion Script",
  description: "A collection of component animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${shrikhand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
