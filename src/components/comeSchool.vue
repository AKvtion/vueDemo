
<template>
  <div class="main-container">
  
      <h1>测试：命令路由</h1>

      <router-link :to="{name:'myPath',params:{id:100,name:'MIKE'}}">
          通过命令路由，进入vue页面（班级）
      </router-link>
    <router-view></router-view>


  </div>
</template>
 
<script>


</script>

     
 
<style scoped>
 .main-container{
     margin:0 auto;
     color:yellow;
     background-color:blue;
 }
</style>