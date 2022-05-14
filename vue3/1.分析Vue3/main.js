// 引入的是一个名为createApp的工厂函数(以前是Vue构造函数)
import { createApp } from 'vue'
// 引入全局组件
import App from './App.vue'
// 创建应用实例对象 - app(类似于之前的vm,但app比vm更'轻')
createApp(App).mount('#app')
// ===等于下面这种
// const app = createApp(App)
// 挂载
// app.mount('#app')
// console.log(app);
// mount == el
// new Vue({
// render => (App)
// }).$mount('#app')
// mount 安装   unmount卸载
