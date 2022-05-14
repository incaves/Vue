<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
// 引入
import pubsub from "pubsub-js";
export default {
  props: ["getSchoolName"],
  data() {
    return {
      name: "清华",
      address: "北京",
    };
  },
  mounted() {
    // 发布hello消息(接收数据)
    this.pubId = pubsub.subscribe("hello", (hello, name) => {
      console.log("发布了hello消息", name);
    });
  },
  beforeDestroy() {
    // 取消订阅  this 只接收id
    pubsub.unsubscribe(this.pubId);
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
