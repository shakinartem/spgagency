/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080706",
        paper: "#f5eee4",
        ember: "#f07a1f",
        sand: "#c8b8a0",
        shell: "#17120f",
        graphite: "#27201b",
        oxblood: "#7a3510",
        bronze: "#b8895f",
      },
      fontFamily: {
        display: ['"Oswald"', "sans-serif"],
        ui: ['"Manrope"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 36px 120px rgba(240, 122, 31, 0.18)",
        panel: "0 28px 90px rgba(0, 0, 0, 0.42)",
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 12% 10%, rgba(240,122,31,0.18) 0, transparent 28%), radial-gradient(circle at 82% 0%, rgba(184,137,95,0.12) 0, transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.035), transparent 34%)",
      },
    },
  },
  plugins: [],
};
