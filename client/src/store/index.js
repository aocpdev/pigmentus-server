import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isLoading: true,
    user: ''
  },
  mutations: {
    loading(state, isLoading) {
      state.isLoading = false;
    },
    changeLoginStatus(state, isLogin){
        state.isLogin = isLogin;
    },
    setUser(state, user) {

      if(user === undefined) {
        state.user = ''
        state.isLogin = false;
      } else {
        state.isLogin = true;
        state.user= user;
      }
    }
  },
  actions: {
    isAuth: async function ({commit}) {
      axios.get('http://pigmentus.herokuapp.com/auth')
        .then(user => {
          if (user.data.user === '') {
            state.user = "";
          }else {
            commit('setUser', user.data.user)
          }
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
