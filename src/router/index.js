import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/auth'
import About from '@/components/About.vue'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import '@/assets/css/main.css'


const router = createRouter({
  history: createWebHistory(__dirname),
  routes: [
      {
        path: '/register',
        component: Register
      },
      { 
        path: '/about', 
        component: About 
      },
      { 
        path: '/dashboard', 
        component: Dashboard, 
        beforeEnter: requireAuth 
      },
      { 
        path: '/login', 
        component: Login 
      },
      { 
        path: '/logout',
        beforeEnter (to, from, next) {
          auth.logout()
          next('/')
      }
    }
  ]
})

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default router;