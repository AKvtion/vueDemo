<!--
 * @Author: your name
 * @Date: 2021-10-20 21:25:33
 * @LastEditTime: 2021-10-23 09:53:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\示例03-7event.vue
-->

<template>
  <div id="app">
    <div class="main-container">
      <!--
  题目：知识点
  小知识点： 知识点详细说明
  验证：小知识点
  -->
      <h1 style="color: pink">示例03-7stop</h1>

      <ol style="color: red; fontsize: 16px">
        <li>stop阻止冒泡</li>
        <li>prevent阻止默认处理方式</li>
        <li>once只执行一次</li>
        <li>
          self可以理解为跳过冒泡事件和捕获事件，
          只有直接作用在该元素上的事件才可以执行。
        </li>
      </ol>

      <br />*************************<br />
      <div @click="doParent">
        父亲div
        <br />
        <button @click="doSun">儿子1：button1</button>
        <button @click.stop="doSun">儿子2：button2</button>
      </div>
      <p v-html="message"></p>

      <br />*************************<br />
      <a href="baidu.com">不阻止默认行为</a>
      <a href="baidu.com" v-on:click.prevent>阻止默认行为</a>
      <br />
      <div @click.capture="doParent2">
        父亲：div
        <button @click="doSun2">儿子1 button1</button>
        <button @click.stop="doSun2">儿子2 button2</button>
      </div>
      <p v-html="msg2"></p>

      <br />*************************<br />
      <br />
      <button @click.once="done">button2</button>
      <p v-html="msg3"></p>

      <br />*************************<br />
      <div v-on:click="show">
        <div v-on:click.capture="show2">
          2
          <div v-on:click="show3">3</div>
        </div>
      </div>

      <br />*************************<br />
      <!--点击obj4的时候会分别显示： obj4、 obj3、  obj1；
.self会监视事件是否是直接作用到obj2上，若不是，则冒泡跳过该元素，-->
      <div id="content">
        <div id="obj1" v-on:click="doc">
          obj1
          <div id="obj2" v-on:click.self="doc">
            obj2
            <!--只有点击obj2才可以出发其点击事件。-->
            <div id="obj3" v-on:click="doc">
              obj3
              <div id="obj4" v-on:click="doc">obj4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      context: "",
      msg: "",
    };
  },
  methods: {
    doParent() {
      this.message += "父亲div元素，发生了单击事件<br>";
    },
    doSun() {
      this.message += "儿子div元素，发生了单击事件<br>";
    },
    doParent2() {
      this.message += "父亲div元素，发生了单击事件<br>";
    },
    doSun2() {
      this.message += "儿子button1，发生了单击事件<br>";
    },
    done() {
      this.message += "button ,发生了单击事件<br>";
    },
    show: function () {
      console.log("这是app的方法");
    },
    show2: function () {
      console.log("这是app2的方法");
    },
    show3: function () {
      console.log("这是app3的方法");
    },
    doc: function () {
      this.msg = "被点击了",
      alert(this.msg);
    },
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
