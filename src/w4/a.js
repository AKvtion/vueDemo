/*
 * @Author: fauchard
 * @Date: 2021-09-24 14:40:17
 * @LastEditTime: 2021-09-24 14:43:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\w4\a.js
 */
//导出∶数据
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName,lastName,year};
// 导出2∶函数
function add(x,y){
    return x + y;
}
function multiply(x,y){
    return x * y;
}
export { add,multiply };