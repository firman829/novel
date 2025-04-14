import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NovelDetail from '../views/NovelDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/novel/:id', name: 'NovelDetail', component: NovelDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
