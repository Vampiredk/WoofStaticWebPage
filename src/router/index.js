import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/Bandit',
    name: 'Bandit',
    component: () => import('../views/Bandit.vue')
  },
  {
    path: '/Charles',
    name: 'Charles',
    component: () => import('../views/Charles.vue')
  },
  {
    path: '/Frida',
    name: 'Frida',
    component: () => import('../views/Frida.vue')
  },
  {
    path: '/Tessa',
    name: 'Tessa',
    component: () => import('../views/Tessa.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
