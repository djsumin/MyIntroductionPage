import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ProjectView from '../views/Project.vue'
import ContactView from '../views/Contact.vue'

import LeeSuMin from '../components/LeeSuMin.vue'
import Graduation from '../components/Graduation.vue'
import Travel from '../components/Travel.vue'

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
    {
      path: '/me',
      name: 'LeeSuMin',
      component: LeeSuMin
    },
    {
      path: '/me',
      name: 'Graduation',
      component: Graduation
    },
    {
      path: '/me',
      name: 'Travel',
      component: Travel
    },
    
    
  ]
})

export default router
