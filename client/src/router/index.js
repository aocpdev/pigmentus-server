import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
import axios from 'axios'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Homee',
      component: Home
    },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/auth/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const authRoute = to.matched.some(record => record.meta.requireAuth)

  if (authRoute) {
    axios.get(to.fullPath)
      .then(res => {
        console.log(res);
      })
  }
  console.log(store.state.user)
  if (authRoute && Object.keys(store.state.user).length === 0) {
    store.state.isLogin = false;
    next({name: 'Signin'})

  } else {

    next()

  }
  if(authRoute && Object.keys(store.state.user).length > 0) {
    store.state.isLogin = true;
  }


})

export default router
