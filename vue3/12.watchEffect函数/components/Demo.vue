<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '-'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪资</button>
</template>

<script>
import { watch, reactive, ref, watchEffect } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let person = reactive({
      name: "杜甫",
      age: 19,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum的值变化了', newValue, oldValue);
    // })
    // 也能做监视 不知道监视的是谁
    // 有点像计算属性
    // 计算属性注重的是计算出来的值 必须写返回值
    // watchEffect 注重过程 不用写返回值
    watchEffect(() => {
      // 用谁监视谁
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('watchEffect所指定的回调执行了'); // 打开页面就被输出了
    })
    return {
      sum,
      person
    }
  }
}
</script>
