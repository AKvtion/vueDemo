/*
 * @Author: your name
 * @Date: 2021-09-08 15:58:48
 * @LastEditTime: 2021-11-13 23:06:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// ****iview框架******
import 'iview/dist/styles/iview.css';
import { Button } from 'iview';
Vue.component('Button', Button);
// 全局注册组件
import newHellowChild2 from "@/components/newHellowChild2";
Vue.component(newHellowChild2.name,newHellowChild2);

// **********
//全局注册element UI 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// ***********
// element-ui组件库，以element-ui懒加载为例
// import { Button } from 'element-ui';

// Vue.component(Button.name, Button);

// 引入store
import store from './vuex/store' 


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
