import type { Metadata } from "next";
import { Shrikhand, Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-montserrat",
  style: ["italic"]
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-montserrat-alternates",
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
        className={`${montserrat.variable} ${montserratAlternates.variable} ${shrikhand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
