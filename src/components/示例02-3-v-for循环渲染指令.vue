<!--
 * @Author: your name
 * @Date: 2021-10-14 12:02:42
 * @LastEditTime: 2021-10-14 12:13:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\示例02-3-v-for循环渲染指令.vue
-->
<template>
  <div class="main-container">
    <h1 style="color:pink; ">示例02-3-v-for循环渲染指令     </h1>
    <ol style="color: red; fontsize: 16px">
      <li>v-for指令 它一般用来对数组对象进行循环渲染</li>
      
    </ol>
        <br />*************************<br />
    <div v-for="(item,key) in list" data-id="key">
        索引是：{{key}}
        元素内容是：{{item}}
    </div>
      
  </div>
</template>
<script>
export default {
  data() {
    return {
       list:[10,20,30],
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