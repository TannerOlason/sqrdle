// vite.config.js
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    Components({
      dts: true, // enabled by default if `typescript` is installed
    }),
  ],
});
