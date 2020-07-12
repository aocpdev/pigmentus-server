import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bootstrap from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Bootstrap)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// API URL
// axios.defaults.baseURL = 'http://localhost:3000/api'; // Local
axios.defaults.baseURL = 'https://pigmentus.herokuapp.com'; // Production

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
