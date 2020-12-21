import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Activity from '../components/Activity.vue'
import UserAccount from '../components/UserAccount.vue'
import Messages from '../components/Messages.vue'
import Profile from '../components/Profile.vue'
import Shop from '../components/Shop.vue'
import PersonalInfo from '../components/PersonalInfo.vue'
import Collections from '../components/Collections.vue'
import Products from '../components/Products.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collections',
    name: 'Collections',
    redirect: '/collections/1/products',
    component: Collections,
    children: [
      { path: ':id/products', name: 'products', component: Products},
    ]
  },
  {
    path: '/shop',
    name: 'Shop',
    redirect: { name: 'collections'},
    component: Shop,
    children: [
      { path: 'collections', name: 'collections', component: Collections,
        children: [
          { path: 'products', name: 'products', component: Products},
        ]
      }
    ]
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    children: [
      { path: 'activity', component: Activity },
      { path: 'account', redirect: { name: 'personal' }, component: UserAccount,
        children: [
          { path: 'personal', name: 'personal', component: PersonalInfo},
        ]},
      { path: 'messages', component: Messages }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminView.vue')
  },

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

export default router
