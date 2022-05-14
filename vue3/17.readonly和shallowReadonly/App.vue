<template>
  <button @click="isShowDemo = !isShowDemo">显示/隐藏Demo组件</button>
  <Demo v-if="isShowDemo" />
</template>

<script>
import Demo from './components/Demo'
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
  },
}
</script>
