import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 30
  },
  mutations: {
    incrementar(state) {
      state.contador += 10;
    }
  },
  actions: {
  },
  modules: {
  }
})
