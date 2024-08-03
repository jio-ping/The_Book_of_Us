import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {},
      colors: {
        "main-gray": "#2C262B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        striped: "linear-gradient(180deg, #2C262B 50%, #f0f0f0 50%)",
        "custom-stripe": `
        repeat-y left top/102% 4px 
        linear-gradient(
          0, 
          rgb(108 92 101 / 9%) 25%, 
          #24242400 25%, 
          #1e001526 100%
        )
      `,
      },
      backgroundColor: {
        "custom-base": "#2e2c2f",
      },
    },
  },
  plugins: [],
};
export default config;
