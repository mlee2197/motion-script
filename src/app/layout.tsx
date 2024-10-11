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
  style: ["italic"],
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
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* SVG favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* <!-- PNG versions --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />

        {/* <!-- Apple Touch Icon --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* <!-- Android/Chrome App Icons --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />

        {/* <!-- Windows 8/10 Tiles --> */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />

        {/* <!-- Safari pinned tab icon --> */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body
        className={`${montserrat.variable} ${montserratAlternates.variable} ${shrikhand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
