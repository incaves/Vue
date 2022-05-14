<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
    <h3>当前求和放大10倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- <button @click="increment(n)">+</button> -->
    <button @click="jia(n)">+</button>
    <!-- <button @click="decrement(n)">-</button> -->
    <button @click="jian(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为基数在加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 选择的数字
    };
  },
  computed: {
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 借助mapMutations生成对应的方法,方法会调用commit去联系mapMutations(对象的写法)
    // ...mapMutations({ increment: "jia", decrement: "jian" }),
    // 借助mapMutations生成对应的方法,方法会调用commit去联系mapMutations(数组的写法)
    ...mapMutations(["jia", "jian"]), // @click 函数也要修改
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaSet", this.n);
    // },
    // 对象写法 也可以使用数组
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaSet" }),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>
