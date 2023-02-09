import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import Atlas from "@vectopus/atlas-icons-vue";
app.use(Atlas);

app.mount("#app");
