import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/example01',
      name: 'example01',
      component: () => import(/* webpackChunkName: "example01" */ './views/Example01.vue'),
    },
    {
      path: '/example02',
      name: 'example02',
      component: () => import(/* webpackChunkName: "example02" */ './views/Example02.vue'),
    },
    {
      path: '/example03',
      name: 'example03',
      component: () => import(/* webpackChunkName: "example03" */ './views/Example03.vue'),
    },
    {
      path: '/example04',
      name: 'example04',
      component: () => import(/* webpackChunkName: "example04" */ './views/Example04.vue'),
    },
    {
      path: '/example05',
      name: 'example05',
      component: () => import(/* webpackChunkName: "example05" */ './views/Example05.vue'),
    },
    {
      path: '/example06',
      name: 'example06',
      component: () => import(/* webpackChunkName: "example06" */ './views/Example06.vue'),
    },
  ],
});
