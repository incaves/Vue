<template>
  <div class="container">
    <Category title="游戏">
      <!-- 必须包括template -->
      <!-- scope 可以收带数据 -->
      <!-- 接收的不一定要和传递的一样 -->
      <template scope="demo" slot="center">
        <ul>
          <li v-for="(item, index) in demo.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 结构赋值 -->
      <template scope="{games}" slot="center">
        <!-- <template slot-scope="{ games }"> -->
        <ol>
          <li v-for="(item, index) in games" :key="index" style="color: red">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="demo" slot="center">
        <h4 v-for="(item, index) in demo.games" :key="index">{{ item }}</h4>
      </template>
    </Category>
    -->
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
.h4 {
  text-align: center;
}
</style>
