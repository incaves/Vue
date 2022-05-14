<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!--跳转路由并携带params  to的字符串写法 记得要配置路由规则-->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{
          item.title
        }}</router-link> -->
        <!--跳转路由并携带params  to的对象写法 记得要配置路由规则-->
        <!-- params对象穿惨必须使用命名路由 不能使用path:"/home/message/detail" 这种 -->
        <router-link
          :to="{
            name: 'XiangQing',
            params: {
              id: item.id,
              title: item.title,
            },
          }"
          >{{ item.title }}</router-link
        >
        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: 1, title: "消息001" },
        { id: 2, title: "消息002" },
        { id: 3, title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(item) {
      // console.log(this.$router);
      this.$router.push({
        name: "XiangQing",
        params: {
          id: item.id,
          title: item.title,
        },
      });
    },
    replaceShow(item) {
      // 每次点击上一步的行为都会被替换掉
      this.$router.replace({
        name: "XiangQing",
        params: {
          id: item.id,
          title: item.title,
        },
      });
    },
  },
};
</script>

<style>
</style>
