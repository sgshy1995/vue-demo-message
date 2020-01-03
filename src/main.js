import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let eventHub = new Vue()
Vue.prototype.$eventHub = eventHub

new Vue({
  render: h => h(App),
}).$mount('#app')

