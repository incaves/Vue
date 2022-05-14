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
            path: 'detail',
            component: Detail
          }]
        },
      ]
    }
  ]
});
export default router
