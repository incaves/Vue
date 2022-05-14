<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from 'vue'
export default {
  name: 'App',
  setup() {
    // 自定义一个ref 名为myRef
    function myRef(value, delay) {
      let timer;
      // console.log('收到自定义ref的值', value);
      // 必须返回出去
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef这个容器中读取数据了,把${value}给他了`); // 读取了两次
            track() // 通知Vue追踪 一下value的值 (提前和get商量,让他认为value是有用的) 3
            return value  // 4
          },
          set(newValue) {
            console.log(`有人把myRef这个容器中的数据修改了,改为${newValue}`);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue // 把最新的值给行参 1
              trigger() // 触发 通知Vue去解析模版 2
            }, delay);
          }
        }
      })
    }
    // let keyWord = ref('hello') //使用Vue提高的ref
    let keyWord = myRef('hello', 500) //使用自定义提高的ref
    return {
      keyWord
    }
  },
}
</script>
