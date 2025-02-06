import { createApp } from "vue";
import "./assets/styles/reset.css";
import "./assets/styles/main.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
