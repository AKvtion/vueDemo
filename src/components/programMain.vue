<!--
 * @Author: your name
 * @Date: 2021-11-13 22:26:35
 * @LastEditTime: 2021-11-13 23:26:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \dm\src\components\programMain.vue
-->
<template>
  <div class="main-container">

        <button @click="goStart">跳转push</button>
        <button @click="goStart2">跳转replace</button>

        <button @click="goBack">返回1</button>
        <button @click="goFront">前进1</button>
       
        <router-view></router-view>
    </div>

</template>


<script>



export default {

   methods: {
        goStart () {
          this.$router.push({ path: '/program2', query: { name: 'pushAdmin' } })
        },

        goStart2 () {
          this.$router.replace({ path: '/ex29', query: { name: 'replaceRoot' } })
        },

          goBack () {
          this.$router.go(-1)   // 使用this.$router.go()进行后退操作
        },
        
        goFront () {
          this.$router.go(+1)   // 使用this.$router.go()进行前进操作
        }

      },
     
}
</script>

<style scoped>
 .main-container{
     margin:0 auto;
     color:green;
     background-color:red;
 }
</style>