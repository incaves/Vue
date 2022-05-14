<template>
  <Demo msg="Hi" person="杜甫" @hello="showHelloMsg">
    <span>登高必自卑</span>
    <template v-slot:pwe>
      <span>登高必自卑---</span>
    </template>
    <template v-slot:awd>
      <span>登高必自卑---</span>
    </template>
    -->
  </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    function showHelloMsg(value) {
      alert(`Hi,触发了自定义事件,收到的参数是${value}`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>
