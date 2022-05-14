<template>
  <h1>一个人的信息 Vue3的方法</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <button @click="sayHi">弹出信息Vue3</button>
  <hr />
  <h1>一个人的信息 Vue2的方法</h1>
  <h2>性别:{{ sex }}</h2>
  <button @click="seyWe">弹出信息Vue2</button>
  <hr />
  <button @click="test1">测试在Vue2的配置中调用Vue3的数据</button>
  <p>可以拿到</p>
  <hr />
  <button @click="test2">测试在Vue3的setup配置中调用Vue2的数据</button>
  <p>undefined</p>
</template>

<script>
import { h } from 'vue'
export default {
  name: 'App',
  // 数据 方法 计算属性 生命周期等等都要放在setup
  // 测试 此时不是响应式
  data() {
    return {
      sex: "男"
    }
  },
  methods: {
    seyWe() {
      alert('登高必自卑')
    },
    // 可以拿到Vue3的配置
    test1() {
      console.log(this.sex);
      console.log(this.age);
      console.log(this.name);
    }
  },
  setup() {
    // 数据
    let name = '杜甫'
    let age = 18
    // 方法
    function sayHi() {
      alert(`我叫${name},${age}岁了,你好Vue3`)
    }
    function test2() {
      console.log(name);
      console.log(this.sex);
    }
    // setup中返回的数据 可以直接在模版中使用(返回一个对象)
    return {
      name,
      age,
      sayHi,
      test2
    }
    // 也可以返回一个渲染函数(了解)
    // return () => h('h1', '登高')
  }
}
</script>
