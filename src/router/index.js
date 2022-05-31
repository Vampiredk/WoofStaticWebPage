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
    path: '/BanditUd',
    name: 'BanditUd',
    component: () => import('../views/BanditUd.vue')
  },
  {
    path: '/BanditMellem',
    name: 'BanditMellem',
    component: () => import('../views/BanditMellem.vue')
  },
  {
    path: '/Charles',
    name: 'Charles',
    component: () => import('../views/Charles.vue')
  },
  {
    path: '/CharlesUd',
    name: 'CharlesUd',
    component: () => import('../views/CharlesUd.vue')
  },
  {
    path: '/CharlesMellem',
    name: 'CharleMellems',
    component: () => import('../views/CharlesMellem.vue')
  },
  {
    path: '/Frida',
    name: 'Frida',
    component: () => import('../views/Frida.vue')
  },
  {
    path: '/FridaMellem',
    name: 'FridaMellem',
    component: () => import('../views/FridaMellem.vue')
  },
  {
    path: '/FridaUd',
    name: 'FridaUd',
    component: () => import('../views/FridaUd.vue')
  },
  {
    path: '/Tessa',
    name: 'Tessa',
    component: () => import('../views/Tessa.vue')
  },
  {
    path: '/TessaMellem',
    name: 'TessaMellem',
    component: () => import('../views/TessaMellem.vue')
  },
  {
    path: '/TessaUd',
    name: 'TessaUd',
    component: () => import('../views/TessaUd.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
