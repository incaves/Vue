import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false
// const Demo = Vue.extend({})
// const y = new Demo() Vue实例上有 $emit $on
// Vue.prototype.x = y

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this  //this指向vm
  },
}).$mount('#app')
