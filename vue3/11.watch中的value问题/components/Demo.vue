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
import { watch, reactive, ref } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let person = ref({
      name: "杜甫",
      age: 19,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // 1.不能加value sum存的是基本数据类型的值
    watch(sum, (newValue, oldValue) => {
      console.log('sum的值变化了', newValue, oldValue);
    })
    // 2.可以加value ref借助了reactive
    // watch(person.value, (newValue, oldValue) => {
    watch(person, (newValue, oldValue) => {
      console.log('person的值变化了', newValue, oldValue);
    }, { deep: true })
    return {
      sum,
      person
    }
  }
}
</script>
