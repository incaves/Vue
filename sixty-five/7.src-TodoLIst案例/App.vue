<template>
  <div>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader :addTodo="addTodo" />
          <MyList
            :todos="todos"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
          />
          <MyBottom :todos="todos" :checkAll="checkAll" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyBottom from "./components/MyBottom.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyBottom,
  },
  data() {
    return {
      todos: [
        { id: "001", title: "吃饭", done: true },
        { id: "002", title: "睡觉", done: false },
        { id: "003", title: "游戏", done: true },
      ],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      console.log("通过props传递函数的方式让Header组件给App组件传值");
      this.todos.unshift(todoObj);
    },
    // 勾选或取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        // 根据id(点击的项)开始遍历 如果todo里的id 和点击的id相同就取反
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选或者取消或者全不选
    checkAll(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
  },
};
</script>

<style scoped>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
