import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import About from "./About";

export default createRouter({
  // hash, history
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
