<template>
  <div>
    <School />
    <Student />
  </div>
</template>

<script>
// 引入组件
import School from "./60.单文件组件.vue";
import Student from "./61.单文件组件——组件.vue";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>
