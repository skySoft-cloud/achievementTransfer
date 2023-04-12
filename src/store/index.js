import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
    userInfo: {}
  },
  mutations: {
    SET_USER_INFO (store, userInfo) {
      localStorage.setItem('token', userInfo.token)
      store.userInfo = userInfo
      store.isLogin = true
    },
    CLEAR_USER_INFO (store) {
      localStorage.setItem('token', '')
      store.userInfo = {}
      store.isLogin = false
    },
  }
})

