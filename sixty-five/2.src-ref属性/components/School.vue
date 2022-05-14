<template>
  <div class="app">
    <h2>学校姓名:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "清华",
      address: "北京",
    };
  },
};
</script>

<style>
.app {
  background-color: blue;
}
</style>
