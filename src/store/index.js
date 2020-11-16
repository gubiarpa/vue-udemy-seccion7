import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 30
  },
  mutations: {
    _incrementar(state) {
      state.contador += 10;
    },
    _disminuir(state) {
      state.contador -= 10;
    }
  },
  actions: {
    incrementar({commit}) {
      commit('_incrementar');
    },
    disminuir({commit}) {
      commit('_disminuir');
    }
  },
  modules: {
  }
})
