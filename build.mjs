import { build } from "esbuild";
import alias from "esbuild-plugin-alias";

await build({
  entryPoints: ["api/index.ts", "api/routes.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  outdir: "dist",
  external: ["fsevents", "lightningcss"],
  plugins: [
    alias({
      "@rollup/rollup-linux-x64-gnu": "./empty-rollup.js",
      "@rollup/rollup-linux-x64-musl": "./empty-rollup.js",
    }),
  ],
}).catch(() => process.exit(1));
