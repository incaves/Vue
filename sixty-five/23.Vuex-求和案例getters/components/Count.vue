<template>
  <div>
    <!-- <h1>当前求和为{{ Sum }}</h1> 对象写法 -->
    <h1>当前求和为{{ $store.state.sum }}</h1>
    <!-- <h3>当前求和放大10倍为:{{ $store.state.sum * 10 }}</h3> -->
    <h3>当前求和放大10倍为:{{ $store.state.bigSum }}</h3>
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
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 选择的数字
    };
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
