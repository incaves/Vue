<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <h2>姓名:{{ myName }}</h2>
    <h2>年龄:{{ myAge }}</h2>
    <h2>性别:{{ sex }}</h2>
    <button @click="update">尝试修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "School",
  // props接收到的数据都存在了VueComponent上
  // props: ["name", "age", "sex"],  简单接收数据  接收的同时对数据进行类型限制
  // props: {  简单声明接收
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },
  // 接收的同时对数据进行类型限制 默认值的指定 必要性的限制
  props: {
    name: {
      type: String, // 类型
      required: true, // 必要的
    },
    age: {
      type: Number,
      default: 99, // 如果没传age 默认是99岁
    },
    sex: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      msg: "两个组件要用共同的结构不同的信息",
      // props传递过来的值是优先被接收的
      myName: this.name,
      myAge: this.age,
    };
  },
  methods: {
    update() {
      this.myAge = 99;
    },
  },
};
</script>

<style>
.app {
  background-color: blue;
}
</style>
