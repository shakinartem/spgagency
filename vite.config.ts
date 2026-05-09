import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const base = process.env.VITE_BASE_PATH ?? "/";
const projectCaseIds = [
  "kerala",
  "arximed-security",
  "po-pyatam",
  "divina-podology",
  "eurodent",
  "biomed-salavat",
  "interdent-neftekamsk",
  "dental-pro-ufa",
  "ibradent-ufa",
];

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cases: resolve(__dirname, "cases.html"),
        ...Object.fromEntries(projectCaseIds.map((id) => [`case-${id}`, resolve(__dirname, `cases/${id}.html`)])),
      },
    },
  },
});
