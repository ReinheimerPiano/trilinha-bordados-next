import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "oklch(97% 0.008 85)",
        cream2: "oklch(93% 0.013 80)",
        cream3: "oklch(89% 0.016 78)",
        ink: "oklch(18% 0.025 30)",
        ink2: "oklch(38% 0.020 30)",
        ink3: "oklch(58% 0.018 30)",
        teal: "oklch(50% 0.12 185)",
        "teal-l": "oklch(92% 0.06 185)",
        purple: "oklch(40% 0.15 290)",
        green: "oklch(52% 0.11 155)",
        "green-l": "oklch(92% 0.06 155)",
        wa: "#25D366",
        shopee: "#EE4D2D",
        instagram: "#E1306C",
        facebook: "#1877F2",
      },
      fontFamily: {
        sans: [
          "var(--font-dm-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-playfair)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },
      maxWidth: {
        wrap: "1200px",
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,.06)",
        "card-hover": "0 12px 40px rgba(0,0,0,.10)",
        hero: "0 24px 64px -12px rgba(50,36,118,.18)",
        "wa-float": "0 4px 24px rgba(37,211,102,.4)",
        "wa-float-hover": "0 8px 32px rgba(37,211,102,.5)",
      },
    },
  },
  plugins: [],
};

export default config;
