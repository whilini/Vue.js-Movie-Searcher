import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import Movie from "./Movie";
import Search from "./Search";
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
      path: "/movie",
      component: Movie,
    },
    {
      path: "/search",
      component: Search,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
