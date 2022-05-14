<template>
  <div class="app">
    我是App组件(组)
    <br />
    {{ name }} -- {{ price }}
  </div>
  <Child />
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import Child from './components/Child.vue'
import { provide } from '@vue/runtime-core'
export default {
  name: "App",
  setup() {
    let car = reactive({
      name: '奔驰',
      price: '40W'
    })
    // 给自己后代组件传递数据 第一个参数是名字 第二个参数是数据
    // 一般用于给孙...等
    provide('car', car)
    return {
      ...toRefs(car)
    }
  },
  components: {
    Child
  }
}
</script>

<style>
.app {
  background-color: cadetblue;
  padding: 10px;
}
</style>
