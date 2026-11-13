import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // the original stylesheet uses @import, darken()... (still supported)
      scss: { silenceDeprecations: ["import", "global-builtin", "color-functions"] },
    },
  },
  server: {
    // in development the API runs locally (repo Simpsons_PolitiScale_Backend)
    proxy: { "/api": "http://localhost:3000" },
  },
});
