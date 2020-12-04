/**
 * @Description: store.js
 * @author zhangzhong
 * @date 2020/12/4 
*/
import {createStore} from 'redux'
import  count from './reducer/reducer'
let initState = {
    leftNum:5,
    midNum:2,
    rightNum:1000
}
//createStore是由redux提供的方法来创建我store，这个方法有两个参数 第一个参数reducer， 第二参数时state
let store = createStore(count,initState)

export default store