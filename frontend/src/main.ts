import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import uikit from "@/components/UI";
import store from "@/store";

import "./assets/main.css";

const app = createApp(App);

uikit.forEach((component) => {
  app.component(component.name, component);
});

app.use(store);
app.use(router);

app.mount("#app");
