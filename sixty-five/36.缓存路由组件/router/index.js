// 该文件专门用于创建这个应用的路由器
import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
// 创建一个路由器  路由key-value
const router = new VueRouter({
  routes: [
    // 给路由命名 可以简化代码(简化路由的跳转)
    {
      name: 'Guanyu',
      path: "/about",
      component: About
    },
    {
      path: "/Home",
      component: Home,
      children: [ // 二级路由 不用加 /
        { path: "news", component: News },
        {
          path: "message", component: Message,
          children: [{
            name: "XiangQing",
            path: 'detail/:id/:title', // params
            component: Detail,
            // props的第一种写法(值为对象) 该对象中的所有key-value 都会以props的形式传给Detail组件(传递的是死数据)
            // props: { a: 1, b: "heloo" }
            // props的第二种写法(值为布尔值) query参数不行
            // props: true  // 若布尔值为true 就会把该路由组件收到的所有params参数以props形式,传给Detail组件
            // props的第三种写法(值为函数) query参数和params都可以
            // props($route) {
            // props({ params }) { //结构赋值
            props({ params: { id, title } }) { // 双层结构赋值
              // return { id: $route.params.id, titel: $route.params.title } 第一层
              // return { id: params.id, titel: params.title } 第二层
              return { id, title } // 必须返回对象  第三层
            }
          }]
        },
      ]
    }
  ]
});
export default router
