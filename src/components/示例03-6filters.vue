<!--
 * @Author: your name
 * @Date: 2021-10-20 15:23:21
 * @LastEditTime: 2021-10-20 21:23:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\示例03-6filters.vue
-->

<template>
  <div id="app">
    <div class="main-container">
      <!--
  题目：知识点
  小知识点： 知识点详细说明
  验证：小知识点
  -->
      <h1 style="color: pink">示例03-6filters</h1>

      <ol style="color: red; fontsize: 16px">
        <li>过滤下面的值</li>
      </ol>

      <br />*************************<br />
      <input type="text" v-model="message"/>
      <div>{{message | toUpcase}}</div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'helloworld',
    };
  },
  methods: {
      
      },
      // 使用watch监听cityName变化
    filters: {
        // 将 helloworld 转换为 HELLOWORLD
        toUpcase (value) {
          return value ? value.toUpperCase() : ''
    } 
  },
};
</script>
<style scoped>
#app {
  font-size: 22px;
}
/***********************************************/
.main-container {
  margin: 0 auto;
  color: yellow;
  background-color: blue;
}
</style>
