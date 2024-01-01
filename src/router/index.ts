import { createRouter, createWebHistory } from 'vue-router'

import HomeViewVue from '@/views/HomeView.vue'
import UsersViewVue from '@/views/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeViewVue
    },
    {
      path: '/users',
      component: UsersViewVue
    }
  ]
})

export default router
