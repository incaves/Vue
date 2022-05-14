<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 包裹到此标签中 appear表示动画立即执行(不用点击按钮) -->
    <transition appear name="hello">
      <!-- 只能使用一个元素 -->
      <h1 v-show="isShow">过度与动画</h1>
    </transition>
    <transition-group>
      <!-- 可以使用多个元素 key-->
      <h1 v-show="isShow" key="1">过度与动画</h1>
      <h1 v-show="isShow" key="2">过度与动画</h1>
    </transition-group>
  </div>
</template>
// 过度效果效果实现
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
  transition: 0.5s linear;
}
/* 进入的起点 */
.hello-enter,
.hell-leave-to {
  transform: translateX(-100%);
}
/* .hello-enter-avtive,
.hello-leave-active {
  transition: 0.5s linear;
} */
/* 进入的终点 */
.hell-enter-to,
.hello-leave {
  transform: translateX(0);
}
/* 离开的起点 */
/* .hello-leave {
  transform: translateX(0);
} */
/* 离开的终点
.hell-leave-to {
  transform: translateX(-100%);
} */
</style>
