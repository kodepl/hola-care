import typography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        leaf: { 50: "#eef2ef", 100: "#dce5df", 700: "#245c44", 900: "#15241c" },
        petal: "#7a4458",
        sand: "#c9b8a0",
      },
    },
  },
  plugins: [typography],
};
