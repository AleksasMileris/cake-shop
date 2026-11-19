import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/meniu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),
    },
    {
      path: '/imonems',
      name: 'business',
      component: () => import('../views/BusinessView.vue'),
    },
    {
      // Vieta būsimai parduotuvei / tortų konstruktoriui.
      path: '/parduotuve',
      name: 'shop',
      component: () => import('../views/ShopView.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 80, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
