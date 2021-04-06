import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Layout from '../components/Layout.vue'
import Activity from '../components/client/Activity.vue'
import UserAccount from '../components/client/UserAccount.vue'
import Messages from '../components/client/Messages.vue'
import Profile from '../components/client/Profile.vue'
import Cart from '../components/client/Cart.vue'
import PersonalInfo from '../components/client/PersonalInfo.vue'
import Shop from '../components/client/Shop.vue'
import Collections from '../components/client/Collections.vue'
import Product from '../components/client/Product.vue'
import ProductInfo from '../components/client/ProductInfo.vue'
import Admin from '../views/AdminView.vue'
import Dashboard from '../components/admin/Dashboard.vue'
import Customers from '../components/admin/Customers.vue'
import AdminInventory from '../components/admin/Inventory.vue'
import AdminProducts from '../components/admin/Products.vue'
import AdminCollections from '../components/admin/Collections.vue'




Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: {name: 'Home'},
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/shop/',
        name: 'Shop',
        component: Shop,
        redirect: 'shop/1',
        children: [
          { path: ':id', name: 'collections', component: Collections,
            children: [
              { path: 'product/:id', name: 'Product', component: Product },
            ]},

        ]
      },
      {
        path: '/product',
        name: 'ProductInfo',
        component: ProductInfo
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
        component: Admin,
        redirect: {name: 'dashboard'},
        children: [
          { path: 'dashboard', name: 'dashboard', component: Dashboard},
          { path: 'customers', name: 'customers', component: Customers},
          { path: 'inventory', name: 'inventory', component: AdminInventory,
            children: [
              { path: 'products', name: 'adminProducts', component: AdminProducts},
              { path: 'collections', name: 'adminCollections', component: AdminCollections},
            ]
          },
        ]
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
        component: () => import(/* webpackChunkName: "cart" */ '../components/client/Cart.vue')
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
      }
    ]

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
