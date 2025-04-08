import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const getConfig = async () => {
  const isDev = process.env.NODE_ENV === "development";

  const cartographer =
    isDev && process.env.REPL_ID !== undefined
      ? [(await import("@replit/vite-plugin-cartographer")).cartographer()]
      : [];

  return defineConfig({
    plugins: [
      isDev && react(),
      runtimeErrorOverlay(),
      themePlugin(),
      ...cartographer,
    ].filter(Boolean),
    optimizeDeps: {
      include: [],
      exclude: ["react-refresh"],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },
    esbuild: {
      target: "esnext",
    },
  });
};

export default getConfig();