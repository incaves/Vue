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
      component: About,
      meta: { isAuth: true, title: "关于" }
    },
    {
      name: "zhuye",
      path: "/Home",
      component: Home,
      meta: { title: "主页" },
      children: [ // 二级路由 不用加 /
        {
          name: "xinwen",
          path: "news",
          component: News,
          meta: { isAuth: true, title: "新闻" },
          //独享路由守卫 只对news这个组件有限制
          // beforeEnter: (to, from, next) => {
          //   if (to.meta.isAuth) {// 使用meta 判断是否需要权限 meta路由里配置
          //     if (localStorage.getItem('School') === 'qinghua') {
          //       next() // 放行
          //     } else {
          //       alert('没有权限查看')
          //     }
          //   } else {
          //     next() //放行
          //   }
          // }
        },
        {
          name: "xiaoxi", path: "message", component: Message, meta: { isAuth: true, title: "消息" },
          children: [{
            name: "XiangQing",
            meta: { title: "详情" },
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
// 全局前置路由守卫——初始化的时候被调用,在每一次路由切换之前被调用
// 接收三个参数
// to 即将要进入的目标  from 当前导航正要离开的路由
// (目前 如果localStorage的School值不是school只能看About和Home组件)
// (如果是qinghua 就可以看Home下的News和Message...等组件)
// router.beforeEach((to, from, next) => {
//   // if (to.path === '/home/news' || to.path === '/home/message') {
//   // if (to.name === 'xinwen' || to.name === 'xiaoxi') {
//   if (to.meta.isAuth) {// 使用meta 判断是否需要权限 meta路由里配置
//     if (localStorage.getItem('School') === 'qinghua') {
//       next() // 放行
//     } else {
//       alert('没有权限查看')
//     }
//   } else {
//     next() //放行
//   }
// })
// // 全局后置路由守卫  切换完了在执行
// router.afterEach((to, from) => {
//   // 全局后置守卫没有next
//   // 一般网站使用此守卫的作用是 路由切换完了 改网站标题
//   document.title = to.meta.title || 'incaves'
// })
export default router
