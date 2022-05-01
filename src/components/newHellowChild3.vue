<!--
 * @Author: your name
 * @Date: 2021-10-26 10:08:27
 * @LastEditTime: 2021-10-26 10:52:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\newHellowChild3.vue
-->
<template>
  <div class="main-container">

    我是子组件3 接收来自父组件数据<br>
    <span>-------------------</span><br>
    数据1：{{dataSun1}}<br>

    数据2：{{dataSun2}}<br>
  </div>
</template>
 
<script>
export default {
  name: 'newHellowChild3',
  props:['dataSun1','dataSun2'],

}
</script>
 
<style scoped>
 .main-container{
     margin:0 auto;
     color:green;
     background-color:red;
 }
</style>