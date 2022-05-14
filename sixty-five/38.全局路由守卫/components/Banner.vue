<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测式go(后退1步)</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back(); //后退
    },
    forward() {
      this.$router.forward(); // 前进
    },
    test() {
      this.$router.go(-1); // 正数前进 负数后退
    },
  },
};
</script>

<style>
</style>
