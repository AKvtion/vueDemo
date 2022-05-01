示例03-2method.vue
<template>
<div id="app">
  <div class="main-container">
  <!--
  题目：知识点
  小知识点： 知识点详细说明
  验证：小知识点
  -->
    <h1 style="color:pink; ">
      示例03-2methods
    </h1>

    <ol style="color:red;fontsize:16px ">
        <li> 修改下面的值 </li>
    </ol>

    <br />*************************<br />
    
    <button v-on="updateMsg">修改下面msg的值</button>
        <p v-html="msg"></p>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg:'原值<br>',

      // *************************************
      htmlstr: '<p>html字符串段落</p>',
      unhtmlstr: 'unhtml字符串段落',
    };
  },
  methods: {
      updateMsg(){
          this.msg += "修改后的新值！！！"
      },
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
