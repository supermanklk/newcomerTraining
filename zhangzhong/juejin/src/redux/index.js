/**
 * @Description: index.js
 * @author zhangzhong
 * @date 2020/12/20 
*/
import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'         //引入thunk处理异步的redux

// 引入reducer
import reducers from "./reducers";

// 创建store实例
let store = createStore( reducers, applyMiddleware(thunk) )

export default store