<template>
  <div class="main-container">

    我是子组件<br>
    <span>-------------------</span><br>
    数据1<br>

    数据2<br>
  </div>
</template>
 
<script>
export default {
  name: 'newHellowChild2',
  props:['proSun1','proSun2']
}
</script>
 
<style scoped>
 .main-container{
     margin:0 auto;
     color:green;
     background-color:red;
 }
</style>