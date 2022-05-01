<!--
 * @Author: your name
 * @Date: 2021-10-14 11:51:22
 * @LastEditTime: 2021-10-14 12:13:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\示例02-2-v-text和v-html指令，到及插值表达式.vue
-->
<template>
  <div class="main-container">
    <h1 style="color:pink; ">v-text指令  v-html指令   </h1>
    <ol style="color: red; fontsize: 16px">
      <li>v-text指令 将数据绑定到标签元素 替换掉标签元素的内容</li>
      <li>v-html指令 将数据绑定到标签元素 替换掉标签元素的内容，
          而且它直接将数据先进行HTML解析
      </li>
      <li>
        v-text指令 基本不用 因为他会替换掉标签元素的内容 而插值不会
      </li>
    </ol>
        <br />*************************<br />
   <p v-text="msg"></p>
        <br />*************************<br />
    <p v-html="msg"></p>
        <br />*************************<br />
    <p v-text="name"></p>
    <span>插值表达式 姓名：{{ name }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:"<h3>我是 v-text</h3>",
      name:"李四"
    };
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