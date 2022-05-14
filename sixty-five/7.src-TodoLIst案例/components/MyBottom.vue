<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAl" />
    </label>
    <span>
      <span>已完成{{ doneTota }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyBottom",
  props: ["todos", "checkAll"],
  methods: {
    checkAl(e) {
      // console.log(e.target.checked);
      this.checkAll(e.target.checked);
    },
  },
  computed: {
    total() {
      return this.todos.length;
    },
    isAll() {
      return this.doneTota === this.total && this.total > 0;
    },
    doneTota() {
      // reduce会根据数组的长度来判断运行几次
      return this.todos.reduce((pre, todo) => {
        return pre + (todo.done ? 1 : 0);
      }, 0);
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
