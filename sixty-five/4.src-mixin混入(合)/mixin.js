export const mixin = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  mounted() {
    console.log("mixin") // 输入了两遍
  },
}
// 两个组件有相同的方法 就可以用到
export const mixin2 = {
  data() {
    return {
      x: 101,
      y: 102
    }
  }
}
// 数据如果组件有听组件的
// 数据如果没有用mixin的
// 生命周期钩子谁都不听(组件中一遍,mixin一遍)
