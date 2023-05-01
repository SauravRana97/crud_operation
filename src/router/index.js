import { createRouter, createWebHistory } from 'vue-router'
import dashboard from "../components/dashboard/dasboard.vue"
import login from "../components/login/login.vue"
import register from "../components/register/register.vue"

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
