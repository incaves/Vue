<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h3>工作:{{ person.job.type }}</h3>
  <h3>工作薪水:{{ person.job.salar }}</h3>
  <h4>测试{{ person.job.a.b.c }}</h4>
  <h5>数组:{{ person.hobby }}</h5>
  <button @click="chengeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    let person = reactive({
      name: "杜甫",
      age: 18,
      job: {
        type: "前端工作",
        salar: "30K",
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    function chengeInfo() {
      person.name = '李白'
      person.age = 20
      person.job.type = '后端开发'
      person.job.salar = '99k'
      person.job.a.b.c = 101
      person.hobby[0] = '学习'
      console.log(person.job);
      console.log(person.name, person.age);
    }
    return {
      person,
      chengeInfo
    }
  }
}
</script>
