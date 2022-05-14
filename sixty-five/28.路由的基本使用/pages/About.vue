<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log("About挂载完毕");
    console.log(this);
  },
  beforeDestroy() {
    console.log("About即将被销毁了");
  },
};
</script>

<style>
</style>
