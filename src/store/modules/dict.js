import MyDict from '@/utils/MyDict'

const state = {
  dicts: []
}

const getters = {
  find(state) {
    return id => state.dicts.find(dict => dict.id === id)
  }
}

const mutations = {
  updateAll(state, dicts) {
    state.dicts = dicts
  }
}

const actions = {
  load({ commit }, uid) {
    MyDict.all(uid).then(snapshot => {
      if (snapshot.exists()) {
        commit('updateAll', Object.values(snapshot.val()))
      }
    })
  },
  refresh({ commit }, dicts) {
    commit('updateAll', dicts)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
