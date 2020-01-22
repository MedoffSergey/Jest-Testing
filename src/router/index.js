import Vue from 'vue'
import VueRouter from 'vue-router'

import Start from '../components/Start.vue'  // Страница Ввода данных
import Login from '../components/Login.vue'  // Страница Ввода данных
import Main from '../components/Main.vue'  // Страница успешного вво
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
