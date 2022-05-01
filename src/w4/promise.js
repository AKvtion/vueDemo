/*
 * @Author: fauchard
 * @Date: 2021-09-24 14:59:12
 * @LastEditTime: 2021-09-24 15:11:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dm\dm\src\w4\promise.js
 */
const p = new Promise(function(resolve, reject) {
  resolve(1);
})
  .then(function(value) {
    //第一个then //1
    console.log(value);
    return value * 2;
  })
  .then(function(value) {
    //第二个then //2
    console.log(value);
  })
  .then(function(value) {
    //第三个then // undefined
    console.log(value);
    return Promise.resolve("resolve");
  })
  .then(function(value) {
    //第四个then // resolve
    console.log(value);
    return Promise.reject("reject");
  })
  .then(
    function(value) {
      //第五个then //reject∶reject
      console.log("resolve:" + value);
    },
    function(err) {
      console.log("reiect:" + err);
    }
  );
