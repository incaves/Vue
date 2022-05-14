<template>
  <div>
    <!-- 传入数据 -->
    <Student name="杜甫" sex="男" :age="19 + 1" />
    <!-- <Student name="李商隐" sex="女" age="101+1" /> 会变成1011 -->
    <!-- v-bind -->
    <Student name="李商隐" sex="女" :age="101" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    Student,
  },
  methods: {},
};
</script>

<style>
</style>
