<template>
  <div class="app">
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
// 局部引入 在main.js中全局引入
// import { mixin, mixin2 } from "../mixin.js";
export default {
  data() {
    return {
      name: "清华",
      address: "北京",
    };
  },
  // mixins: [mixin, mixin2],
};
</script>

<style>
.app {
  background-color: pink;
}
</style>
