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
        autoposter: resolve(__dirname, "autoposter.html"),
        autoposterLogin: resolve(__dirname, "autoposter-login.html"),
        autoposterDashboard: resolve(__dirname, "autoposter-dashboard.html"),
        autoposterPrivacy: resolve(__dirname, "autoposter-privacy-policy.html"),
        autoposterTerms: resolve(__dirname, "autoposter-terms-of-service.html"),
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
        articleConversionGap: resolve(__dirname, "pochemu-sait-ne-privodit-zayavki.html"),
        articleCardsReviews: resolve(__dirname, "kak-sobrat-karty-i-otzyvy-v-odnu-sistemu.html"),
        dentistryWebsite: resolve(__dirname, "sait-dlya-stomatologii.html"),
        mapsReputation: resolve(__dirname, "reputatsiya-i-karty-dlya-biznesa.html"),
        expertsTelegram: resolve(__dirname, "telegram-dlya-ekspertov.html"),
      },
    },
  },
});
