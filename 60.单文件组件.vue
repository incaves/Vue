<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h3>学校地址:{{ address }}</h3>
    <button @click="add">按钮</button>
  </div>
</template>
<script>
// 组件交互相关的代码(数据,方法等)
export default {
  name: "Scholl",
  data() {
    return {
      name: "清华",
      address: "北京",
    };
  },
  methods: {
    add() {
      alert(this.name);
    },
  },
};
school;
</script>
<style scoped>
/* 组件的样式 */
.demo {
  background-color: aqua;
}
</style>
