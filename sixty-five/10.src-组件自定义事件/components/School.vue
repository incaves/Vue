<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">点击按钮把学校名给App组件(props)</button>
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
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped>
/* 让样式在局部生效 防止冲突 */
.school {
  background-color: pink;
  padding: 5px;
}
</style>
