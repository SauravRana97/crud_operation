import { createRouter, createWebHistory } from 'vue-router'
import home from "../views/homepage/home.vue"
import registerpage from "../views/registerpage/registerview.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/registerpage',
      name: 'registerpage',
      component: registerpage
    },
    
   
  ]
})

export default router
