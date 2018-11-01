import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import dict from './modules/dict'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { user, dict },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
