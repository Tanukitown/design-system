import eslint from "@eslint/js"
import globals from "globals"
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import reactHooks from "eslint-plugin-react-hooks"
import tseslint from "typescript-eslint"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      eslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      eslintConfigPrettier,
      ...tseslint.configs.recommended,
    ],
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      prettier,
      "react-hooks": reactHooks,
      "prefer-arrow-functions": preferArrowFunctions,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "prefer-const": ["error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }],
      "prefer-arrow-functions/prefer-arrow-functions": [
        "warn",
        {
          allowedNames: [],
          allowNamedFunctions: false,
          allowObjectProperties: false,
          classPropertiesAllowed: false,
          disallowPrototype: false,
          returnStyle: "unchanged",
          singleReturnOnly: false,
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/jsx-curly-brace-presence": [2, "never"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "prettier/prettier": 2,
      "import/first": 2,
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],
      "import/no-duplicates": ["error", { "prefer-inline": true }],
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
          groups: [
            "index",
            "sibling",
            "parent",
            "internal",
            "external",
            "builtin",
            "object",
            "type",
          ],
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
        },
      ],
    },
  },
)
