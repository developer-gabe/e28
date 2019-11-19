import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import BlogPost from '@/components/BlogPost.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false;

export const routes = [
  { path: "/", component: Home },
	{ path: "/single-file-components", component: BlogPost },
	{ path: "/intro-to-css-grid", component: BlogPost },
	{path: "/index.html", redirect: "/"}
];

const router = new VueRouter({
  routes: routes,
	mode: "history",
	base:'/'
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
