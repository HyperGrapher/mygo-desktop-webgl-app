import { defineConfig } from "mygo-cli";

export default defineConfig({
  name: "mygoapp",
  identifier: "com.example.mygoapp",
  version: "0.1.0",
  // `mygo dev` runs devCommand and loads devUrl; `mygo build` runs
  // buildCommand and embeds frontendDist into the app.
  devUrl: "http://localhost:5173",
  devCommand: "pnpm run dev:web",
  buildCommand: "pnpm run build:web",
  frontendDist: "dist",
  bindings: "src/mygo.ts",
  out: "build",
});
