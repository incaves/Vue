<template>
  <h1>一个人的信息</h1>
  姓:<input type="text" v-model="person.firstName" />
  <br />
  名:<input type="text" v-model="person.lastName" />
  <br />
  <span>全名:{{ person.fullName }}</span>
  <br />
  全名:<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Demo',
  // Vue2中的计算属性
  // computed: {
  //   fullName() {
  //     // setup中的this是undfined
  //     return this.person.firstName + '' + this.person.lastName
  //   }
  // },
  setup() {
    let person = reactive({
      firstName: "杜",
      lastName: '甫',
    })
    // Vue3的计算属性 没有考虑计算属性被修改的情况
    // person.fullName = computed(() => {
    //   return person.firstName + '' + person.lastName
    // })
    // 完整形式 考虑读和写
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    return {
      person,
    }
  }
}
</script>
