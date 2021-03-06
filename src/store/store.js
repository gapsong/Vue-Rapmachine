import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    rhymes: [],
    randomWords: [],
    randomRhymes: [['a'], ['b'], ['c']]
  },
  getters,
  mutations,
  actions
})
