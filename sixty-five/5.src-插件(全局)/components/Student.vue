<template>
  <div class="stu">
    <h2>姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
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
};
</script>
<style>
.stu {
  background-color: aqua;
}
</style>
