import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import HomeView from "./views/HomeView.vue";
import BusinessView from "./views/BusinessView.vue";
import EntertainmentView from "./views/EntertainmentView.vue";
import HealthView from "./views/HealthView.vue";
import ScienceView from "./views/ScienceView.vue";
import SportsView from "./views/SportsView.vue";
import TechView from "./views/TechView.vue";
import ArticleView from "./views/ArticleView.vue";
import SearchView from "./views/SearchView.vue";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/business",
      name: "business",
      component: BusinessView,
    },
    {
      path: "/entertainment",
      name: "entertainment",
      component: EntertainmentView,
    },
    {
      path: "/health",
      name: "health",
      component: HealthView,
    },
    {
      path: "/science",
      name: "science",
      component: ScienceView,
    },
    {
      path: "/sports",
      name: "sports",
      component: SportsView,
    },
    {
      path: "/tech",
      name: "tech",
      component: TechView,
    },
    {
      path: "/article/:id",
      name: "article",
      component: ArticleView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
  ],
});

createApp(App).use(router).mount("#app");
