<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "清华",
      age: 101,
    };
  },
};
</script>

<style>
</style>
