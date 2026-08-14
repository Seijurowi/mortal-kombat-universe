import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["components/universe-explorer.tsx"],
    rules: {
      // The explorer restores shareable entity/timeline state from window.location
      // after hydration, then keeps it synchronized with history.replaceState.
      // This is intentionally scoped to the URL-state boundary rather than disabled globally.
      "react-hooks/set-state-in-effect": "off",
    },
  },
  globalIgnores([".next/**", "node_modules/**"]),
]);
