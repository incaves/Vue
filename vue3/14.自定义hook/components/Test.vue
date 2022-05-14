<template>
  <div>Tset组件也想使用hook中的方法</div>
  <h2>当前点击时鼠标为:x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
import savePoint from '../hooks/usePoint'
export default {
  name: "Tset",
  setup() {
    let point = savePoint()
    return {
      point
    }
  }
}
</script>

<style>
</style>
