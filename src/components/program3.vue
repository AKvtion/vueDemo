<template>
  <div class="main-container">
       
       <p>用户名：{{ this.$route.query.name }}</p>
       
    </div>

</template>


<script>
export default {
    
   
}
</script>

<style scoped>
 .main-container{
     margin:0 auto;
     color:rgb(22, 228, 22);
     background-color:red;
 }
</style>