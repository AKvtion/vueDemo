<!--
 * @fauchard
 * @Date: 2021-10-14 14:35:41
 * @LastEditTime: 2021-10-14 14:53:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\components\示例02-5-v-forshow-显示或隐藏元素.vue
-->

<template>
  <div class="main-container">
    <h1 style="color:pink; ">示例02-5-v-forshow 指令     </h1>
    <ol style="color: red; fontsize: 16px">
      <li>v-if 取布尔值 为true显示 否则隐藏 执行效率低 实际开发用得多</li>
      <li>v-for 取布尔值 为true显示 否则隐藏 执行效率高</li>
    </ol>
    <br />*************************<br />
    <button @click="isShow = !isShow">显示或隐藏元素</button>
    <div v-if="isShow">这是v-if</div>
    <br />*************************<br />
    <button @click="isShow = !isShow">显示或隐藏元素</button>
    <div v-if="isShow">这是v-show</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    getCount() {
      this.count++;
    },
  },
};
</script>
<style scoped>
/***********************************************/
.main-container {
  font-size: 30px;
  background-color: rgb(74, 74, 88);
  color: yellow;
  margin: 0 auto;
}
</style>