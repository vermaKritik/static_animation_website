import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
      fontFamily: {
        righteous: "Righteous",
        dmSans: "DM Sans",
      },
      colors: {
        sunflower: "#E7E51E",
        royalblue: "#5a56eb",
        candyOrange: "#F1561B",
        fadedorange: "#FF875A",
        whitesmoke: "#f5f5f5",
        midnightblue: "#313131",
        snow: "#fff",
        charcoal: "#0f0f0f",
        abyss: "#000",
        mistygray: "rgba(78, 78, 78, 0.6)",
        amber: "#fabc4d",
      },
    },
  },
  plugins: [],
};
export default config;
