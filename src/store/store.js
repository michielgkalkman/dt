import Vue from 'vue'
import Vuex from 'vuex'

import { DecisionTable } from '../decisiontables/DecisionTable.ts'

Vue.use(Vuex)

const moduleDecisionTables = {
  state: {
    decisiontables: [
      new DecisionTable().getDecisionTable()
    ]
  },
  getters: {
    getDecisionTable(state) {
      return id => state.decisiontables[id]
    }
  }
}

export const store = new Vuex.Store({
  modules: {
    decisionTables: moduleDecisionTables
  },
  state: {
    currentContextMenuKey: ''
  },
  mutations: {
    changeCurrentContextMenuKey(state, currentContextMenuKey) {
      state.currentContextMenuKey = currentContextMenuKey
    }
  },
  getters: {
    currentContextMenuKey: state => state.currentContextMenuKey
  }
})