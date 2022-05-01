<!--
 * @fauchard
 * @Date: 2021-09-08 15:58:48
 * @LastEditTime: 2021-11-13 23:25:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\App.vue
-->
<template>
  <div class="main-container">
    <router-link to="/">返回主页</router-link><br>
    <ol>
      
        <router-link to="/ex1">示例1</router-link>----
        <router-link to="/ex2">示例2</router-link>----
        <router-link to="/ex3">示例3</router-link>----
        <router-link to="/ex4">示例4</router-link>----
        <router-link to="/ex5">示例5</router-link>----
        <router-link to="/ex6">示例6</router-link><br>
        <router-link to="/ex7">示例01-1-vue实例成员data+插值表达式</router-link><br>
        <router-link to="/ex8">示例02-1-v-bind指令和插值表达式</router-link><br>

        <router-link to="/ex9">示例02-2-v-text和v-html指令，到及插值表达式</router-link><br>
        <router-link to="/ex10">示例02-3-v-for循环渲染指令</router-link><br>
        <router-link to="/ex11">示例02-4-v-on事件绑定指令</router-link><br>

        <router-link to="/ex12">示例02-5-v-forshow-显示或隐藏元素</router-link><br>
		    <router-link to="/ex13">示例02-4-3-指令4事件绑定[v-on]-按键修饰符enter-esc</router-link>----<br>
        <router-link to="/ex14">示例03 指令v-on</router-link>----<br>
        <router-link to="/ex15">示例3-1内外层div</router-link>----<br>
        <router-link to="/ex16">示例03-2method</router-link>----<br>
        <router-link to="/ex17">示例03-4computed</router-link>----<br>
        <router-link to="/ex18">示例03-5watch监听</router-link>----<br>
        <router-link to="/ex19">示例03-6filters</router-link>----<br>
        <router-link to="/ex20">示例03-7event</router-link>----<br>

        <router-link to="/ex21">示例compoent</router-link>----<br>
        <router-link to="/ex22">示例element</router-link>----<br>


         <router-link to="/ex27?id=20&username=admin">进入登录</router-link> 
<!--
        <router-link to="/ex27/10/ROOT">进入登录</router-link>-------->

        
        <router-link to="/ex23">进入父路由 ----- 关于公司</router-link>


        <router-link to="/ex24">进入学校</router-link>----<br>

        <router-link to="/ex26">进入后台模板</router-link>
        
        <router-link to="/programMain">编程式</router-link>

         <router-link to="/ex30">vuex状态管理</router-link>
    
        <p>得到当前的路由名字</p>
        {{this.$route.path}}----<br>

    </ol>

    <hr />
    <router-view />
  </div>
</template>

<script>
</script>

<style scoped>

.main-container {
  font-size: 30px;
  background-color: rgb(74, 74, 88);
  color: yellow;
  margin: 0 auto;
}
</style>
