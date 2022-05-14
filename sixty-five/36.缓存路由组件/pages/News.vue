<template>
  <ul>
    <li>news001 <input type="text" /></li>
    <!-- 切换到别的地方 发现输入框的内容没有了(因为被销毁掉了) -->
    <li>news002 <input type="text" /></li>
    <!-- 在那个组件展示就在那个组件里操作 -->
    <!-- Home组件 -->
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  beforeDestroy() {
    console.log("News组件即将被销毁了");
  },
};
</script>

<style>
</style>
