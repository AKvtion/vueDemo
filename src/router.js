/*
 * @Author: fauchard
 * @Date: 2021-09-08 15:58:48
 * @LastEditTime: 2021-11-13 22:32:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\router\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

// import exa from "@/components/Example1";

Vue.use(Router);
// 3-1）路由懒加载
const ex1 = () => import("@/components/ex1");
const ex2 = () => import("@/components/ex2");

const ex3 = () => import("@/components/ex3");
const ex4 = () => import("@/components/ex4");

const ex5 = () => import("@/components/ex5");
const ex6 = () => import("@/components/ex6");

const ex7 = () => import("@/components/示例01-1-vue实例成员data+插值表达式");
const ex8 = () => import("@/components/示例02-1-v-bind指令和插值表达式");

const ex9 = () =>
  import("@/components/示例02-2-v-text和v-html指令，到及插值表达式");
const ex10 = () => import("@/components/示例02-3-v-for循环渲染指令");

const ex11 = () => import("@/components/示例02-4-v-on事件绑定指令");
const ex12 = () => import("@/components/示例02-5-v-forshow-显示或隐藏元素");

const ex13 = () =>
  import("@/components/示例02-4-3-指令4事件绑定[v-on]-按键修饰符enter-esc");
const ex14 = () => import("@/components/示例03 指令v-on");

const ex15 = () => import("@/components/示例03-1");
const ex16 = () => import("@/components/示例03-2method");

const ex17 = () => import("@/components/示例03-4computed");
const ex18 = () => import("@/components/示例03-5watch监听");

const ex19 = () => import("@/components/示例03-6filters");
const ex20 = () => import("@/components/示例03-7event");

const ex21 = () => import("@/components/newHellow");
const ex22 = () => import("@/components/elementDemo");

//嵌套路由
const ex23 = () => import("@/components/comAbout");
const detail = () => import("@/components/comAbout_detail");
const gov = () => import("@/components/comAbout_gov");

//动态路由
const ex24 = () => import("@/components/comeSchool");
const ex25 = () => import("@/components/comeClass");

//命令路由
const ex26 = () => import("@/components/backstage");
const backLeft = () => import("@/components/backLeft");
const backRight = () => import("@/components/backRight");
const backHeader = () => import("@/components/backHeader");

//传值
const ex27 = () => import("@/components/loginDemo");

//编程式路由
const programMain = () => import("@/components/programMain");
const program2 = () => import("@/components/program2");
const program3 = () => import("@/components/program3");

//vuex状态管理
const vuex = () => import("@/components/vuexDemo");
export default new Router({
  routes: [
    // 1）创建路由
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/ex1",
      // name: "exaName",
      component: ex1
    },
    {
      path: "/ex2",
      component: ex2
    },
    {
      path: "/ex3",
      component: ex3
    },
    {
      path: "/ex4",
      component: ex4
    },
    {
      path: "/ex5",
      component: ex5
    },
    {
      path: "/ex6",
      component: ex6
    },
    {
      path: "/ex7",
      component: ex7
    },
    {
      path: "/ex8",
      component: ex8
    },
    {
      path: "/ex9",
      component: ex9
    },
    {
      path: "/ex10",
      component: ex10
    },
    {
      path: "/ex11",
      component: ex11
    },
    {
      path: "/ex12",
      component: ex12
    },
    {
      path: "/ex12",
      component: ex12
    },
    {
      path: "/ex13",
      component: ex13
    },
    {
      path: "/ex14",
      component: ex14
    },
    {
      path: "/ex15",
      component: ex15
    },
    {
      path: "/ex16",
      component: ex16
    },
    {
      path: "/ex17",
      component: ex17
    },
    {
      path: "/ex18",
      component: ex18
    },
    {
      path: "/ex19",
      component: ex19
    },
    {
      path: "/ex20",
      component: ex20
    },
    {
      path: "/ex21",
      component: ex21
    },
    {
      path: "/ex22",
      component: ex22
    },

    {
      path: "/ex27",
      component: ex27
    },
    // {
    //   path: "/ex27/:id/:username",
    //   component: ex27
    // },

    //嵌套路由
    {
      path: "/ex23",
      component: ex23,
      children: [
        {
          path: "detail",
          component: detail
        },
        {
          path: "gov",
          component: gov
        }
      ]
    },

    //=====
    {
      path: "/ex24",
      component: ex24,
      children: [
        {
          path: "/ex25/:id/:name",
          name: "myPath",
          component: ex25
        }
      ]
    },

    //嵌套路由 --- 命令视图
    {
      path: "/ex26",
      component: ex26,
      children: [
        {
          path: "/",
          components: {
            default: backHeader,
            left: backLeft,
            main: backRight
          }
        }
      ]
    },

    //编程路由
    {
      path: "/programMain",
      component: programMain,
      children: [
        {
          path: "/program2",
          component: program2
        },
        {
          path: "/ex29",
          component: program3
        }
      ]
    },

    {
      path: "/ex30",
      component: vuex
    }
  ]
});
