import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

import { loadEnv } from "vite";

const viteEnv = loadEnv(
  process.env.MODE ?? "development",
  process.cwd(),
  "VITE_",
);

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/ParkApp/",
    env: {
      VITE_MAIL: process.env.VITE_MAIL || viteEnv.VITE_MAIL,
      VITE_PASSWORD: process.env.VITE_PASSWORD || viteEnv.VITE_PASSWORD,
    },
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      console.log("👉 Using Vite preprocessor for Cypress");
      on(
        "file:preprocessor",
        vitePreprocessor({
          configFile: "vite.config.ts",
          plugins: [viteTsconfigPaths()],
        }),
      );
      return config;
    },
  },
});
