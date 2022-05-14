<template>
  <div class="son">我是Son组件(组)</div>
  <Dialog />
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  name: "App",
  components: {
    Dialog
  }
}
</script>

<style>
.son {
  background-color: grey;
  padding: 10px;
}
</style>
