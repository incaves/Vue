<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 多页面应用中 使用a标签呈现页面跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->
          <!-- active-class 被激活时候的高亮色 -->
          <router-link
            replace="ture"
            class="list-group-item"
            active-class="active"
            :to="{ name: 'Guanyu' }"
            >About</router-link
          >
          <!-- 开启了 replace模式-->
          <!-- replace是替换记录 栈顶是谁 就把谁替换掉-->
          <!-- 默认是push 追加记录 -->
          <router-link
            replace="ture"
            class="list-group-item"
            active-class="active"
            to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>
