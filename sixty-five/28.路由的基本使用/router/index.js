// 该文件专门用于创建这个应用的路由器
import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About'
// 创建一个路由器  路由key-value
const router = new VueRouter({
  routes: [
    {
      path: "/about",
      component: About
    },
    {
      path: "/Home",
      component: Home
    }
  ]
});
export default router
