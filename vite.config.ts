import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/ParkApp/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/features"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
  server: {
    proxy: {
      "^/api($|/)": {
        target: process.env.VITE_GRAPHQL_URL,
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/api(\/|$)/, "/"),
      },
    },
  },
});
