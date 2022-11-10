import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "@/plugins/i18n";
import router from "@/router";

import App from "@/App.vue";
import "@/assets/styles/styles.scss";

const pinia = createPinia();

const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(pinia);

app.mount("#app");
