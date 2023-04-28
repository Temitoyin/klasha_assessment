/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        generalsans: ["var(--font-generalsans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black2: "#0A0A0A",
        black3: "#1A1A1A",
        seashell: "#FFFBF7",
        gray0: "#8D8D8D",
        gray1: "#5F5F5F",
        gray2: "#484848",
        gray3: "#F0F0F0",
        gray4: "#565C69",
        gray5: "#A39D9E",
        gray6: "#F4F4F4",
        primary: "#EF2C5A",
        gray93: "#EDEDED",
        gray50: " #F7F7F7",
        gray7: "#565C69",
      },
    },
  },
  plugins: [],
};
