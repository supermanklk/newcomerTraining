/**
 * @Description: astnc.js
 * @author zhangzhong
 * @date 2020/11/26
 */


//函数a
async function a(name){
    const fir = await b("hi");
    c("nihao");
    log("sir")
    return name;
}
//函数b
function b(vlue){
    log(vlue)
    return vlue;
}
//函数c
function c(name){
    log(name);
    return name;
}

function log(value){
    console.log(value);

}
//说明async返回的是一个Promise对象，会将async的return 当作回调函数的参数传值

a("zz").then(function(res){
    console.log(res);
})