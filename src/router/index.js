import Vue from 'vue'
import VueRouter from 'vue-router'


import Authorization from '../components/Authorization.vue'  // Страница Ввода данных
import Successfully from '../components/Successfully.vue'  // Страница успешного вво
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Authorization',
    component: Authorization
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
