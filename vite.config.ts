import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(async ({ command }) => {
  process.env = { ...process.env, ...loadEnv(command, process.cwd()) };
  return {
    plugins: [react()],
  };
});
