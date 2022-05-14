<template>
  <div class="student">
    <h2>姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
    <button @click="test">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    // 接收(提供数据)
    test() {
      pubsub.publish("hello", this.name);
    },
  },
};
</script>
<style scoped>
/* 默认是CSS */
.student {
  background-color: aqua;
  padding: 5px;
  margin-top: 30px;
}
</style>
