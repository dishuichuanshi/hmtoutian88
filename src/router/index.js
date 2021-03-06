import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import login from '../views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'

  },
  // 一级路由主页
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  // 一级路由登录
  {
    path: '/login',
    component: login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
