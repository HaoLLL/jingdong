import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Login,
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin
      // 已经登录了 再访问登录页面 跳转到home
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  if (isLogin || to.name === 'Login') {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
