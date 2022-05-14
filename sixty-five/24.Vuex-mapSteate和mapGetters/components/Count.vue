<template>
  <div>
    <!-- <h1>当前求和为{{ Sum }}</h1> 对象写法 -->
    <!-- 数组写法 -->
    <h1>当前求和为{{ sum }}</h1>
    <!-- 数组写法 -->
    <!-- 计算属性也可以使用 -->
    <!-- 但夸组件就不能使用了 -->
    <!-- <h3>当前求和放大10倍为:{{ $store.state.sum * 10 }}</h3> -->
    <!-- 简写 在计算属性中 -->
    <!-- <h3>当前求和放大10倍为:{{ bigSum }}</h3> 对象写法 -->
    <h3>当前求和放大10倍为:{{ bigSum }}</h3>
    <!-- <h3>我在{{ School }},学习{{ Subject }}</h3> 对象写法 -->
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <!-- 数组写法 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为基数在加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 选择的数字
    };
  },
  // 发现三个都是this.$store.state
  computed: {
    // Sum() {
    //   return this.$store.state.sum;
    // },
    // School() {
    //   return this.$store.state.school;
    // },
    // Subject() {
    //   return this.$store.state.subject;
    // },
    // mapState 直接去state取数据
    // 前面是 {{页面绑定的数据(计算属性的名称)}} 后面是数据 对象写法
    // ...mapState({
    //   Sum: "sum",
    //   School: "school",
    //   Subject: "subject",
    // }),
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
  },
  methods: {
    // 加
    increment() {
      this.$store.dispatch("jia", this.n);
    },
    // 减
    decrement() {
      this.$store.dispatch("jian", this.n);
    },
    // 基数在加
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    // 等一等在加
    incrementWait() {
      this.$store.dispatch("jiaSet", this.n);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>
