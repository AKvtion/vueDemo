<!--
 * @Author: your name
 * @Date: 2021-09-28 17:22:19
 * @LastEditTime: 2021-10-14 11:08:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\ex4.vue
-->
<template>
  <div>
    <div id="app">
      <p>总价格：{{ totalPrice }}</p>
      <p>单价：{{ price }}</p>
      <p>数量：{{ num }}</p>
      <div>
        <button @click="num == 0 ? 0 : num--">减少数量</button>
        <button @click="num++">增加数量</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      price: 20,
      num: 0
    };
  },
  methods:{
      totalPrice(){
        return this.price*this.num;
      }
  }
};
</script>
<style scoped>
div {
  margin: 0 auto;
  font-size: 22px;
}
</style>
