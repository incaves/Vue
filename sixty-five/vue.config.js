// 调试脚手架的文件
// module.exports = {
//   // 可以修改文件的名字(原本是固定的)(也不能不写)
//   pages: {
//     index: {
//       // page 的入口
//       entry: 'src/index/main.js',
//       // 模板来源
//       template: 'public/index.html',
//     },
//     subpage: 'src/subpage/main.js'
//   },
//   // 关闭语法检查
//   "lintOnSave": false
// }
module.exports = {
  lintOnSave: false
}
//  代理服务器 (方式一)
// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:3000' // 写请求的服务器的端口号
//   }
// }
//  代理服务器 (方式二)
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': { // 请求前缀(只要请求的前缀是/api 就发送代理)
//         target: 'http://localhost:3000',
//         pathRewrite: { '^/api': "" }, // 服务器请求到服务器时(自动匹配掉/api)(服务器没有/api)
//         ws: true, // websocket
//         changeOrigin: true // 是否告诉服务器自己来自那里 false是告诉  控制host值
//       },
//       '/demo': {
//         target: 'http://localhost:3001',
//         pathRewrite: { '^/demo': "" },
//         ws: true,
//         changeOrigin: true
//       },
//     }
//   }
// }
