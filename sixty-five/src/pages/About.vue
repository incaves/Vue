<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  // 通过路由规则,进入该组件时被调用
  // 如果使用组件路由 组件规则要加meta
  beforeRouteEnter(to, from, next) {
    console.log(" beforeRouteEnter", to, from);
    if (to.meta.isAuth) {
      // 使用meta 判断是否需要权限 meta路由里配置
      if (localStorage.getItem("School") === "qinghua") {
        next(); // 放行
      } else {
        alert("没有权限查看");
      }
    } else {
      next(); //放行
    }
  },
  // 通过路由规则,离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    // ...
    console.log("beforeRouteLeave");
    next();
  },
  //  ... 这里不能写全局守卫 组件内
};
</script>

<style>
</style>
