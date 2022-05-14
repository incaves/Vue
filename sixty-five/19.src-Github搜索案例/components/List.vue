<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <!-- v-show="userlist.lenth" 为0的话就不展示 -->
    <div
      v-show="info.userlist.length"
      class="card"
      v-for="user in info.userlist"
      :key="user.id"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst" class="shw">welcome to GitHub</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoding" class="shw">loding...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg" class="shw">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true, // 是否初次展示
        isLoding: false, // 是否处于加载中 点击了搜素按钮才会是加载中
        errMsg: "", // 请求失败的错误信息
        userlist: [], // 数据
        // 点击了搜素按钮 isFirst 为 fasle isLoding 为 true  数据加载成功 isLoding 为 fasle
      },
    };
  },
  mounted() {
    this.$bus.$on("updateListDate", (dataOBj) => {
      // 一直保存isFirst 搜素时不会消失
      this.info = { ...this.info, ...dataOBj };
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
.shw {
  margin-left: 21px;
  color: cadetblue;
}
</style>
