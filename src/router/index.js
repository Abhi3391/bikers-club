import { createRouter, createWebHistory } from 'vue-router'
import SideMenu from '../components/SideMenu.vue'

const routes = [
  {
    path: '/',
    component: SideMenu,
    children: [
      { path: '/', name: 'Home', component: () => import('../view/dashboard/index.vue') },
      { path: '/rides', name: 'Rides', component: () => import('../view/rides/index.vue') },
      { path: '/events', name: 'Events', component: () => import('../view/events/index.vue') },
      { path: '/gallery', name: 'Gallery', component: () => import('../view/gallery/index.vue') },
      { path: '/about', name: 'About', component: () => import('../view/about/index.vue') },
      { path: '/contact', name: 'Contact', component: () => import('../view/contact/index.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
})

export default router
