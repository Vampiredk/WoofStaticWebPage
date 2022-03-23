import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Bandit',
    name: 'Bandit',
    component: () => import('../views/dogs/Bandit.vue')
  },
  {
    path: '/Charles',
    name: 'Charles',
    component: () => import('../views/dogs/Charles.vue')
  },
  {
    path: '/Frida',
    name: 'Frida',
    component: () => import('../views/dogs/Frida.vue')
  },
  {
    path: '/Kalle',
    name: 'Kalle',
    component: () => import('../views/dogs/Kalle.vue')
  },
  {
    path: '/Tessa',
    name: 'Tessa',
    component: () => import('../views/dogs/Tessa.vue')
  },
  {
    path: '/emails',
    name: 'emails',
    component: () => import('../views/emails.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
