
<template>
  <div class="main-container">
        <h1>父路由 ----  关于公司</h1>
        <router-link to="/ex23/detail">子路由一 ------- 公司简介</router-link>----<br>
        <router-link to="/ex23/gov">子路由二 ------- 联系公司</router-link>----<br>
        <router-view></router-view>

  </div>
</template>

<script>
export default {

}
</script>

<style>
div {
  margin: 0 auto;
  font-size: 22px;
}
 .main-container{
     margin:0 auto;
     color:green;
     background-color:red;
 }
</style>