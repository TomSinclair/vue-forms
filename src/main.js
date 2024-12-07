import i18n from "@/i18n/translations";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);

app.use(i18n);
app.mount("#app");
