import typography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Literata", "Georgia", "serif"],
        sans: ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        leaf: { 50: "#eef3ef", 100: "#dfe8e1", 700: "#2f6b52", 900: "#1c2a22" },
        petal: "#8a4d62",
      },
    },
  },
  plugins: [typography],
};
