import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 引入插件
import plugins from './plugins'
// 引用插件
Vue.use(plugins)
new Vue({
  render: h => h(App)
}).$mount('#app')
