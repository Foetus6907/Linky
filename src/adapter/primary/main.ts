import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import fr from "@/adapter/primary/locales/fr";
import en from "@/adapter/primary/locales/en";
import App from "./App.vue";
import store from "@/adapter/primary/store/store";
import router from "@/adapter/primary/router/router";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

const i18n = createI18n({
  locale: localStorage.locale || "fr",
  messages: {
    en: en,
    fr: fr,
  },
});

const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(router);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.mount("#app");
