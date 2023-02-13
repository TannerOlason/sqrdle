// vite.config.js
// import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   dts: true, // enabled by default if `typescript` is installed
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  define: {
    "process.env": {},
  },
});
