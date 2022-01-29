import { createRouter, createWebHistory } from 'vue-router'
import AnaSayfa from '../views/AnaSayfa.vue'


const routes = [
  {
    path: '/',
    name: 'AnaSayfa',
    component: AnaSayfa
  },
  {
    path: '/beceriler',
    name: 'Beceriler',
    component: () => import('../views/Beceriler.vue')
  },
  {
    //Hakımda sayfası görünür hale getirildi
    path: '/hakkimda',
    name: 'Hakkımda',
    component: () => import('../views/Hakkimda.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
