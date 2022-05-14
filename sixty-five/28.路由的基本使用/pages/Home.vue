<template>
  <div>
    <h2>我是Home的内容</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home挂载完毕");
    console.log(this);
  },
  beforeDestroy() {
    console.log("Home即将被销毁了");
  },
};
</script>

<style>
</style>
