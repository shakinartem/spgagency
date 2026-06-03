/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#fbfaf8",
        "brand-ink": "#061c41",
        "brand-ink-soft": "#061f3f",
        "brand-accent": "#9b002f",
        "brand-accent-deep": "#760229",
        "brand-card": "#ffffff",
        "brand-copy": "#22355f",
        "brand-muted": "#566b8f",
        "brand-line": "rgba(6, 28, 65, 0.12)",
      },
      fontFamily: {
        display: ['"Montserrat"', "sans-serif"],
        ui: ['"Manrope"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(6, 28, 65, 0.07)",
      },
    },
  },
  plugins: [],
};
