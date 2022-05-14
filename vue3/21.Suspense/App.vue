<template>
  <div class="app">
    我是App组件(组)
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <!-- 会有一个过渡的效果 -->
      <!-- 网速慢 或者使用Primise -->
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child'
// 异步引入
import { defineAsyncComponent } from 'vue'
//用这种引入 只有等APP组件渲染出来了 才会加载Child组件
const Child = defineAsyncComponent(() => import('./components/Child'))
export default {
  name: "App",
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
