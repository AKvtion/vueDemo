
<!--
 * @Author: fauchard
 * @Date: 2021-10-26 10:08:27
 * @LastEditTime: 2021-10-27 21:48:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\newChild4.vue
-->
<template>
  <div class="main-container">
    我是兄弟组件6 ：接收来自父组件传来的值，它是兄弟组件传给父组件<br />

    <p>姓名：{{ myName }}</p>
  </div>
</template>

<script>
export default {
  props: ["myName"],
};
</script>


<style scoped>
.main-container {
  margin: 0 auto;
  color: rgb(103, 255, 103);
  background-color: red;
}
</style>