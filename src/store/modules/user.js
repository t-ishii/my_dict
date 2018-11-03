const state = {
  isLogin: false,
  uid: null,
  activeMenu: '/'
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
  setActiveMenu(state, menuId) {
    console.log(menuId)
    state.activeMenu = menuId
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
