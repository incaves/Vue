<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
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
      sum: 0, // 当前的和
      n: 1, // 选择的数字
    };
  },
  methods: {
    // 加
    increment() {
      // this.sum += this.n;
      this.sum = this.sum + this.n;
    },
    // 减
    decrement() {
      this.sum -= this.n;
    },
    // 基数在加
    incrementOdd() {
      if (this.sum % 2) {
        //只有基数在能进这个判断
        this.sum += this.n;
      }
    },
    // 等一等在加
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>
