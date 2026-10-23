import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
  globalIgnores(["web-ext-artifacts/"]),
  js.configs.recommended,
  {
    rules: {
      curly: ["error", "all"],
    },
  },
  {
    files: ["background.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        ...globals.worker,
        browser: "readonly",
        chrome: "readonly",
      },
    },
    rules: {
      strict: ["error", "global"],
    },
  },
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
  },
  {
    files: ["eslint.config.mjs"],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
