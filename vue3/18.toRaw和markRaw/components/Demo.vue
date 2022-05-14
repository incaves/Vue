<template>
  <h1>{{ sum }}</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>
  <button @click="name += '-'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
  <button @click="rawBtn">输入最原始的person</button>
  <hr />
  <h v-show="person.car">汽车:{{ person.car }}</h>
  <button @click="carBtn">添加一台车</button>
  <button @click="person.car.name += '!'">换车名</button>
  <button @click="person.car.price++">换价格</button>
</template>

<script>
import { reactive, toRefs, toRaw, ref, markRaw } from 'vue'
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
      // car: {}
    })
    function rawBtn() {
      // 只能还原reactive的数据
      // 还原成初始状态 响应时对象转为普通对象
      const p = toRaw(person)
      console.log(p);
    }
    function carBtn() {
      let car = {
        name: "奔驰",
        price: 40
      }
      // 被markRaw包裹就可 就不是响应时数据了
      // 数据在变 但是不是响应时
      // 标记一个对象 使其拥有不会成为响应式对象
      // person.car = markRaw(car)
      person = markRaw(car)
    }
    // 两者应用场景
    // 有些值不应该设置为响应时 例如复杂的第三方类库 axios ...
    // 当渲染具有不可变数据的大列表时,跳过响应式转换可以提高性能
    return {
      rawBtn,
      sum,
      person,
      carBtn,
      ...toRefs(person),
    }
  }
}
</script>
