import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "1536px",
      lg: "1032px",
      md: { min: "820px", max: "1200px" },
      sm: { max: "819.98px" },
      xs: { max: "639.98px" },
    },
    extend: {
      colors: {
        redPrimary: "#d71920",
      },
    },
  },
  plugins: [],
};
export default config;
