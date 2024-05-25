import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cinaGeo: ["var(--font-cinaGeo)"],
      },
      colors: {
        bw: {
          primary: "#212121",
          secondary: "#687083",
          icon: "#9AA2B1",
          inline: "#D1D5DC",
          outline: "#E4E7EB",
          light: "#F0F2F5",
          surface: "#F9FAFB",
        },
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
export default config;
