import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    outDir: "dist",
  },
  base: "/solid-tic-tac-toe/", // Add this line
});
