import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

// uncomment this code
// import HelloView from "../views/HelloView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // uncomment this code to create routing to hello page
  // {
  //   path: "/hello",
  //   name: "hello",
  //   component: HelloView,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
