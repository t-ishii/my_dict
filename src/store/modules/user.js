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

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
