<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School />
    <Student />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "全局事件总线",
    };
  },
  components: {
    Student,
    School,
  },
};
</script>

<style scoped>
.app {
  background-color: blue;
  padding: 5px;
}
</style>
