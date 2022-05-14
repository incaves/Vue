<template>
  <ul>
    <li :style="{ opacity }">VueRouter</li>
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
  data() {
    return {
      opacity: 1,
    };
  },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     console.log("定时器的回调在执行");
  //     // 发现切走News组件 回调还在执行 (因为使用keep-aliv缓存下来了)
  //     //
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },
  // beforeDestroy() {
  //   console.log("News组件即将被销毁了");
  //   clearInterval(this.timer);
  // },
  activated() {
    // 激活 (可以解决上面的问题)
    console.log("News组件被激活了");
    this.timer = setInterval(() => {
      console.log("定时器的回调在执行");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    // 取消激活
    console.log("News组件被取消激活了");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>
