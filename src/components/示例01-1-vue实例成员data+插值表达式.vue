<!--
 * @fauchard
 * @Date: 2021-10-14 10:48:46
 * @LastEditTime: 2021-10-14 11:31:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\示例01-1-vue实例成员data+插值表达式.vue
-->
<template>
  <div class="main-container">
    <h1 style="color:pink; ">示例01-1-vue实例成员data+插值表达式     </h1>
    <ol style="color: red; fontsize: 16px">
      <li>
              利用插值表达式 将 vue 实例 成员中的数据绑定到页面视图中       
      </li>
    </ol>
        <br />*************************<br />
    <div>
      {{ name }}
    </div>
      
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "定义初始数据！",
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