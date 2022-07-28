import { createRouter, createWebHistory } from "vue-router";
const OrdersRoot = () => import("@/components/Orders.vue");
const OrdersSub = () => import("@/components/OrdersSub.vue");
const NotFound = () => import("@/components/NotFound.vue");

const routes = [
  {
    // path: "",
    component: OrdersRoot,
    props: true,
    children: [
      {
        path: "/:pathMatch(.*)*",
        component: NotFound,
      },
      {
        path: "/sub",
        component: OrdersSub,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("orders"),
  routes,
});

export default router;
