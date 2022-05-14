<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="getUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "", //数据绑定(让Vue可以检测到)
    };
  },
  methods: {
    getUser() {
      // 点击按钮
      this.$bus.$emit("updateListDate", {
        isFirst: false, // 告诉List欢迎词关闭
        isLoding: true, // 告诉List loding 为 true
        errMsg: "",
        userlist: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // console.log("请求成功", response.data.items);
          // this.$bus.$emit("getUsers", response.data.items);
          this.$bus.$emit("updateListDate", {
            isLoding: false,
            errMsg: "",
            userlist: response.data.items,
          });
        },
        (error) => {
          this.$bus.$emit("updateListDate", {
            isLoding: false,
            errMsg: error.mssage,
            userlist: [],
          });
        }
      );
    },
  },
};
</script>
