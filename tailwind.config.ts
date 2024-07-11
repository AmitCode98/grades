import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondry: "var(--secondry)",
        gray: "var(--gray)",
        blue: "var(--blue)",
        background: "var(--background)",
        muted: "var(--muted)",
      },
      fontFamily: {
        bubblegum: "var(--font-bubblegum-sans)",
        abeezee: "var(--font-abeezee)",
        mousememoirs: "var(--font-mouse-memoirs)",
        manrope: "var(--font-manrope)",
      },
    },
  },
  plugins: [],
};
export default config;
