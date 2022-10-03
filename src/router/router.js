import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/protected",
    name: "protected",
    component: () => import("../components/Protected.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },

  {
    path: "/destination/:id:/:slug",
    name: "destination.show",
    component: () => import("../pages/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),

    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("../pages/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, left: 0, behavior: "smooth" }), 300);
      })
    );
  },
});
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: "login" };
  }
});

export default router;
