/*
 * @Description: 
 * @Author: C-Happy
 * @Date: 2021-03-29 12:24:29
 * @LastEditors: C-Happy
 * @LastEditTime: 2021-03-30 14:44:58
 */
import {combineReducers} from 'redux';
import personalManagementNav from '../components/mainRight/table/headerNav/reducer'
import sideItemsClick from '../components/sideLeft/reducer'
import tableHousing from '../components/mainRight/table/tableBody/tableHousing/reducer'
import tableHoused from '../components/mainRight/table/tableBody/tableHoused/reducer'

const rootReducer = combineReducers({
  personalManagementNav,
  sideItemsClick,
  tableHousing,
  tableHoused
  //在这里导入每个模块的reducer
})

export default rootReducer