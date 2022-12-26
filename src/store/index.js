import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      vec: []
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    ordenar(state) {
      var i, j, tmp;

      for (i = 0; i < 10; i++) {
        for (j = i + 1; j < 10; j++) {
          if (parseFloat(state.vec[i]) > parseFloat(state.vec[j])) {
            tmp = state.vec[i];
            state.vec[i] = state.vec[j];
            state.vec[j] = tmp;
          }
        }
      }

      // var i;
      // for (i = 0; i < 10; i++) {
      //   console.log(state.vec[i]);
      // }

    }
  }
  // state vai armazenar informações que poderão ser distribuídas para toda a aplicação
  // getters: {},
  // mutations: {},
  // actions: {}
})

export default store