<!--
 * @Author: fauchard
 * @Date: 2021-11-03 21:34:42
 * @LastEditTime: 2021-11-07 00:54:05
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \dm\dm\src\components\backstage.vue
-->

<template>
  <div class="main-container">
    <h1>测试：命令路由:后台管理</h1>
    <router-view></router-view>
    <div>
      <router-view name="left" class="left"></router-view>
      <router-view name="main" class="right"></router-view>
    </div>
    <div>
    </div>
    <div style="both:clear"></div>

   
  </div>
</template>
 
<script>
</script>

     
 
<style scoped>
.main-container {
  margin: 0 auto;
  color: yellow;
  background-color: blue;
}
.left {
  float: left;
  background-color: rgb(219, 146, 204);
}
.right {
  float: right;
  background-color: rgb(101, 219, 136);
}
</style>