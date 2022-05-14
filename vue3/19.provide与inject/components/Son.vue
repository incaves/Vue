<template>
  <div class="son">
    我是Son组件(组) 接受的数据 {{ car.name }} - {{ car.price }}
    <br />
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
  name: "App",
  setup() {
    let car = inject('car')
    return {
      car
    }
  }
}
</script>

<style>
.son {
  background-color: grey;
  padding: 10px;
}
</style>
