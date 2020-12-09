/**
 * @Description: 
 * @author luhao
 * @date 2020/12/9 
*/
import {createStore, combineReducers, applyMiddleware } from 'redux' // 引入redux
import {counterReducer} from "../taoMain/reducer";
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    counterReducer
})

const initalState ={}

const store = createStore(rootReducer,initalState,applyMiddleware(thunk) );

export default store;