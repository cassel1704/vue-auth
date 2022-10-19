import AuthViewVue from "@/views/AuthView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViewVue,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: AuthViewVue,
      meta: {
        hideIfAuthed: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiredAuth) &&
    !store.state.user.data
  ) {
    next("/login");
  } else if (
    to.matched.some((record) => record.meta.hideIfAuthed) &&
    !!store.state.user.data
  ) {
    next("/");
  }

  next();
});

export default router;
