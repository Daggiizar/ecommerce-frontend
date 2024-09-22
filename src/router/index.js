import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import ProductManagement from '@/views/ProductManagement.vue';
import OrderList from '@/views/OrderList.vue';
import UserManagement from '@/views/UserManagement.vue';

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
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/products',
      name: 'productManagement',
      component: ProductManagement,
      meta: { requiresAuth: true }
    },
    {
      path: '/orders',
      name: 'orderList',
      component: OrderList,
      meta: { requiresAuth: true }
    },
    {
      path: '/users',
      name: 'userManagement',
      component: UserManagement,
      meta: { requiresAuth: true, requiresAdmin: true }
    }
  ]
});