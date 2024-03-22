import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import FoodView from "./components/FoodView.vue";
import AppVue from "./App.vue";
import "./style.css";
import App from "./App.vue";
import HomeView from "./components/HomeView.vue";
import AddFood from "./components/AddFoodView.vue";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/food", component: FoodView },
    { path: "/addFood", component: AddFood },
  ],
});
app.use(router);
app.mount("#app");
