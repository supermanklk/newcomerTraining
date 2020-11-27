/**
 * @Description: async函数
 * @author 霍青利
 * @date 2020/11/26 11:45
*/

// async function timeout(ms) {
//     await new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     })
// }
//
// async function asyncPrint(value, ms) {
//      await timeout(ms);
//     console.log( value);
// }
//
// asyncPrint('hello world', 1000);


/**
 * sleep 函数
 * @author 霍青利
 * @date 2020/11/26 11:59
 * @param
 * @param
 * @return
*/

// function sleep(interval) {
//     return new Promise(resolve => {
//         setTimeout(resolve, interval)
//     })
// }
//
// async function one2FiveInAsync() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//         await sleep(1000);
//     }
// }
//
// one2FiveInAsync();

// async function f() {
//     return Promise.resolve('hello world');
//
// }
//
// f().then(v => console.log(v))
// "hello world"


function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`); // 300
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}

function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1) // return 500
        .then(time2 => step2(time2))
        .then(time3 => step3(time3))
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        });
}

doIt();