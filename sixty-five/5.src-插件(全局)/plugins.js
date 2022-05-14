export default {
  //第一个参数是Vue 第二个参数是插件使用者传递的数据(Vue.use(plugins,1))
  install(Vue) {
    console.log('install');
    console.log(Vue);
    // 全局过滤器
    Vue.filter('mySlice', function (value) {
      return value.slice(0, 4)
    })
    // 定义全局指令
    Vue.directive('bindy', {
      bind(element, binding) {
        element.value = binding.value
      },
      inserted(element) {
        element.focus()
      },
      //  指令所在的模版被重新解析时
      update(element, binding) {
        element.value = binding.value
      }
    })
    // 定义混入
    Vue.mixin({
      data() {
        return {
          x: 101,
          y: 102
        }
      },
    })
    // 给Vue原型上添加一个方法(vm和vc都能用了)
    Vue.prototype.hello = () => {
      alert("Vue")
    }
  }
}
