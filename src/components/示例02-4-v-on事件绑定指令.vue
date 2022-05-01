<!--
 * @Author: your name
 * @Date: 2021-10-14 12:10:29
 * @LastEditTime: 2021-10-14 12:22:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\示例02-4-v-for循环渲染指令.vue
-->

<template>
  <div class="main-container">
    <h1 style="color:pink; ">示例02-4-v-on事件绑定指令     </h1>
    <ol style="color: red; fontsize: 16px">
      <li>
        v-on事件绑定指令 监听DOM事件 触发时运行一些Javascript代码 或者绑定方法
      </li>
      <li>v-on事件绑定指令 简写 @</li>
      <li>v-on事件绑定指令 前面绑定的js脚本是一个表达式 methods方法</li>
    </ol>
        <br />*************************<br />
    <button v-on:click="count++">统计按钮单击的次数</button>
    <p>
      <span>按钮单击的次数如下：</span>
      <span>{{ count }}</span>
    </p>
        <br />*************************<br />
    <button @click="count++">统计按钮单击的次数</button>
    <p>
      <span>按钮单击的次数如下：</span>
      <span>{{ count }}</span>
    </p>
    <br />*************************<br />
    <button @click="getCount()">统计按钮单击的次数</button>
    <p>
      <span>按钮单击的次数如下：</span>
      <span>{{ count }}</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    getCount() {
      this.count++;
    },
  },
};
</script>
<style scoped>
/***********************************************/
.main-container {
  font-size: 30px;
  background-color: rgb(74, 74, 88);
  color: yellow;
  margin: 0 auto;
}
</style>