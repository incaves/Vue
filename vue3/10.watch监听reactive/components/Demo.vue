<template>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '-'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪资</button>
</template>

<script>
import { watch, reactive } from 'vue'
export default {
  name: 'Demo',
  // Vue2的watch
  // watch: {
  //   // 简单形式
  //   // sum(newVlaue, oldValue) {
  //   //   console.log('sum的值变化了');
  //   //   console.log(`新值是${newVlaue},旧值是${oldValue}`);
  //   // }
  //   // 复杂形势
  //   sum: {
  //     immediate: true, // 立即执行
  //     deep: true, //深层监视
  //     hanlder(newVlaue, oldValue) {
  //       console.log(`新值是${newVlaue},旧值是${oldValue}`);
  //     }
  //   }
  // },

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
    // Vue3中的watch
    // 情况一:监视的是reactive所定义的响应式数据中的全部属性
    // 1.无法争取正确获取 oldValue
    // 2.强制开启了深度监视 deep无效
    // watch(person, (newVlaue, oldValue) => {
    //   // 嵌套的数据很深 但是没有开启深度监视deep  deep为true
    //   console.log('person变化了');
    //   console.log(newVlaue, oldValue); // 无法争取正确获取 oldValue
    // })
    // 情况二:监视的是reactive所定义的响应式数据中的某个属性
    // watch(() => {
    //   return person.age
    // }, (newVlaue, oldValue) => {
    //   console.log('person中的age变化了', newVlaue, oldValue);
    // })
    // 情况三:监视的是reactive所定义的响应式数据中的某些属性
    // watch([() => person.age, () => person.name], (newVlaue, oldValue) => {
    //   console.log('person中的name和age变化了', newVlaue, oldValue);
    // })
    // 特殊情况
    // 情况一监视的是person 自动开启深度监视
    // 这里由于监视的是reactive所定义的对象中的某个属性,所以deep配置有效
    // 监视某个属性 对象
    watch([() => person.job,], (newVlaue, oldValue) => {
      console.log('person中的job变化了', newVlaue, oldValue);
    }, { deep: true })
    return {
      person
    }
  }
}
</script>
