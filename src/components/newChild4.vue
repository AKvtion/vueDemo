<!--
 * @Author: fauchard
 * @Date: 2021-10-26 10:08:27
 * @LastEditTime: 2021-10-28 18:19:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\newChild4.vue
-->
<template>
  <div class="main-container">
    我是子组件4 <br />
    <span>-------------------</span><br />
    <ol>
      <li>向父组件发送数据</li>
    </ol>

    <button @click="sendData">发送数据给父组件</button>
    <input type="text" v-model="dataSun1" />
  </div>
</template>
 
<script>
export default {
  name: "newCild4",
  data() {
    return {
      dataSun1: "666666",
    };
  },
  methods: {
    sendData() {
      this.$emit("myDefinedEvent", this.dataSun1);
    },
  },
};
</script>
 
<style scoped>
.main-container {
  margin: 0 auto;
  color: green;
  background-color: red;
}
</style>