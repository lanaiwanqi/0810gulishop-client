import Vue from "vue";
import VueRouter from "vue-router";
import About from "../components/About";
import Home from "../components/Home";
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/',
    redirect: '/home'
  }
];
Vue.use(VueRouter);
export default new VueRouter({
  routes
})