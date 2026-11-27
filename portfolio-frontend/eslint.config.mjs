import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // The legacy Pages Router components are outside the active app.
    "components/**",
  ]),
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [tseslint.configs.recommended],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [next.configs["core-web-vitals"], reactHooks.configs.flat.recommended],
  },
]);
