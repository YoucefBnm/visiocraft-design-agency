import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), imagetools()],
  css: {
    preprocessorOptions: {
      less: {
        math: "parens-division",
      },

      scss: {
        api: "modern-compiler", // or "modern", "legacy"
        importers: [
          // ...
        ],
      },
    },
  },
});
