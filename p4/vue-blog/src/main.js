import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import SFC from "@/posts/SFC.md";
import CSSGrid from "@/posts/CSS-grid.md";
import CSSGradient from "@/posts/CSS-gradient.md";
import BlogPost from "@/components/BlogPost.vue";
import Vuelidate from 'vuelidate';

import store from "./store";

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(Vuelidate);

export const routes = [
  { path: "/", component: Home },
  { path: "/index.html", redirect: "/" },
  {
    path: "/single-file-components",
    component: BlogPost,
    children: [
      {
        path: "/single-file-components",
        component: SFC
      }
    ]
  },
  {
    path: "/intro-to-css-grid",
    component: BlogPost,
    children: [
      {
        path: "/intro-to-css-grid",
        component: CSSGrid
      }
    ]
	},
	{
    path: "/css-animated-gradient",
    component: BlogPost,
    children: [
      {
        path: "/css-animated-gradient",
        component: CSSGradient
      }
    ]
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/"
});

new Vue({
  router: router,
  store: store, //this.$store
  render: h => h(App)
}).$mount("#app");
