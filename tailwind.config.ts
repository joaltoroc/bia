import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#111517",
          secondary: "#fafafa",
          "base-100": "#fafafa",
          "base-200": "#858585",
          "base-300": "#FFFFFF",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#FFFFFF",
          secondary: "#2b3945",
          "base-100": "#202c37",
          "base-300": "#2b3945",
        },
      },
    ],
  },
  theme: {
    screens: { sm: "576px", md: "960px", lg: "1440px" },
  },
};
export default config;
