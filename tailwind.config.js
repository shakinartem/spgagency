/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        paper: "#f4ede2",
        ember: "#f07a1f",
        sand: "#d7c5ab",
        shell: "#f8f2e8",
        graphite: "#171717",
      },
      fontFamily: {
        display: ['"Old Standard TT"', "serif"],
        ui: ['"Roboto Condensed"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(240, 122, 31, 0.18)",
        panel: "0 25px 80px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.045) 0, transparent 30%), radial-gradient(circle at 80% 0%, rgba(240,122,31,0.12) 0, transparent 28%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.03) 0, transparent 35%)",
      },
    },
  },
  plugins: [],
};
