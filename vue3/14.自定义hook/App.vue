<template>
  <Demo v-if="isShowDemo" />
  <button @click="isShowDemo = !isShowDemo">显示/隐藏Demo组件</button>
  <hr />
  <Test />
</template>

<script>
import Demo from './components/Demo'
import Test from './components/Test.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    let isShowDemo = ref(true)
    return {
      isShowDemo
    }
  },
  components: {
    Demo,
    Test
  },
}
</script>
