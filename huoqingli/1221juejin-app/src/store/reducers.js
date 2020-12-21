import { combineReducers } from "redux";
import hotListReducer from '@pages/components/content/reducer';
import isLoginReducer from '@pages/components/header/reducer';
export default combineReducers({
    hotListReducer,
    isLoginReducer
})