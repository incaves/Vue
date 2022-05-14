<template>
  <div id="app">
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

<style>
#app {
  background-color: aqua;
}
</style>
