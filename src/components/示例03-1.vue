<template>
<div id="app">
  <div class="main-container">
  <!--
  题目：知识点
  小知识点： 知识点详细说明
  验证：小知识点
  -->
    <h1 style="color:pink; ">
      示例03-1
    </h1>

    <ol style="color:red;fontsize:16px ">
     
    </ol>

    <br />*************************<br />
    <div :style="{backgroundColor:pink}">
        外层div   外层div 外层div
        <div :style="mystyle">
            内层div  内层div  内层div
        </div>
    </div>



  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      mystyle:{margin:'0 auto',backgroundColor:'red',width:'200px',height:'150px'},
      margin:'0 auto',
      pink:'pink',
      height:'200px',
      width:'80%',

      // *************************************
      htmlstr: '<p>html字符串段落</p>',
      unhtmlstr: 'unhtml字符串段落',
    };
  },
  methods: {
    commitEnter(e) {
      this.msg2 = '按键是enter触发了commitEnter方法：修改msg1';
      this.msg1 = e.target.value;
    },
    commitEsc(e) {
      this.msg2 = '按键是esc触发了commitEsc方法：清空文本域，也清空了msg1';
      e.target.value = '';
      this.msg1 = e.target.value;
    },
  },
};
</script>
<style scoped>
#app{
  font-size: 22px;
}
/***********************************************/
.main-container {
  margin: 0 auto;
  color: yellow;
  background-color: blue;
}
</style>
