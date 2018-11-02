import MyDict from '@/utils/MyDict'

const state = {
  dicts: []
}

const getters = {
}

const mutations = {
  updateAll(state, dicts) {
    state.dicts = dicts
  },
  append(state, dict) {
    state.dicts.push(dict)
  },
  clear(state) {
    state.dicts = []
  }
}

const actions = {
  load({ commit }, uid) {
    MyDict.all(uid).then(snapshot => {
      const dicts = snapshot.val()
      if (dicts) {
        commit('updateAll', Object.values(dicts))
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
