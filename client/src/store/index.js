import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user:{}
  },
  mutations: {
    changeLoginStatus(state, isLogin){
        state.isLogin = isLogin;
    },
    getUser(state, userDecode) {
      console.log(userDecode);
      state.user.name = userDecode.name;
      state.user.lastName = userDecode.last_name;
      state.user.email = userDecode.email;
    }
  },
  actions: {
  },
  modules: {
  }
})
