import Vue from 'vue'
import Vuex from 'vuex'

// import { moduleDecisionTables } from './moduleDecisionTables'

Vue.use(Vuex)

const moduleDecisionTables = {
  state: {
    decisiontables: [{
      decisionTable: { 
          conditions: [ 
              { condition: 'condition-1', value: 'NNYY' },
              { condition: 'condition-2', value: 'NYNY' }
          ],
          actions: [ 
              { action: 'action-1', value: '--XX' },
              { action: 'action-2', value: '-X--' }
          ]
        }
      }
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