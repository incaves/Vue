<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @click="handleCheck(todo.id)"
        />
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="deleteClick(todo.id)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接收todo对象(List中传递来的)
  props: ["todo"],
  methods: {
    handleCheck(id) {
      // 通知App组件将对应的done值取反
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    deleteClick(id) {
      if (confirm("Sure to delete?")) {
        // this.deleteTodo(id);
        this.$bus.$emit("deleteTodo", id);
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd !important;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>
