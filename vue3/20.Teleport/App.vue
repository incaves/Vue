<template>
  <div class="app">我是App组件(组)</div>
  <Child />
</template>

<script>
import Child from './components/Child'
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
