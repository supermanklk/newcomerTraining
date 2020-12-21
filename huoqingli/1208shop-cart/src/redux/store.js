/**
 * @Description: store
 * @author 霍青利
 * @date 2020/12/9 14:22
*/
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import reducers from './reducers';
// import reducer from "../pages/goodsList/reducer";

const store = createStore(reducers, applyMiddleware(thunk))

export default store