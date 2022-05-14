<template>
  <h3>当前的y值时{{ sum }}</h3>
  <button @click="sum">点我加一</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>
  <button @click="name += '-'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import { reactive, readonly, ref, shallowReadonly, toRefs, } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      name: "杜甫",
      age: 19,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    let sum = ref(0)
    // person = readonly(person) 不允许修改
    // 只考虑第一层数据 job里面的数据可以修改
    person = shallowReadonly(person)
    // 一般只适用于reactive
    return {
      ...toRefs(person),
      sum
    }
  }
}
</script>
