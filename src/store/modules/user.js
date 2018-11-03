const state = {
  isLogin: false,
  uid: null,
  searchKeyword: ''
}

const getters = {

}

const mutations = {
  changeLoginState(state, loginState) {
    state.isLogin = loginState
  },
  setUid(state, uid) {
    state.uid = uid
  },
  setSearchKeyword(state, keyword) {
    state.searchKeyword = keyword
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
