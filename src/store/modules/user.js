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

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
