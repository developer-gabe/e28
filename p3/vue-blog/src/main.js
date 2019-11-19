import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import TestPost from "./posts/TestPost.md";

Vue.use(VueRouter);
Vue.config.productionTip = false;

export const routes = [
  { path: "/", component: Home },
  { path: "/test", component: TestPost }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
