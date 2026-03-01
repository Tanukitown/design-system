import { defineConfig } from "vitest/config";

import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx}"],
    reporters: process.env.GITHUB_ACTIONS
      ? [["junit", { outputFile: "./reports/junit.xml" }], "github-actions"]
      : ["dot"],
    coverage: {
      provider: "v8",
      reporter: ["cobertura", "html"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
