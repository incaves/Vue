<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref, } from 'vue'
export default {
  name: 'Demo',
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  setup() {
    console.log('setup');
    let sum = ref(0)
    // 通过组合API的形势使用生命周期
    // beforeCreate created 就是 setup
    onBeforeMount(() => {
      console.log('挂载前');
    })
    onMounted(() => {
      console.log('挂载后');
    })
    onBeforeUpdate(() => {
      console.log('更新前');
    })
    onUpdated(() => {
      console.log('更新后');
    })
    onBeforeUnmount(() => {
      console.log('卸载前');
    })
    onUnmounted(() => {
      console.log('卸载后');
    })
    return {
      sum,
    }
  },
  // 通过配置项的方式使用生命周期
  //#region 
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('create');
  // },
  // beforeMount() {
  //   console.log('beforeMount');
  // },
  // mounted() {
  //   console.log('mounted');
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate');
  // },
  // updated() {
  //   console.log('updated');
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount');
  // },
  // unmounted() {
  //   console.log('unmounted');
  // }
  //#endregion
}
</script>
