import {createStore, combineReducers} from 'redux' // 引入redux
import {counterReducer} from '../PayMain/ChildA/reducer' // 这个是引入新建的reducer文件
import {counterReducerB} from '../PayMain/ChildB/reducer'
import {counterReducerC} from '../PayMain/ChildC/reducer'

// 所有的reducer
const rootReducer = combineReducers({
    counterReducer,
    counterReducerB,
    counterReducerC,
})
//所有的state状态
const initalState = {}

const store = createStore(rootReducer, initalState);//  创建store

export default store;// 抛出store