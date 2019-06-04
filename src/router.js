import Router from "vue-router";
import Converter from "./components/Converter";
import Animals from "./components/Animals";
import Vue from "vue";

Vue.use(Router)

const routes = [
  { path: '/converter', component: Converter },
  { path: '/animals', component: Animals }
]

export const router = new Router({
  mode: 'history',
  routes: routes,
})

