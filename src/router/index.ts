import { createRouter, createWebHistory } from 'vue-router'
import Cards from '../components/Cards.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cards',
      component: Cards,
    },
    {
      path: '/card/:id',
      name: 'card',
      component: () => import('../components/Card.vue'),
      props: true
    }
  ],
})

export default router
