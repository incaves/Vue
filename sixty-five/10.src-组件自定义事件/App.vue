<template>
  <div class="app">
    <h1>{{ msg }}>学生姓名:{{ stdentname }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props 实现子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定一个自定义事件 实现子给父传递数据(第一种写法) 使用@或v-on -->
    <!-- <Student v-on:prpvc="getStudentName" /> -->
    <Student @prpvc="getStudentName" @poy="demo" @click.native="show" />
    <!-- <Student @prpvc.once="getStudentName" /> 只触发一次 -->
    <!-- 通过父组件给子组件绑定一个自定义事件 实现子给父传递数据(第二种写法) 使用ref -->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "Vue",
      stdentname: "",
    };
  },
  components: {
    Student,
    School,
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名:", name);
    },
    // getStudentName(name, x, y, z) {
    getStudentName(name, ...params) {
      //es6 扩展运算符 不管接收的内容有多少 都存到a这个数组中
      console.log("App收到了学生名:", name);
      console.log(params);
      this.stdentname = name;
    },
    demo() {
      console.log("demo回调");
    },
    show() {
      console.log(
        "注册的组件绑定原生事件,可是它把你当自定义事件,加上native修饰"
      );
    },
  },
  mounted() {
    // 这样使用自定义事件比较灵活
    // setTimeout(() => {
    //   this.$refs.student.$on("prpvc", this.getStudentName);
    // }, 3000);
    // 注册自定义事件
    // this.$refs.student.$on("prpvc", this.getStudentName);
    // 只触发一次
    // this.$refs.student.$once("prpvc", this.getStudentName);
    // 首到的参数响应到页面(记得注释上面getStudentName函数)(解开ref注册自定义)  普通函数的this指向有问题
    // this.$refs.student.$on("prpvc", (name, ...params) => {
    //   console.log("App收到了学生名:", name);
    //   console.log(params);
    //   this.stdentname = name;
    // });
  },
};
</script>

<style scoped>
.app {
  background-color: blue;
  padding: 5px;
}
</style>
