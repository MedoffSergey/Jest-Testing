import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'    // Авторизация
import Successfully from '../components/Successfully.vue'  // Страница успешного вво

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Successfully',
    name: 'Successfully',
    component: Successfully
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
