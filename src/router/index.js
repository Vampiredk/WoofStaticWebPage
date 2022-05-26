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
    name: 'Bandit',
    component: () => import('../views/BanditUd.vue')
  },
  {
    path: '/BanditMellem',
    name: 'Bandit',
    component: () => import('../views/BanditMellem.vue')
  },
  {
    path: '/Charles',
    name: 'Charles',
    component: () => import('../views/Charles.vue')
  },
  {
    path: '/CharlesUd',
    name: 'Charles',
    component: () => import('../views/CharlesUd.vue')
  },
  {
    path: '/CharlesMellem',
    name: 'Charles',
    component: () => import('../views/CharlesMellem.vue')
  },
  {
    path: '/Frida',
    name: 'Frida',
    component: () => import('../views/Frida.vue')
  },
  {
    path: '/FridaMellem',
    name: 'Frida',
    component: () => import('../views/FridaMellem.vue')
  },
  {
    path: '/FridaUd',
    name: 'Frida',
    component: () => import('../views/FridaUd.vue')
  },
  {
    path: '/Tessa',
    name: 'Tessa',
    component: () => import('../views/Tessa.vue')
  },
  {
    path: '/TessaMellem',
    name: 'Tessa',
    component: () => import('../views/TessaMellem.vue')
  },
  {
    path: '/TessaUd',
    name: 'Tessa',
    component: () => import('../views/TessaUd.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
