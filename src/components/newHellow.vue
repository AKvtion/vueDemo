<!--
 * @Author: fauchard
 * @Date: 2021-10-26 10:08:27
 * @LastEditTime: 2021-10-28 18:55:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\newHellow.vue
-->
<template>
  <div class="main-container">
    我是父组件 <br />
    局部组件在哪里使用就在哪里注册，当前的是父组件<br />
    全局组件在app.vue注册，全局在哪里都可以使用

    
    <span>-------------------</span>
    下面是一个子组件(已完成）来自局部注册
    <br />
    <newHellowChild
      v-bind:proSun1="dataParent1"
      v-bind:proSun2="dataParent2"
    ></newHellowChild>



    <span>-------------------</span>
    下面是一个子组件(已完成）来自全局注册
    <newHellowChild2></newHellowChild2>



    <span>-------------------</span>
    <p>本组件是父组件 它向子组件传送两个数据</p>
    <p>下面是一个子组件 它接收了父组件中的两个数据 具体如下：</p>
    <newHellowChild3
      v-bind:dataSun1="dataParent3"
      v-bind:dataSun2="dataParent4"
    ></newHellowChild3>



    <span>-------------------</span>
    <p>下面是一个子组件 它接收了父组件中的两个数据 具体如下：</p>
    <newChild4 @myDefinedEvent="receiveData"> </newChild4>
    <p>接收来自儿子数据</p>
    {{ dataFather4FromSun }}<br />



    <span>-------------------</span>
    <p>下面是两个兄弟组件传值</p>
    <!-- v-on 缩写是 @ -->
    <new-child-5 @myDefinedEvent="sendData"></new-child-5>
    <!-- v-bind 缩写是 ： -->
    <new-child-6 :myName="name"></new-child-6>
  </div>
</template>
 
<script>
import newHellowChild from "@/components/newHellowChild";

import newHellowChild3 from "@/components/newHellowChild3";
import newChild4 from "@/components/newChild4";

//引入组件
import newChild5 from "@/components/newChild5";
import newChild6 from "@/components/newChild6";

export default {
  components: {
    newHellowChild,
    newHellowChild3,
    newChild4,
    //注册组件
    newChild5,
    newChild6,
  },
  data() {
    return {
      // dataParent1: "来自父亲的数据1",
      // dataParent2: "来自父亲的数据2",
      dataParent3: "来自父亲的数据3",
      dataParent4: "来自父亲的数据4",
      dataFather4FromSun: "0000",
      name: "父组件的值（原值）",
    };
  },
  methods: {
    receiveData(data) {
      this.dataFather4FromSun = data;
    },
    sendData(name) {
      this.name = name;
    },
  },
};
</script>
 
<style scoped>
.main-container {
  margin: 0 auto;
  color: yellow;
  background-color: blue;
}
</style>