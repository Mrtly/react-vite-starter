import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // vitest config https://vitest.dev/config/
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.js",
    coverage: {
      include: ["src/**/*.{js,ts,jsx,tsx}"],
    },
  },
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
