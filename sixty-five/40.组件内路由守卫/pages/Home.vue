<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Messgae</router-link
          >
        </li>
      </ul>
      <!-- 写一个标签 可以解决 切换走 数据不被销毁(News组件) -->
      <!-- 这个标签会被缓存下来 不会被销毁 -->
      <!-- include 表示 缓存那个组件(组件名 组件中的name)(如果不写 Message 也会被缓存) -->
      <!-- 如果要缓存都个可以写成数组 :include=["News",...] -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>
