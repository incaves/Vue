<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前点击时鼠标为:x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
import { ref } from 'vue'
import savePoint from '../hooks/usePoint'
export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let point = savePoint()
    return {
      sum,
      point
    }
  },
}
</script>
