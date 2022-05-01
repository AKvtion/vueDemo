<template>
  <div>
    <div id="app">
      <button @click="showInfo">请单击</button>
        <p>{{msg}}</p>
    </div>
    
  </div>
  
</template>
<script>
 export default {
     
     methods:{
         showInfo(){
             alert("触发单击事件")
             this.msg = "触发单击事件"
         }
     }
     
 }
</script>
<style scoped>
div {
  margin: 0 auto;
  font-size: 22px;
}
</style>
