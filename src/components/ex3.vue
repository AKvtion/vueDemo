<template>
  <div>
    <div id="app">
      <input v-bind:value="msg" />
      <p>插值表达式：{{msg2}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是 v-bind",
       msg2:'张三'
    };
  },
};
</script>
<style scoped>
div {
  margin: 0 auto;
  font-size: 22px;
}
</style>
