import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 全局引入
import { mixin, mixin2 } from './mixin'
Vue.mixin(mixin)
Vue.mixin(mixin2)
new Vue({
  render: h => h(App)
}).$mount('#app')
