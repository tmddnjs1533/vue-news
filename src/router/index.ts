import { createRouter, createWebHistory } from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "News",
      component: NewsView,
    },
    {
      path: "/ask",
      name: "Ask",
      component: AskView,
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: JobsView,
    },
    {
      path: "/user",
      name: "User",
      component: UserView,
    },
    {
      path: "/item",
      name: "item",
      component: ItemView,
    },
  ],
});

export default router;

/**
 * {
 *     path: "/",
 *     name: "home",
 *     component: HomeView,
 * },
 * {
 *     path: "/about",
 *     name:"about",
 *     component: () => import('../views/AboutView.vue')
 * }
 */
