<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前的信息为{{ msg }}</h2>
  <button @click="msg += '!'">改变信息</button>
  <hr />
</template>

<script>
import { ref, watch, } from 'vue'
export default {
  name: 'Demo',
  // Vue2的watch
  // watch: {
  //   // 简单形式
  //   // sum(newVlaue, oldValue) {
  //   //   console.log('sum的值变化了');
  //   //   console.log(`新值是${newVlaue},旧值是${oldValue}`);
  //   // }
  //   // 复杂形式
  //   sum: {
  //     immediate: true, // 立即执行
  //     deep: true, //深层监视
  //     hanlder(newVlaue, oldValue) {
  //       console.log(`新值是${newVlaue},旧值是${oldValue}`);
  //     }
  //   }
  // },
  setup() {
    let sum = ref(0)
    let msg = ref('你好')
    // Vue3中的watch
    // 情况一:监视ref所定义的一个响应式数据
    // watch(sum, (newVlaue, oldValue) => {
    //   console.log(`新值是${newVlaue},旧值是${oldValue}`);
    // })
    // 情况二:监视ref所定义的多个个响应式数据
    // watch([sum, msg], (newVlaue, oldValue) => {
    //   console.log(`新值是${newVlaue},旧值是${oldValue}`);
    // })
    // 情况三:配置 watch有三个参数
    watch(sum, (newVlaue, oldValue) => {
      console.log(`新值是${newVlaue},旧值是${oldValue}`);
    }, {
      immediate: true,
      deep: true
    })
    return {
      sum,
      msg,
    }
  }
}
</script>
