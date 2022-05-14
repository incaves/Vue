import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 引入插件
import vueResource from 'vue-resource';
// 注册插件
Vue.use(vueResource)
// 多了一个$http
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
