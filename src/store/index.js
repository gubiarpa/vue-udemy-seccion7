import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 30
  },
  mutations: {
    _incrementar(state, payload) {
      state.contador += payload;
    },
    _disminuir(state, payload) {
      state.contador -= payload;
    }
  },
  actions: {
    incrementar({commit}, numero) {
      commit('_incrementar', numero);
    },
    disminuir({commit}, numero) {
      commit('_disminuir', numero);
    }
  },
  modules: {
  }
})
