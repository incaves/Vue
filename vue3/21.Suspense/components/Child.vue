<template>
  <div class="child">
    我是Child组件(子)
    {{ sum }}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "Child",
  setup() {
    let sum = ref(0)
    return new Promise((resovle, reject) => {
      setTimeout(() => {
        resovle({ sum })
      }, 10000);
    })
  }
}
</script>

<style>
.child {
  background-color: pink;
  padding: 10px;
}
</style>
