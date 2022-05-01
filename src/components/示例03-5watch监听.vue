<!--
 * @Author: your name
 * @Date: 2021-10-20 15:23:21
 * @LastEditTime: 2021-10-20 21:24:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\示例03-5watch监听.vue
-->

<template>
  <div id="app">
    <div class="main-container">
      <!--
  题目：知识点
  小知识点： 知识点详细说明
  验证：小知识点
  -->
      <h1 style="color: pink">示例03-5watch</h1>

      <ol style="color: red; fontsize: 16px">
        <li>监听下面的值</li>
        <p>watch用于监视data成员的变化 可以得到变化前后的变化</p>
        <p>
          当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，
          只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听。
        </p>
      </ol>

      <br />*************************<br />

      
      <!-- input中的v-model用于在表单控件元素上创建双向数据绑定 -->
      <input type="text" v-model="cityName" />
      <p v-html="msg"></p>

      <input type="text" v-model="city2.id" />
      <input type="text" v-model="city2.name" />
      <p v-html="msg2"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: "shanghai",
      city2: { id: 1, name: "xinxin" },
      msg: "",
      msg2: "",
    };
  },
  //使用计算属性
  computed: {
    strCity2(){
      return JSON.stringify(this.city2);
    }
  },
  watch: {
    cityName(newData, oldData) {
      (this.msg = "新值：" + newData + "---旧值：" + oldData),
        console.log(newData, oldData);
    },
    strCity2: {
      handler(newData, oldData) {
        let newobj = JSON.parse(newData)
        let oldobj = JSON.parse(oldData)
        this.msg2 = "id的新值旧值：" + newobj.id + "--- " + oldobj.id+'<br>';
        this.msg2 += "name的新值旧值：" + newobj.name + "--- " + oldobj.name;
       
      },
    },
    deep: true,
    immediate: true,
  },
};
</script>
<style scoped>
#app {
  font-size: 22px;
}
/***********************************************/
.main-container {
  margin: 0 auto;
  color: yellow;
  background-color: blue;
}
</style>
