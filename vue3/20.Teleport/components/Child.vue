<template>
  <div class="child">
    我是Child组件(子)
    <Son />
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: "Child",
  components: {
    Son
  }
}
</script>

<style>
.child {
  background-color: pink;
  padding: 10px;
}
</style>
