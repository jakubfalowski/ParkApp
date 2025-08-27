import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const target = env.VITE_GRAPHQL_URL?.trim();

  console.log(`[vite] VITE_GRAPHQL_URL: ${target ?? "(undefined)"}`);
  const isHttps = Boolean(target?.startsWith("https://"));

  return {
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
          target,
          changeOrigin: true,
          secure: isHttps,
          rewrite: (p) => p.replace(/^\/api(\/|$)/, "/"),
        },
      },
    },
  };
});
