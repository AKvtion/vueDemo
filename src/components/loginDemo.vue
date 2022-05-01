<!--
 * @Author: your name
 * @Date: 2021-11-07 10:41:17
 * @LastEditTime: 2021-11-07 12:24:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \dm\dm\src\components\loginDemo.vue
-->
<template>
    <div class="main-container">
        <h1>登录组件</h1>
        <!-- query 取值 -->
        <h3>id: {{this.$route.query.id}}  + name: {{this.$route.query.username}}</h3> 


        <!-- params 取值 
        <h3>id: {{this.$route.params.id}}  + name: {{this.$route.params.username}}</h3>-->
    </div>
</template>


<script>
export default {
        
    
}
</script>

<style>
 .main-container{
     margin:0 auto;
     color:yellow;
     background-color:blue;
 }
</style>