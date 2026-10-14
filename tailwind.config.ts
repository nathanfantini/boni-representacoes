import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF8F3",
        sand: {
          50: "#F6F1E9",
          100: "#EFE6D8",
          200: "#E4D6C1",
          300: "#D3C0A2",
        },
        gold: {
          300: "#DCC394",
          400: "#C9A96E",
          500: "#B08D57",
          600: "#8F7042",
        },
        ink: {
          DEFAULT: "#111111",
          900: "#0B0B0B",
          800: "#1A1A1A",
          700: "#262626",
        },
        graphite: {
          300: "#B9B5AE",
          400: "#8C8882",
          500: "#6B6862",
          600: "#4A4844",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.32em",
      },
      maxWidth: {
        site: "1240px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
