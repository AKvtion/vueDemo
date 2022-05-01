var firstname = "mike";
var lastname = "John";
var year = 1998;

export{firstname,lastname,year};

export function multiply(x,y){
    return x*y;
}

//导出多个函数
function v1(){console.log('v1')}
function v2(){console.log('v2')}
export{
    v1,v2
}

