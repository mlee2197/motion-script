import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gray-750": "#2f3745",
        "gray-800": "#232323",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      montserratAlternates: ["var(--font-montserrat-alternates)"],
      shrikhand: ["var(--font-shrikhand)"],
    },
  },
  plugins: [],
};
export default config;
