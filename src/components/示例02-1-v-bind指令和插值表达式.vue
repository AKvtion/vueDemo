<!--
 * @Author: your name
 * @Date: 2021-10-14 11:37:17
 * @LastEditTime: 2021-10-14 12:13:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\示例02-1-v-bind指令和插值表达式.vue
-->
<template>
  <div class="main-container">
    <h1 style="color:pink; ">v-bind指令      </h1>
    <ol style="color: red; fontsize: 16px">
      <li>v-bind指令 将数据绑定到标签元素的某个属性</li>
      <li>v-bind指令 简写  :  标签元素的属性名</li>
      <li>
        v-bind指令 绑定的是标签元素的属性
        而插值表达式是将数据绑定到元素的innerHTML
      </li>
    </ol>
        <br />*************************<br />
    <input v-bind:value="msgbind" /><br />
        <br />*************************<br />
    <input :value="msgbind" /><br />
        <br />*************************<br />
    <input :value="msgbind" /><br />
    <span>插值表达式：{{ msgbind2 }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgbind:"我是 v-bind 1",
      msgbind2:"我是插值表达式！"
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