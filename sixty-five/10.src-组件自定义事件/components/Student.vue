<template>
  <div class="student">
    <h2>姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App组件(组件自定义事件)</button>
    <button @click="unbind">解绑prpvc自定义事件</button>
    <button @click="death">销毁当前Student组件的实例对象(VueComponent)</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      // 触发Student实例身上的prpvc事件 后面是传递的值
      this.$emit("prpvc", this.name, 666, 88, 99);
      this.$emit("poy");
    },
    unbind() {
      // this.$off("prpvc");  只适用于解绑一个自定义事件
      // this.$off(["prpvc", "poy"]); 解绑多个
      this.$off(); // 所有的
    },
    death() {
      this.$destroy(); //销毁了Student组件实例 销毁后Student实例自定义事件都不奏效
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
