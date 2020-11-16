import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 30
  },
  mutations: {
    _incrementar(state) {
      state.contador += 10;
    },
    _disminuir(state, payload) {
      state.contador -= payload;
    }
  },
  actions: {
    incrementar({commit}) {
      commit('_incrementar');
    },
    disminuir({commit}, numero) {
      commit('_disminuir', numero);
    }
  },
  modules: {
  }
})
