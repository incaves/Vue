<template>
  <div class="stu">
    <h2 @click="showName">姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
  </div>
</template>

<script>
// 引入mixin 局部引入 在main.js中全局引入
// import { mixin, mixin2 } from "../mixin.js";
export default {
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  // mixins: [mixin, mixin2],
};
</script>
<style>
.stu {
  background-color: aqua;
}
</style>
