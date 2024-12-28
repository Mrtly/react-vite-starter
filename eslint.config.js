import eslintJS from "@eslint/js";
import tsEslint from "typescript-eslint";
import twEslint from "eslint-plugin-tailwindcss";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  eslintJS.configs.recommended,
  ...tsEslint.configs.recommended,
  ...twEslint.configs["flat/recommended"],
  {
    plugins: {
      react: react,
      reactHooks: reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
      tailwindcss: {
        callees: ["classnames", "cn"],
      },
    },
    rules: {
      "tailwindcss/classnames-order": "off",
      // '@typescript-eslint/no-unused-expressions': 'off', //this trips up on conditionals with &&
    },
  },
  {
    ignores: [
      ".vscode",
      "dist",
      "node_modules",
      // '*.config.*', // ignore all config files
    ],
  },
];
