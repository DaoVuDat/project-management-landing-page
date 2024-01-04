import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-archia)"],
      },
      spacing: {
        "112": "28rem",
        himg: "550px",
      },
      colors: {
        secondary: "#FD841F",
        primary: "#001253",
        secondary2: "#97c680",
        "background-color": "#EBEBEB",
      },
      animation: {
        fadeOut: "fadeOut 200ms ease-in-out both",
        fadeIn: "fadeIn 200ms ease-in-out both",
      },
      keyframes: {
        fadeOut: {
          "0%": {
            opacity: "100",
          },
          "100%": {
            opacity: "0",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
