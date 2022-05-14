// 该文件用于创建Vuex最核心的store
// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 准备 actions 用于响应组件中的动作
const actions = {
  jia(context, value) {
    // 第一个参数(有一堆方法)miniStore和store一样 但是没有store全
    // 第二个参数是option选择的值
    context.commit('jia', value)
  },
  jian(context, value) {
    context.commit('jian', value)
  },
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('jia', value)
    }
  },
  jiaSet(context, value) {
    setTimeout(() => {
      context.commit('jia', value)
    }, 500);
  }
}
// 准备 mutations 用于操作数据(state)
const mutations = {
  jia(state, value) {
    // 第一个参数是 state
    // 第二个参数是option选择的值
    // state.sum = state.sum + value
    state.sum += value
  },
  jian(state, value) {
    state.sum -= value
  },
  jiaOdd(state, value) {
    state.sum += value
  },
}
// 准备state - 用于存储数据
const state = {
  sum: 0, // 当前的和
}
// // 准备getters - 用于将state中的数据进行加工
// 像计算属性 拿state中的数据
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}
// 注册Vuex
Vue.use(Vuex)
// 创建store
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
// 导出 store
export default store 
