<template>
  <div>
    <button @click="getStudent">获取学生信息</button>
    <button @click="getCar">获取汽车信息信息</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudent() {
      axios.get("http://localhost:8083/api/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.mssage);
        }
      );
      // localhost/:1 Access to XMLHttpRequest at 'http://localhost:3000/students' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
      // 跨域了 违背了同源策略  协议名 主机名 端口号必须一致(目前所处的是8080端口)
      // 1.cors 可以解决 响应头
      // 2.jsonp  借助了 script标签的src属性(不受同源策略)
      // 3.代理服务器 (服务器与服务器之间没有策略) vue.config.js配置
      // 插入一个服务器 请求端口3000 上方更改为8080
    },
    getCar() {
      axios.get("http://localhost:8083/demo/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.mssage);
        }
      );
    },
  },
};
</script>

<style>
</style>
