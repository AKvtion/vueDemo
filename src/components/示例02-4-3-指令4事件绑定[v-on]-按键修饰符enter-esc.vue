<template>
<div id="app">
  <div class="main-container">
  <!--
  题目：知识点
  小知识点： 知识点详细说明
  验证：小知识点
  -->
    <h1 style="color:pink; ">
      示例02-4-指令4显示或隐藏元素[vif-vshow]
    </h1>

    <ol style="color:red;fontsize:16px ">
      <li>
        v-if-->取值布尔值，为true,则显示，否则，则隐藏
      </li>
      <li>
         v-show-->取值布尔值，为true,则显示，否则，则隐藏
      </li>
    </ol>

    <br />*************************<br />
    <button @click="isShow=!isShow">显示或隐藏</button>
 <div v-if='isShow' >这是v-if</div>

    <br />*************************<br />
    <button @click="isShow=!isShow">显示或隐藏</button>
 <div v-show='isShow' >这是v-show</div>
    <br />*************************<br />
    <input type="text" @keyup.enter="commitEnter" @keyup.esc="commitEsc" />
    <p>
      <span>从文本域获取的数据如下：</span><br />
      <span v-html="msg1"></span>
    </p>
    <p>
      <span>文本域中输入enter或rsc情况如下：</span><br />
      <span v-html="msg2"></span>
    </p>
     <br />*************************<br />
    1245245234
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
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
