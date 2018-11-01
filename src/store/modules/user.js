const state = {
  isLogin: false
}

const getters = {

}

const mutations = {
  updateLoginState(state, loginState) {
    state.isLogin = loginState
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
