import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  base: "/", // Asegura que la base es correcta
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 5000,
    open: true,
  }
});
