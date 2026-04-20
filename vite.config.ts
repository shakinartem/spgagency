import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        materials: resolve(__dirname, "materialy.html"),
        dental: resolve(__dirname, "marketing-dlya-stomatologii.html"),
        medical: resolve(__dirname, "marketing-dlya-meditsiny.html"),
        expert: resolve(__dirname, "marketing-dlya-ekspertov.html"),
        realEstate: resolve(__dirname, "marketing-dlya-nedvizhimosti.html"),
        articleDental: resolve(__dirname, "kak-stomatologii-poluchat-zapisi-bez-haosa.html"),
        articleReputation: resolve(__dirname, "kak-klinike-rabotat-s-otzyvami-i-kartami.html"),
        articleMedicalTrust: resolve(__dirname, "kak-klinike-vystroit-doverie-v-digital.html"),
        articleLocalLeads: resolve(__dirname, "kak-lokalnomu-biznesu-sobirat-zayavki-bez-khaosa.html"),
        articleExpertTelegram: resolve(__dirname, "kak-ekspertu-prevratit-telegram-v-sistemu-progreva.html"),
        dentistryWebsite: resolve(__dirname, "sait-dlya-stomatologii.html"),
        mapsReputation: resolve(__dirname, "reputatsiya-i-karty-dlya-biznesa.html"),
        expertsTelegram: resolve(__dirname, "telegram-dlya-ekspertov.html"),
      },
    },
  },
});
