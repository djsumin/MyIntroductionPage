import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ProjectView from '../views/Project.vue'
import ContactView from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    
    
  ]
})

export default router
