<template>
  <div class="app">
    <h2>学校名称:{{ name | mySlice }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="test">点击测试hello方法</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "清华ABCDEFG",
      address: "北京",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>

<style>
.app {
  background-color: pink;
}
</style>
