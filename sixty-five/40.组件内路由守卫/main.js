//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
//关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)
//创建vm
new Vue({
	el: '#app',
	render: h => h(App),
	router
})

