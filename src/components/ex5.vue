<template>
  <div>
    <div id="app">
      <div v-text="msg1"></div>
      <div v-html="cityName"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg1: "<h2>text</h2>",
      cityName: "<h3>shanghai</h3>",
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
