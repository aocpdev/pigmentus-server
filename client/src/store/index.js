import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isLoading: true,
    token: '',
    user: ''
  },
  mutations: {
    loading(state, isLoading) {
      state.isLoading = false;
    },
    changeLoginStatus(state, isLogin){
        state.isLogin = isLogin;
    },
    getUser(state, payload) {
      state.token = payload
      if(payload === '') {
        state.user = ''
      } else {
        let user = decode(payload);
        state.user = user.data;
      }
    }
  },
  actions: {
    
  },
  modules: {
  }
})
