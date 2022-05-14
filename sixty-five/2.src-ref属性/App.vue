<template>
  <div>
    <h1 v-text="msg" id="title" ref="msg"></h1>
    <button @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="school" id="sch" />
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "ref属性",
    };
  },
  components: {
    School,
  },
  methods: {
    showDOM() {
      // console.log(document.getElementById("title")); 使用了Vue尽量不用
      // console.log(this); 指向VueComponent 因为App也是一个组件
      console.log(this.$refs.msg); //拿到DOM元素
      console.log(this.$refs.school); // 拿到VueComponent组件实例对象
      console.log(document.getElementById("sch")); // 拿到了School的真实HTML结构
    },
  },
};
</script>

<style>
</style>
