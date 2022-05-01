<template>
<div id="app">
  <div class="main-container">
  <!--
  题目：知识点
  小知识点： 知识点详细说明
  验证：小知识点
  -->
    <h1 style="color:pink; ">
      示例03 v-on 单击次数
    </h1>

    <ol style="color:red;fontsize:16px ">
      <li>
        v-on 绑定事件 监听DOM事件 触发JavaScript 代码 或绑定事件
      </li>
      
    </ol>

    <br />*************************<br />
    <button @click="count++">统计按钮单击的次数</button>

    <p>
      <span>从文本域获取的数据如下：</span><br />
      <span>{{count}}</span>
    </p>

   <br />*************************<br />
    <button @click="getCount()">统计按钮单击的次数</button>

    <p>
      <span>从文本域获取的数据如下：</span><br />
      <span>{{count}}</span>
    </p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      count:0
      // *************************************

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
    getCount(){
        this.count++
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
