import { createRouter, createWebHistory } from "vue-router";
// import store from "@/store"

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
// const Profile = () => import("@/views/Profile.vue");
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    // {
    //   path: "/profile",
    //   name: "profile",
    //   component: Profile,
    // },
  ],
});

export default router;
