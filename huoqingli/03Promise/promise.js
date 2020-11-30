/**
 * @Description:
 * @author 霍青利
 * @date 2020/11/26 10:05
 */

// promise 一旦创建就会立即执行
// let promise = new Promise((resolve,reject) => {
//     console.log('Promise');
//     resolve();
// })
// promise.then(() => {
//     console.log('resolved');
// });
// console.log('Hi!') // Promise Hi resolved

/**
 * Promise 的状态一旦发生改变就不会再变化了
 * */


/**
 *
 * @author 霍青利
 * @date 2020/11/26 10:53
 * @param url
 * @return promise
*/


const getJSON = function (url) {
    const promise = new Promise((resolve, reject) => {
        const handler = function() {
            if (this.readyState !== 4) {
                return
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        // 实例化异步请求
        const client = new XMLHttpRequest();
        // 设置请求方法和请求路径
        client.open('GET', url);
        // 响应内容
        client.onreadystatechange = handler;
        client.responseType = 'json';
        // 设置请求头
        client.setRequestHeader('Accept','application/json');
        // 发送数据
        client.send();
    });
    return promise;
};

getJSON('posts.json').then(json => {
    console.log('content: ' + json);
}, error => {
    console.error('error', error);
})


/**
 * promise 预加载图片
 * @author 霍青利
 * @date 2020/11/26 11:25
 * @param
 * @param
 * @return
*/


function proLoadImage(path){
    return new Promise((resolve, reject) => {
        const image = new Image();
        let tag = document.getElementById('app');
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
        tag.append(image);
    })
}
let path = './x.png';
proLoadImage(path)
    .then(res => console.log('res', res))
    .catch(err => console.log('err', err));