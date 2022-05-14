<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  props: ["getSchoolName"],
  data() {
    return {
      name: "清华",
      address: "北京",
    };
  },
  mounted() {
    // 接收用on(但是on先声明hello回调)
    this.$bus.$on("hello", (data) => {
      console.log("我是School组件,我收到了数据", data);
    });
  },
  // beforeDestroy() {
  //   this.$bus.$off("hello");
  // },
};
</script>

<style scoped>
/* 让样式在局部生效 防止冲突 */
.school {
  background-color: pink;
  padding: 5px;
}
</style>
