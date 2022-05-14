<template>
  <div class="child">
    我是Child组件(子) 接受的数据 {{ car.name }} - {{ car.price }}
    一般使用props 不用这种方式
    <br />

    <Son />
  </div>
</template>

<script>
import Son from './Son.vue'
import { inject } from '@vue/runtime-core'
export default {
  name: "Child",
  setup() {
    let car = inject('car')
    return {
      car
    }
  },
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
