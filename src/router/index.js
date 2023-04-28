import { createRouter, createWebHistory } from 'vue-router'
import dashboard from "../components/dasboard.vue"
import login from "../components/login.vue"
import register from "../components/register.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
   
  ]
})

export default router
