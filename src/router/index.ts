import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start-game',
      component: () => import('../views/StartGame.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/Game.vue')
    }
  ]
})

export default router
