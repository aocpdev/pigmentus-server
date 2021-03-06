import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify'
import VCurrencyField from 'v-currency-field'
import { VTextField } from 'vuetify/lib'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

require('dotenv').config();
Vue.use(VueAxios, axios, vuetify)
Vue.use(VueLodash, { lodash: lodash })
Vue.component('v-text-field', VTextField)
Vue.use(VCurrencyField, {

	locale: 'en-US',
	decimalLength: 2,
	autoDecimalMode: false,
	min: null,
	max: null,
	defaultValue: 0,
  valueAsInteger: false,
  allowNegative: true

})


Vue.config.productionTip = false

// API URL
// if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://pigmentus.herokuapp.com'; // Production
// }else {
  // axios.defaults.baseURL = 'http://localhost:3000'; // Local

// }




new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
