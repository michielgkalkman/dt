import Vue from 'vue'
import App from './App.vue'
import vClickOutside from 'v-click-outside'
import { store } from './store/store'


Vue.config.productionTip = false

Vue.use(vClickOutside)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
