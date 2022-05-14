<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!--enter-active-class ="animate.css"  进入 -->
    <!--leave-active-class="animate.css"  离开-->
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__rubberBand"
      leave-active-class="animate__fadeOutDown"
    >
      <h1 v-show="isShow">00</h1>
    </transition>
  </div>
</template>
// 第三方动画效果实现
// npm i animate.css
<script>
import "animate.css";
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
  width: 50px;
  height: 50px;
}
</style>
