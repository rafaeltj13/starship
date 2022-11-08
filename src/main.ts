import { createApp } from "vue";
import i18n from "@/plugins/i18n";
import router from "@/router";

import App from "@/App.vue";
import "@/styles.scss";

const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount("#app");
