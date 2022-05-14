<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 包裹到此标签中 appear表示动画立即执行(不用点击按钮) -->
    <transition appear name="hello">
      <h1 v-show="isShow">过度与动画</h1>
    </transition>
  </div>
</template>
// 动画效果实现
<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: blueviolet;
}
/* v开头可以更换 给标签加name属性(尽量加,因为页面可能不只一处用到 累名是固定的 v可以更换) */
.hello-enter-active {
  animation: app 0.5s linear;
}
.hello-leave-active {
  animation: app 0.5s linear reverse;
}
@keyframes app {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
