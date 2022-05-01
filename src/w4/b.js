/*
 * @Author: fauchard
 * @Date: 2021-09-24 14:40:30
 * @LastEditTime: 2021-09-24 14:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\w4\b.js
 */
console.log("------------------");
//导入 数据
import { firstName,lastName,year } from "./a.js";
console.log(firstName+' '+lastName+' '+year);

console.log("===================");

//导入 函数
import {add,multiply} from './a.js';
let data1 = 100;
let data2 = 200;
let rstAdd = add(data1,data2);
let rstMultiply = multiply(data1,data2);
console.log(rstAdd+' '+rstMultiply);
