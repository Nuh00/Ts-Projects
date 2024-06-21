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
      colors: {
        "body-bg": "#08091E",
        "header-gray": "#E8E8ED",
        "button-blue": "#4380F8",
        "text-blue": "#4380F8",
        "footer-gray": "#777781",
        "darker-gray": "#33314C",
      },
    },
  },
  plugins: [],
};
export default config;
