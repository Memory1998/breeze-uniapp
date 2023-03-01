import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from '@/store/modules/userInfo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    userInfo
  }
})

export default store
