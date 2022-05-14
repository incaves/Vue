<template>
  <div>
    <ul class="todo-main">
      <MyItem
        v-for="todoObj in todos"
        :key="todoObj.index"
        :todo="todoObj"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      />
      <!-- <MyItem
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
        v-model="todo.done" 也可以实现功能但不推荐(会修改props的值)
      /> -->
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  props: ["todos", "checkTodo", "deleteTodo"],
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
