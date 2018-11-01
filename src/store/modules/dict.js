import MyDict from '@/utils/Mydict'

const DEFAULT_LIMIT = 10

const state = {
  dicts: []
}

const getters = {

}

const mutations = {
  update(state, dicts) {
    for (dict of dicts) {
      state.dicts.push(dict)
    }
  }
}

const actions = {
  limitToFirst({ commit }, uid, n = DEFAULT_LIMIT) {
    MyDict.limitToFirst(uid, n).then(snapshot => {
      if (Array.isArray(snapshot.val())) {
        commit('update', snapshot.val())
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
