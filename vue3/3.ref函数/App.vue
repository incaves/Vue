<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h3>工作:{{ job.type }}</h3>
  <h3>工作薪水:{{ job.salar }}</h3>
  <button @click="chengeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 引用对象 简称ref对象
    let name = ref('杜甫')
    let age = ref(18)
    let job = ref({
      type: "前端工作",
      salar: "30K"
    })
    function chengeInfo() {
      // name = '李白'
      // age = 20
      // 修改了 但是没有Vue没有发现 需要用到ref
      // console.log(name, age);
      // ref加工的是一个对象 引用实现的对象 => 引用对象 就变成了响应式
      // 模版中不用 .value
      // ref 可以接受 基本类型 对象类型
      name.value = '李白'
      age.value = 20
      console.log(job.value);
      job.value.type = '后端开发'
      job.value.salar = '99k'
      console.log(name, age);
    }
    return {
      name,
      age,
      chengeInfo,
      job
    }
  }
}
</script>
