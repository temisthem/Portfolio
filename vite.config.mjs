import { defineConfig } from "vite";

export default defineConfig({
  base: '/Portfolio',
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  // root: "src",
});
