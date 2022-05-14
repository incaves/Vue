<template>
  <div class="app">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "清华",
      address: "北京",
    };
  },
};
</script>

<style scoped>
/* 让样式在局部生效 防止冲突 */
.app {
  background-color: pink;
}
</style>
