import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
// import store from '@/store'

Vue.use(VueRouter)

const routes = [

 {

  path:'/home', component:Home,

  beforeEnter:(to, from, next) =>{
    const loggedIn = localStorage.getItem('user')

    if (to.matched.some(record => record.meta.auth) || !loggedIn) {
    next('/login')
    return
  }
    
    next()
  }

},
 {path:'/about', component:About},
  {path:'/register', component:Register},
  {path:'/login', component:Login}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next('/login')
    return
  }
  next()
})
export default router
