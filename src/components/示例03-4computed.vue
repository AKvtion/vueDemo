<!--
 * @Author: your name
 * @Date: 2021-10-20 15:23:21
 * @LastEditTime: 2021-10-22 16:37:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\示例03-4computed.vue
-->
示例03-2method.vue
<template>
  <div id="app">
    <div class="main-container">
      <!--
  题目：知识点
  小知识点： 知识点详细说明
  验证：小知识点
  -->
      <h1 style="color: pink">示例03-4computed</h1>

      <ol style="color: red; fontsize: 16px">
        <li>计算下面的值</li>
      </ol>

      <br />*************************<br />

      <button v-on="updateMsg">修改下面msg的值</button>
      <p>单价{{ price }}</p>
      <p>数量{{ count }}</p>
      <p>总价{{ totalPrice }}</p>
      <button @click="addPrice(1)">增加单价</button>
      <button @click="addCount(20)">增加数量</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 90,
      count: 1,
      msg: "",

      // *************************************
      htmlstr: "<p>html字符串段落</p>",
      unhtmlstr: "unhtml字符串段落",
    };
  },
  methods: {
    addPrice(a) {
      this.price += a;
    },
    addCount(a) {
      this.count += a;
    },
  },
  computed: {
    totalPrice() {
      this.msg = "totalPrice执行了一次";
      return this.price * this.count;
    },
  },
};
</script>
<style scoped>
#app {
  font-size: 22px;
}
/***********************************************/
.main-container {
  margin: 0 auto;
  color: yellow;
  background-color: blue;
}
</style>
