<template>
  <div>
    <!-- h1人员列表 -->
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="item in personList" :key="item.id">{{ item.name }}</li>
    </ul>
    <h3>Count:{{ sum }}</h3>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    // personsList() {
    //   // return this.$store.state.personsList;
    // }, == 等同
    ...mapState(["personList", "sum"]),
  },
  methods: {
    add() {
      const personObj = { id: "nanoid ", name: this.name };
      console.log(personObj);
      this.$store.commit("addPeron");
      // ...mapMutations(['addPeron'])
      this.name = "";
    },
  },
};
</script>

<style>
</style>
