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
    <button @click="jia(n)">+</button>
    <button @click="jian(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为基数在加</button>
    <button @click="incrementWait(n)">等一等再加</button>
    <h3>Person:{{ personList.length }}</h3>
    <h3>Person:{{ personList.name }}</h3>
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
    ...mapState(["sum", "school", "subject", "personList"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    ...mapMutations(["jia", "jian"]), // @click 函数也要修改
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaSet" }),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>
