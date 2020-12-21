import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bootstrap from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify'


require('dotenv').config();
Vue.use(VueAxios, axios, vuetify)
Vue.use(Bootstrap)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false

// API URL
// if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://pigmentus.herokuapp.com'; // Production
// }else {
  // axios.defaults.baseURL = 'http://localhost:3000'; // Local

// }




new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
