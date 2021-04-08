/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-29 12:23:58
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-29 12:24:11
 */
import { createStore} from 'redux'
import reducer from '../reducer/index'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 创建数据存储仓库
)

export default store