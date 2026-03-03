import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#55AA6D",
          teal: "#57BCAF",
          purple: "#966ED6",
          dark: "#161616",
          light: "#E5E5E5",
        },
        accent: {
          green: "#1FC14C",
          teal: "#0DD6BE",
          purple: "#6F30D1",
        },
        deep: {
          green: "#1D3F27",
          teal: "#124C45",
          purple: "#2F1854",
        },
      },
      fontFamily: {
        sans: ["var(--font-lexend)", "ui-sans-serif", "system-ui", "sans-serif"],
        brand: ["Didot", "Bodoni MT", "Didot LT STD", "Times New Roman", "serif"],
      },
      boxShadow: {
        glow: "0 14px 48px -22px rgba(150, 110, 214, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
