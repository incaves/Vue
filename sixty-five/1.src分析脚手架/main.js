// 引入Vue
// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'
// 引入App组件,它是所有组件的父组件(必它大的只有vm)
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 创建Vue实例对象---VM
// new Vue({
// 将App组件放入容器中
//   render: h => h(App),
// }).$mount('#app')
// $mount就等于el:"#app"
new Vue({
  el: "#app",
  // render: h => h(App)
  // render(createElement) {  创建具体的元素
  //   const y = createElement('h2', 'yyy')
  //   return y // render必须有返回值
  // },
  // 精简版
  // render: createElement => createElement('h2', 'yyy')
  // 更精简版
  // render: y => y('h2', 'yyy')
  // 精简--
  render: h => h(App) //写的内容都在App组件里 标签都不用写了
  // 以前的写法 会报错(缺少了模版解析器)
  // template: `<h2>yyy</h2>`
  // template: `<App></App>`,
  // components: {
  //   App
  // }
})
