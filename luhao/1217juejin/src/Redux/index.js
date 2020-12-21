/**
 * @Description: 
 * @author LuHao
 * @date 2020/12/18 
*/
import {createStore, combineReducers} from 'redux' // 引入redux
import {counterReducer} from '../jueJin/component/new/reducer'
import {overAll} from '../jueJin/reducer'
// 所有的reducer
const rootReducer = combineReducers({
    counterReducer,
    overAll,
})
//所有的state状态
const initalState = {}

const store = createStore(rootReducer, initalState);//  创建store

export default store;// 抛出store