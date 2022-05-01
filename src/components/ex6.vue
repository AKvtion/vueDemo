<template>
  <div>
    <div id="app">
      <div v-for="(item,key) in list" data-id="key">
          索引是：{{key}}
        元素内容是：{{item}}
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[1,2,3]
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
