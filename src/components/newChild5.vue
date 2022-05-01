<!--
 * @Author: fauchard
 * @Date: 2021-10-27 21:24:33
 * @LastEditTime: 2021-10-27 21:51:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\newChild5.vue
-->
<template>
  <div class="main-container">
    我是兄弟组件5 :向父组件发送数据 再由父组件传值给兄弟组件6<br />

    <input type="text" v-model="name" />
    <button @click="sendData">发送姓名</button>
  </div>
</template>
 
<script>
export default {
  name: "newCild4",
  data() {
    return {
      name: "值：(兄弟组件5被传到了组件6)",
    };
  },
  methods: {
    sendData() {
      this.$emit("myDefinedEvent", this.name);
    },
  },
};
</script>
 
<style scoped>
.main-container {
  margin: 0 auto;
  color: rgb(103, 255, 103);
  background-color: red;
}
</style>