import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router"],
          ui: ["@remixicon/react", "motion"],
        },
      },
    },
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    target: "es2015",
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },

  preview: {
    port: 4173,
    host: true,
  },
});
