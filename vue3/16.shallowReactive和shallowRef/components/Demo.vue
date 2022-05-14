<template>
  <h3>当前的y值时{{ sum.y }}</h3>
  <button
    @click="
      sum = {
        y: '7777',
      }
    "
  >
    替换y
  </button>
  <button @click="sum.y++">点我加一</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>
  <button @click="name += '-'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import { reactive, toRefs, shallowReactive, shallowRef, ref } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // shallowReactive 浅层次的 只考虑第一层 这里读取不到 job里的数据
    let person = shallowReactive({
      // let person = reactive({
      name: "杜甫",
      age: 19,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // 如果传递的是基本类型和ref没有什么区别
    // 如果传递的是一个对象 不处理
    // let sum = ref(0)
    // let sum = ref({
    let sum = shallowRef({
      y: 0
    })
    // let sum = ref({
    //   y: 0
    // })
    // console.log(sum); ref 是 Proxy
    // console.log(sum); shallowRef 是 Objcet
    // --------
    // 如果一个对象数据 结构比较深 但变化的只是外层变化 shallowReactive
    // 如果一个对象数据 后续功能不会修改该对象中的属性 而是生成新的对象来替换  shallowRef
    return {
      ...toRefs(person),
      sum
    }
  }
}
</script>
