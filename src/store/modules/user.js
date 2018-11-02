const state = {
  isLogin: false,
  uid: null
}

const getters = {

}

const mutations = {
  changeLoginState(state, loginState) {
    state.isLogin = loginState
  },
  setUid(state, uid) {
    state.uid = uid
  }
}

const actions = {
  updateLoginState({ commit }, loginState) {
    commit('changeLoginState', loginState)
  },
  updateUid({ commit }, uid) {
    commit('setUid', uid)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
