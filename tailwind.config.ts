import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        complementary: {
          green: "#1FC14C",
          teal: "#0DD6BE",
          purple: "#6F30D1",
        },
        deep: {
          green: "#1D3F27",
          teal: "#124C45",
          purple: "#2F1854",
        },
        lime: "#1FC14C",
        aqua: "#0DD6BE",
        violet: "#6F30D1",
        shopee: "#EE4D2D",
        whatsapp: "#25D366",
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        mutedForeground: "rgb(var(--color-muted-foreground) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        input: "rgb(var(--color-input) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        quaternary: "rgb(var(--color-quaternary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        accentForeground: "rgb(var(--color-accent-foreground) / <alpha-value>)",
        focus: "rgb(var(--color-focus) / <alpha-value>)",
        ring: "rgb(var(--color-ring) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        brand: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
        didot: ["Didot", "Didot LT STD", "Bodoni MT", "Times New Roman", "serif"],
      },
      borderRadius: {
        "brand-sm": "8px",
        "brand-md": "16px",
        "brand-lg": "24px",
      },
      boxShadow: {
        pop: "4px 4px 0 0 #1E293B",
        "pop-hover": "6px 6px 0 0 #1E293B",
        "pop-active": "2px 2px 0 0 #1E293B",
        sticker: "8px 8px 0 0 #E2E8F0",
        "sticker-featured": "8px 8px 0 0 #F472B6",
      },
    },
  },
  plugins: [],
};

export default config;
