<template>
  <div id="app">   
    <p>插值表达式：{{name1}}</p>
  </div>
</template>

<script>
export default{
  data(){
    return {
      name1:'张三'
    }
  }
}
</script>

<style scoped>
#app{
  font-size: 22px;
}
</style>
