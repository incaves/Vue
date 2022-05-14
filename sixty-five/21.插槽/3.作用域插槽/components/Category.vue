<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 传给了插槽的使用者(App) -->
    <slot :games="games" name="center">默认值</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style scoped>
.category {
  background-color: aquamarine;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: pink;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
.footer {
  display: flex;
  justify-content: space-around;
}
</style>
