
<template>
  <div class="main-container">
  
      <h1>测试：命令路由</h1>

      <h3>id:{{this.$route.params.id}} + name:{{this.$route.params.name}}</h3>
          
     
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