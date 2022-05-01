<template>
  <div class="main-container">

    我是子组件<br>
    <span>-------------------</span><br>
    数据1：{{proSun1}}<br>

    数据2：{{proSun2}}<br>
  </div>
</template>
 
<script>
export default {
  name: 'newHellowChild',
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