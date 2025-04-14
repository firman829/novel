import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NovelDetail from '../views/noveldetail.vue'
import Bab1 from '../views/Bab1.vue' 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/novel/:id',
    name: 'NovelDetail',
    component: NovelDetail
  },
  {
    path: '/novel/:id/bab1',
    name: 'Bab1',
    component: Bab1
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
