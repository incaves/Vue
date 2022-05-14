<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <button @click="test1">测试触发hello自定义事件</button>
  <slot></slot>
  <slot name="pwe"></slot>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Demo',
  beforeCreate() {
    console.log('---beforeCreate---');
  },
  emits: ['hello'],
  props: ['msg', 'person'], // 如果不写props attrs中就有内容
  // setup 比 beforeCreate 执行更早 this是undefinde
  setup(props, context) {
    console.log('---setup---', this);
    // 组件外部传递过来的 但没有在props中接受
    console.log(props, context, context.attrs);
    // 插槽
    console.log(context.slots);
    //触发自定义事件
    console.log(context.emit);
    let person = reactive({
      name: "杜甫",
      age: 18,
    })
    function test1() {
      context.emit('hello', 666)
    }
    return {
      person,
      test1
    }
  }
}
</script>
