<template>
  <div>
    <School />
    <Student />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
  methods: {},
};
</script>

<style>
</style>
