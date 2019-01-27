export default {
  state: {
    msg: 'Welcome to Your Vuex Module App'
  },
  mutations: {
    setMsg (state, msg) {
      state.msg = msg
    }
  },
  actions: {
    setMsg ({commit}, payload) {
      commit('setMsg', payload)
    }
  },
  getters: {
    msg (state) {
      return state.msg
    }
  }
}
