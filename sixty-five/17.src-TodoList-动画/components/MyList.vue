<template>
  <div>
    <ul class="todo-main">
      <!-- <transition-group name="todo" appear> -->
      <MyItem v-for="todoObj in todos" :key="todoObj.index" :todo="todoObj" />
      <!-- </transition-group> -->
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  props: ["todos"],
  components: {
    MyItem,
  },
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
